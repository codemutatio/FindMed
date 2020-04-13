import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from '../../styles/styles';

const Overview = ({marker}) => {
  const {description, address, contactNumber, website, opening} = marker;
  return (
    <View style={{flex: 1, backgroundColor: '#1A1A1C', padding: 10}}>
      <ScrollView>
        <View
          style={{
            borderWidth: 1,
            borderBottomColor: '#2D2D2D',
            paddingBottom: 5,
          }}>
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              fontSize: 16,
              color: '#fff',
            }}>
            About Facility
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              fontSize: 14,
              color: '#C0C0C0',
            }}>
            {description}
          </Text>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderBottomColor: '#2D2D2D',
            paddingBottom: 5,
          }}>
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              fontSize: 16,
              color: '#fff',
              marginTop: 10,
            }}>
            More About
          </Text>
          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 10,
              }}>
              <Icon name="enviromento" size={30} color="#AA215C" />
              <Text
                style={{
                  color: '#C0C0C0',
                  fontFamily: 'Poppins-Regular',
                  fontSize: 14,
                  marginLeft: 10,
                }}>
                {address}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 10,
              }}>
              <Icon name="clockcircleo" size={30} color="#AA215C" />
              <Text
                style={{
                  color: '#C0C0C0',
                  fontFamily: 'Poppins-Regular',
                  fontSize: 14,
                  marginLeft: 10,
                }}>
                {opening}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 10,
              }}>
              <Icon name="phone" size={30} color="#AA215C" />
              <Text
                style={{
                  color: '#C0C0C0',
                  fontFamily: 'Poppins-Regular',
                  fontSize: 14,
                  marginLeft: 10,
                }}>
                {contactNumber}
              </Text>
            </View>
            <View style={styles.overviewWebsiteContainer}>
              <Icon name="earth" size={30} color="#AA215C" />
              <Text style={styles.overviewWebsite}>{website}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Overview;
