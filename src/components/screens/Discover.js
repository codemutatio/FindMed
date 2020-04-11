import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Slider from "react-native-slider";
import Icon from 'react-native-vector-icons/EvilIcons';
import {useNavigation} from '@react-navigation/native';

import { setRegion } from '../../redux/actions';
import { requestLocationPermission } from '../../redux/helper';
import { setRadius, getLocations } from '../../redux/actions';

const placeholder = {
    label: 'Select facility type',
    value: null,
    color: '#767676',
};

const Discover = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const [searchRadius, setSearchRadius] = useState(0);
    const [category, setCategory] = useState('');

    const { region, markers } = useSelector(state => state);
    useEffect(()=> {
        if(Object.keys(region).length === 0) {
            requestLocationPermission(consoleData);
        }
    });

    const consoleData = (data) => {
        dispatch(setRegion(data));
    };

    const handleDiscover = () => {
        dispatch(setRadius(searchRadius));
        dispatch(getLocations({ searchRadius, region, category, markers }));
        navigation.navigate('MedMap');
    };

    return (
        <View style={styles.screen}>
            <View>
                <Text style={styles.headerText}>Discover</Text>
                <Text style={styles.headerTextSlim}>Find Med</Text>
                <View style={styles.optionsContainer}>
                    <Text style={styles.inputLabel}>Select Medical Facilities</Text>
                    <View style={styles.selectContainer}>
                        <Text >
                            <Icon name="search" size={30} color="#767676" />;
                        </Text>
                        <View style={{flex: 1}}>
                            <RNPickerSelect
                            placeholder={placeholder}
                            onValueChange={(value) => setCategory(value)}
                            items={[
                                { label: 'Hospital', value: 'Hospital' },
                                { label: 'Pharmacy', value: 'Pharmacy' },
                                { label: 'Med Lab', value: 'Med Lab' },
                            ]}
                            style={{
                                iconContainer: {
                                top: 10,
                                right: 8,
                                }
                            }}
                            Icon={() => {
                                return <Icon name="chevron-down" size={35} color="#767676" />;
                            }}
                            />
                        </View>
                    </View>
                </View>

                <View style={styles.optionsContainer}>
                    <Text style={styles.inputLabel}>Search Radius</Text>
                    <View>
                        <Slider
                            value={searchRadius}
                            onValueChange={value => setSearchRadius(value)}
                            minimumValue={0}
                            maximumValue={5000}
                            step={1}
                            minimumTrackTintColor="#0E28A5"
                            maximumTrackTintColor="#C4C4C4"
                            thumbTintColor="#0E28A5"
                        />
                        <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                            <Text style={{color: "#fff"}}>0m</Text>
                            <Text style={{color: "#fff"}}>5000m</Text>       
                        </View>
                    </View>
                    <Text style={{color: "#fff", textAlign: "center"}}>{`${searchRadius}meters`}</Text>
                </View>
            </View>
            <View>
                <TouchableOpacity style={{backgroundColor: "#AA215C", borderRadius: 15}} onPress={handleDiscover}>
                    <Text style={{fontFamily: "Poppins-Medium", fontSize: 24, color: "#fff", padding: 12, textAlign: 'center'}}>Discover</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#1A1A1C',
        padding: 20,
        justifyContent: 'space-between'
    },
    headerText: {
        fontFamily: 'Poppins-Bold',
        fontSize: 36,
        color: "#fff"
    },
    headerTextSlim: {
        fontFamily: 'Poppins-Light',
        fontSize: 36,
        color: "#fff",
        marginTop: -20
    },
    inputLabel: {
        color: "#E5E5E5",
        fontFamily: "Poppins-Medium",
        fontSize: 18,
        marginBottom: 6
    },
    optionsContainer: {
        width: '100%',
        marginTop: 30
    },
    selectContainer: {
        width: '100%',
        backgroundColor: "#2E2E30",
        borderRadius: 15,
        paddingHorizontal: 7,
        paddingVertical: 3,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    }
})

export default Discover;