import React from 'react';
import {View, FlatList, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from '../../styles/styles';

const ImageItem = ({img}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.imageContainer}
      onPress={() => navigation.navigate('ImageView', {img})}>
      <Image source={img} style={styles.imageImg} />
    </TouchableOpacity>
  );
};

const Images = ({images}) => {
  return (
    <View style={styles.imageListContainer}>
      <FlatList
        horizontal={true}
        data={images}
        renderItem={({item}) => <ImageItem img={item} />}
        keyExtractor={(item) => item.id}
        style={styles.imageList}
      />
    </View>
  );
};

export default Images;
