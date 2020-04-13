import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const ImageView = ({navigation, route}) => {
  const {img} = route.params;
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#1A1A1C',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image source={img} style={{width: '100%', height: 300}} />
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
        <Icon name="arrowleft" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default ImageView;
