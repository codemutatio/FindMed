import React, {useState} from 'react';
import {Text, View, Image, Dimensions, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import StarRating from 'react-native-star-rating';
import {TabView, TabBar} from 'react-native-tab-view';

import Reviews from './Reviews';
import Overview from './Overview';
import Images from './Images';
import styles from '../../styles/styles';

const initialLayout = {width: Dimensions.get('window').width};

const renderTabBar = (props) => (
  <TabBar
    {...props}
    indicatorStyle={styles.infoIndic}
    style={styles.infoBar}
    labelStyle={styles.infoLabel}
  />
);

const Details = ({marker}) => {
  const {title, rating, category, eta, ratedBy} = marker;

  return (
    <View style={styles.infoTitleContainer}>
      <Text style={styles.infoTitle}>{title}</Text>
      <View style={styles.infoRatingContainer}>
        <Text style={styles.infoRate}>{rating}</Text>
        <View style={styles.infoRating}>
          <StarRating
            disabled={true}
            maxStars={5}
            rating={rating}
            fullStarColor="#FFC107"
            starSize={15}
          />
        </View>
        <Text style={styles.infoRatedBy}>{`(${ratedBy})`}</Text>
      </View>
      <Text style={styles.infoCategory}>{`${category} . ${eta} min`}</Text>
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
    <View style={styles.infoContainer}>
      <View style={styles.infoImageContainer}>
        <Image
          source={image}
          width={Dimensions.get('window').width}
          style={styles.infoImage}
        />
        <TouchableOpacity
          style={styles.infoPacity}
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

export default FacInfo;
