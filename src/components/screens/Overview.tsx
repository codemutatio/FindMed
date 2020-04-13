import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from '../../styles/styles';

const Overview = ({marker}) => {
  const {description, address, contactNumber, website, opening} = marker;
  return (
    <View style={styles.overviewContainer}>
      <ScrollView>
        <View style={styles.overviewScroll}>
          <Text style={styles.overviewDescriptionContainer}>
            About Facility
          </Text>
          <Text style={styles.overviewDescription}>{description}</Text>
        </View>
        <View style={styles.overviewAboutContainer}>
          <Text style={styles.overviewAbout}>More About</Text>
          <View>
            <View style={styles.overviewAddressContainer}>
              <Icon name="enviromento" size={30} color="#AA215C" />
              <Text style={styles.overviewAddress}>{address}</Text>
            </View>
            <View style={styles.overviewOpeningContainer}>
              <Icon name="clockcircleo" size={30} color="#AA215C" />
              <Text style={styles.overviewOpening}>{opening}</Text>
            </View>
            <View style={styles.overviewContactContainer}>
              <Icon name="phone" size={30} color="#AA215C" />
              <Text style={styles.overviewContact}>{contactNumber}</Text>
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
