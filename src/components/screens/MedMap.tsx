import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {
  Text,
  View,
  Animated,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Circle, Marker} from 'react-native-maps';
import Icon from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';

import styles from '../../styles/styles';
import {mapStyle} from '../../redux/helper';
import {MapProps} from '../../types';

const {height} = Dimensions.get('window');

const CARD_HEIGHT = height / 4;
const CARD_WIDTH = CARD_HEIGHT - 50;

const MedMap = (): JSX.Element => {
  const navigation = useNavigation();
  const {filteredMarkers, radius, region} = useSelector((state) => state);
  let animationRef = new Animated.Value(0);
  let appIndex = 0;
  let appMap = React.createRef(null);

  useEffect(() => {
    animationRef.addListener(({value}) => {
      let index = Math.floor(value / CARD_WIDTH + 0.3); // animate 30% away from landing on the next item
      if (index >= filteredMarkers.length) {
        index = filteredMarkers.length - 1;
      }
      if (index <= 0) {
        index = 0;
      }

      clearTimeout(regionTimeout);
      const regionTimeout = setTimeout(() => {
        if (appIndex !== index) {
          appIndex = index;
          const {coordinate} = filteredMarkers[index];
          appMap.animateToRegion(
            {
              ...coordinate,
              latitudeDelta: region.latitudeDelta,
              longitudeDelta: region.longitudeDelta,
            },
            350,
          );
        }
      }, 10);
    });
  }, [animationRef, appIndex]);

  const interpolations: any = filteredMarkers.map((marker, index) => {
    const inputRange = [
      (index - 1) * CARD_WIDTH,
      index * CARD_WIDTH,
      (index + 1) * CARD_WIDTH,
    ];
    const scale = animationRef.interpolate({
      inputRange,
      outputRange: [1, 2.5, 1],
      extrapolate: 'clamp',
    });
    const opacity = animationRef.interpolate({
      inputRange,
      outputRange: [0.35, 1, 0.35],
      extrapolate: 'clamp',
    });
    return {scale, opacity};
  });
  const navigateToInfo = (marker) => {
    navigation.navigate('FacilityInfo', {marker: marker});
  };

  return (
    <View style={styles.container}>
      <MapView
        ref={(map) => (appMap = map)}
        provider={PROVIDER_GOOGLE}
        customMapStyle={mapStyle}
        initialRegion={region}
        style={styles.container}>
        <Marker coordinate={region} title={'my present loocation'} />
        <Circle
          center={{latitude: region.latitude, longitude: region.longitude}}
          radius={radius}
          fillColor={'rgba(99, 198, 184, 0.15)'}
        />
        {filteredMarkers.map((marker, index) => {
          const scaleStyle = {
            transform: [
              {
                scale: interpolations[index].scale,
              },
            ],
          };
          const opacityStyle = {
            opacity: interpolations[index].opacity,
          };
          return (
            <Marker
              key={index}
              coordinate={marker.coordinate}
              title={marker.title}
              description={marker.description}
              onPress={() => {
                navigateToInfo(marker);
              }}>
              <Animated.View style={[styles.markerWrap, opacityStyle]}>
                <Animated.View style={[styles.ring, scaleStyle]} />
                <View style={styles.marker} />
              </Animated.View>
            </Marker>
          );
        })}
      </MapView>
      <Animated.ScrollView
        horizontal
        scrollEventThrottle={1}
        showsHorizontalScrollIndicator={false}
        snapToInterval={CARD_WIDTH}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: animationRef,
                },
              },
            },
          ],
          {useNativeDriver: true},
        )}
        style={styles.scrollView}
        contentContainerStyle={styles.endPadding}>
        {filteredMarkers.map((marker, index) => (
          <TouchableOpacity
            style={styles.card}
            key={index}
            onPress={() => {
              navigateToInfo(marker);
            }}>
            <Image
              source={marker.image}
              style={styles.cardImage}
              resizeMode="cover"
            />
            <View style={styles.textContent}>
              <Text numberOfLines={1} style={styles.cardtitle}>
                {marker.title}
              </Text>
              <Text numberOfLines={1} style={styles.cardDescription}>
                {marker.description}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </Animated.ScrollView>
      <TouchableOpacity
        style={styles.filterBtn}
        onPress={() => {
          navigation.pop();
        }}>
        <Text>
          <Icon name="sound-mix" size={25} color="#1A1A1C" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default MedMap;
