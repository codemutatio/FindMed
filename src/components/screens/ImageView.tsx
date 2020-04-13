import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from '../../styles/styles';

const ImageView = ({navigation, route}) => {
  const {img} = route.params;
  return (
    <View style={styles.imageViewContainer}>
      <Image source={img} style={styles.imageViewImg} />
      <TouchableOpacity
        style={styles.imageViewPacity}
        onPress={() => {
          navigation.goBack();
        }}>
        <Icon name="arrowleft" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default ImageView;
