import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import StarRating from 'react-native-star-rating';
import styles from '../../styles/styles';

const Review = ({review}) => {
  const {name, date, rating, image, comment} = review;
  return (
    <View style={styles.reviewContainer}>
      <View style={styles.reviewHead}>
        <View style={styles.reviewImageContainer}>
          <Image source={image} style={styles.reviewImage} />
        </View>
        <View style={styles.reviewNameContainer}>
          <Text style={styles.reviewName}>{name}</Text>
          <Text style={styles.reviewDate}>{date}</Text>
        </View>
      </View>
      <View style={styles.reviewRating}>
        <StarRating
          disabled={true}
          maxStars={5}
          rating={rating}
          fullStarColor="#FFC107"
          starSize={15}
        />
      </View>
      <Text style={styles.reviewComment}>{comment}</Text>
    </View>
  );
};

const Reviews = ({review}) => {
  return (
    <View style={styles.reviewListContainer}>
      <FlatList
        data={review}
        renderItem={({item}) => <Review review={item} />}
        keyExtractor={(item) => item.id}
        style={styles.reviewList}
      />
    </View>
  );
};

export default Reviews;
