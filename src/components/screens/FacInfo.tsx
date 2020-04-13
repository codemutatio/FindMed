import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import StarRating from 'react-native-star-rating';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

import Reviews from './Reviews';
import Overview from './Overview';
import Images from './Images';

import {MapProps} from '../../types';

const initialLayout = {width: Dimensions.get('window').width};

const renderTabBar = (props) => (
  <TabBar
    {...props}
    indicatorStyle={{backgroundColor: 'white'}}
    style={{
      backgroundColor: '#1A1A1C',
      borderWidth: 1,
      borderBottomColor: '#2D2D2D',
      borderTopColor: '#2D2D2D',
    }}
    labelStyle={{fontFamily: 'Poppins-Medium'}}
  />
);

const Details = ({marker}) => {
  const {title, rating, category, eta, ratedBy} = marker;

  return (
    <View style={{padding: 10}}>
      <Text
        style={{color: '#fff', fontSize: 24, fontFamily: 'Poppins-Regular'}}>
        {title}
      </Text>
      <View style={{flexDirection: 'row'}}>
        <Text
          style={{
            fontSize: 12,
            color: '#C0C0C0',
            fontFamily: 'Poppins-Regular',
            marginRight: 5,
          }}>
          {rating}
        </Text>
        <View style={{marginRight: 5, width: 80}}>
          <StarRating
            disabled={true}
            maxStars={5}
            rating={rating}
            fullStarColor="#FFC107"
            starSize={15}
          />
        </View>
        <Text
          style={{
            fontSize: 12,
            color: '#C0C0C0',
            fontFamily: 'Poppins-Regular',
          }}>
          {`(${ratedBy})`}
        </Text>
      </View>
      <Text
        style={{
          fontSize: 13,
          color: '#C4C4C4',
          fontFamily: 'Poppins-Regular',
        }}>
        {`${category} . ${eta} min`}
      </Text>
    </View>
  );
};

const FacInfo = ({navigation, route}): JSX.Element => {
  const {marker} = route.params;
  const {image, images, review} = marker;
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'overview', title: 'Overview'},
    {key: 'images', title: 'Images'},
    {key: 'reviews', title: 'Reviews'},
  ]);

  const renderScene = ({route}) => {
    switch (route.key) {
      case 'overview':
        return <Overview marker={marker} />;
      case 'images':
        return <Images images={images} />;
      case 'reviews':
        return <Reviews review={review} />;
      default:
        return null;
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: '#1A1A1C'}}>
      <View style={{width: '100%'}}>
        <Image
          source={image}
          width={Dimensions.get('window').width}
          style={{width: '100%', height: 200}}
        />
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: 10,
            left: 15,
            backgroundColor: 'rgba(0,0,0,0.7)',
            padding: 10,
            borderRadius: 50,
          }}
          onPress={() => {
            navigation.goBack();
          }}>
          <Text>
            <Icon name="arrowleft" size={24} color="#fff" />
          </Text>
        </TouchableOpacity>
      </View>
      <Details marker={marker} />
      <TabView
        renderTabBar={renderTabBar}
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});

export default FacInfo;
