import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Text, View, TouchableOpacity} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Slider from 'react-native-slider';
import Icon from 'react-native-vector-icons/EvilIcons';
import {useNavigation} from '@react-navigation/native';

import {setRegion} from '../../redux/actions';
import {requestLocationPermission} from '../../redux/helper';
import {placeholder} from '../../config/data';
import {setRadius, getLocations} from '../../redux/actions';
import styles from '../../styles/styles';

const Discover = (): JSX.Element => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [searchRadius, setSearchRadius] = useState(0);
  const [category, setCategory] = useState('');
  const {region, markers} = useSelector((state) => state);

  useEffect(() => {
    if (Object.keys(region).length === 0) {
      requestLocationPermission(returnUserLocationData);
    }
  });

  const returnUserLocationData = (data) => {
    dispatch(setRegion(data));
  };

  const handleDiscover = () => {
    dispatch(setRadius(searchRadius));
    dispatch(getLocations({searchRadius, region, category, markers}));
    navigation.navigate('MedMap');
  };

  return (
    <View style={styles.screen}>
      <View>
        <Text style={styles.headerText}>Discover</Text>
        <Text style={styles.headerTextSlim}>
          Find Medical Facilities Nearby
        </Text>
        <View style={styles.optionsContainer}>
          <Text style={styles.inputLabel}>Select Medical Facilities</Text>
          <View style={styles.selectContainer}>
            <Text>
              <Icon name="search" size={30} color="#767676" />
            </Text>
            <View style={styles.container}>
              <RNPickerSelect
                placeholder={placeholder}
                onValueChange={(value) => setCategory(value)}
                items={[
                  {label: 'Hospital', value: 'Hospital'},
                  {label: 'Pharmacy', value: 'Pharmacy'},
                  {label: 'Med Lab', value: 'Med Lab'},
                ]}
                style={{
                  iconContainer: styles.iconContainer,
                  inputAndroid: {
                    color: '#fff',
                  },
                }}
                Icon={() => {
                  return <Icon name="chevron-down" size={35} color="#767676" />;
                }}
                useNativeAndroidPickerStyle={false}
              />
            </View>
          </View>
        </View>

        <View style={styles.optionsContainer}>
          <Text style={styles.inputLabel}>Search Radius</Text>
          <View>
            <Slider
              value={searchRadius}
              onValueChange={(value) => setSearchRadius(value)}
              minimumValue={0}
              maximumValue={20000}
              step={1}
              minimumTrackTintColor="#0E28A5"
              maximumTrackTintColor="#C4C4C4"
              thumbTintColor="#0E28A5"
            />
            <View style={styles.radiusText}>
              <Text style={styles.radiusTextColor}>0m</Text>
              <Text style={styles.radiusTextColor}>20000m</Text>
            </View>
          </View>
          <Text style={styles.searchRadius}>{`${searchRadius} meters`}</Text>
        </View>
      </View>
      <View>
        <TouchableOpacity
          style={styles.discoverContainer}
          onPress={handleDiscover}>
          <Text style={styles.discoverBtn}>Discover</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Discover;
