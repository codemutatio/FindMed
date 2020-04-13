import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const ImageItem = ({img}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{
        width: 160,
        height: 160,
        borderRadius: 15,
        marginRight: 5,
        overflow: 'hidden',
      }}
      onPress={() => navigation.navigate('ImageView', {img})}>
      <Image
        source={img}
        style={{
          width: 200,
          height: 200,
        }}
      />
    </TouchableOpacity>
  );
};

const Images = ({images}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#1A1A1C', padding: 10}}>
      <FlatList
        horizontal={true}
        data={images}
        renderItem={({item}) => <ImageItem img={item} />}
        keyExtractor={(item) => item.id}
        style={{width: '100%'}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default Images;
