import {
  SET_RADIUS,
  SET_REGION,
  SET_LOCATIONS,
  GET_LOCATIONS,
  SET_ERRORS,
  CLEAR_ERRORS,
} from '../redux/actionTypes';

export interface setRadiusType {
  type: typeof SET_RADIUS;
  payload: number;
}

export interface setRegionType {
  type: typeof SET_REGION;
  payload: Region;
}

export interface setErrorsType {
  type: typeof SET_ERRORS;
  payload: object;
}

export interface clearErrorsType {
  type: typeof CLEAR_ERRORS;
}

export interface setLocationsType {
  type: typeof SET_LOCATIONS;
  payload: Marker[];
}

export interface getLocationsType {
  type: typeof GET_LOCATIONS;
  payload: FilterMarker;
}

export interface Coordinate {
  latitude: number;
  longitude: number;
}

export interface Marker {
  title: string;
  description: string;
  image: {uri: string};
  coordinate: Coordinate;
  eta: number;
  category: string;
}

export interface Region {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

export interface FilterMarker {
  searchRadius: number;
  region: Region;
  category: string;
  markers: Marker[];
}

export interface Locations {
  filteredMarkers: Marker[];
  region: object;
  radius: number;
  markers: Marker[];
}

export interface MapProps {
  navigation: object;
}
