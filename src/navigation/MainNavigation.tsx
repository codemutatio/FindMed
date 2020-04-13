import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import MedMap from '../components/screens/MedMap';
import DiscoverScreen from '../components/screens/Discover';
import FacInfo from '../components/screens/FacInfo';
import ImageView from '../components/screens/ImageView';

const Stack = createStackNavigator();

const MainNavigation = (): JSX.Element => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#1C58E2',
        },
        headerTitleAlign: 'center',
        headerTintColor: '#fff',
      }}
      headerMode="none">
      <Stack.Screen
        name="DiscoverScreen"
        component={DiscoverScreen}
        options={{
          title: 'Discover',
        }}
      />
      <Stack.Screen
        name="MedMap"
        component={MedMap}
        options={{
          title: 'MedMap',
        }}
      />
      <Stack.Screen
        name="FacilityInfo"
        component={FacInfo}
        options={{
          title: 'FacilityInfo',
        }}
      />
      <Stack.Screen
        name="ImageView"
        component={ImageView}
        options={{
          title: 'ImageView',
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default MainNavigation;
