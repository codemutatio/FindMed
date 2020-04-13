import distance from '@turf/distance';
import {point} from '@turf/helpers';
import Geolocation from '@react-native-community/geolocation';
import {request, PERMISSIONS} from 'react-native-permissions';
import {Platform} from 'react-native';

import {FilterMarker, Marker} from '../types';

export const requestLocationPermission = async (callback) => {
  if (Platform.OS === 'android') {
    const response = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);

    if (response === 'granted') {
      getCurrentLocation(callback);
    }
  } else {
    const response = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);

    if (response === 'granted') {
      getCurrentLocation(callback);
    }
  }
};

const getCurrentLocation = (callback) => {
  let data;
  Geolocation.getCurrentPosition((position) => {
    let currentLocation = {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
      latitudeDelta: 0.04864195044303443,
      longitudeDelta: 0.040142817690068,
    };
    callback(currentLocation);
  });
  return data;
};

export const fencedLocations = (payload: FilterMarker) => {
  const {searchRadius, region, category, markers} = payload;
  console.log([searchRadius, region, category, markers]);
  return markers.filter((marker: Marker) => {
    const from = point([region.latitude, region.longitude]);
    const to = point([marker.coordinate.latitude, marker.coordinate.longitude]);
    const options = {units: 'meters'};
    const distanceFromCenter = distance(from, to, options);
    if (marker.category === category && distanceFromCenter <= searchRadius) {
      marker.eta = Math.round(distanceFromCenter / (1.78816 * 60));
    }
  });
};

export const mapStyle = [
  {
    elementType: 'geometry',
    stylers: [
      {
        color: '#242f3e',
      },
    ],
  },
  {
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#746855',
      },
    ],
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#242f3e',
      },
    ],
  },
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#d59563',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#d59563',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [
      {
        color: '#263c3f',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#6b9a76',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [
      {
        color: '#38414e',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#212a37',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9ca5b3',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [
      {
        color: '#746855',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#1f2835',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#f3d19c',
      },
    ],
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [
      {
        color: '#2f3948',
      },
    ],
  },
  {
    featureType: 'transit.station',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#d59563',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color: '#17263c',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#515c6d',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#17263c',
      },
    ],
  },
];
