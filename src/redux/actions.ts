import * as TYPES from './actionTypes';
import {
  setRadiusType,
  setRegionType,
  setLocationsType,
  getLocationsType,
  setErrorsType,
  clearErrorsType,
} from '../types';

/**
 * Triggers request to set RADIUS
 *
 * @function
 * @return {void} The {@link actionTypes.SET_RADIUS } action.
 */
export const setRadius = (payload): setRadiusType => ({
  payload,
  type: TYPES.SET_RADIUS,
});

/**
 * Triggers request to set REGION
 *
 * @function
 * @return {void} The {@link actionTypes.SET_REGION } action.
 */
export const setRegion = (payload): setRegionType => ({
  payload,
  type: TYPES.SET_REGION,
});

/**
 * Triggers request to set locations
 *
 * @function
 * @return {void} The {@link actionTypes.SET_LOCATIONS } action.
 */
export const setLocations = (payload): setLocationsType => ({
  payload,
  type: TYPES.SET_LOCATIONS,
});

/**
 * Triggers request to get locations
 *
 * @function
 * @return {void} The {@link actionTypes.GET_LOCATIONS } action.
 */
export const getLocations = (payload): getLocationsType => ({
  payload,
  type: TYPES.GET_LOCATIONS,
});

/**
 * Triggers request to set errors after a bad request
 *
 * @function
 * @return {void} The {@link actionTypes.SET_ERRORS } action.
 */
export const setErrors = (payload): setErrorsType => ({
  payload,
  type: TYPES.SET_ERRORS,
});

/**
 * Triggers request to clear errors after a success
 *
 * @function
 * @return {void} The {@link actionTypes.CLEAR_ERRORS } action.
 */
export const clearErrors = (): clearErrorsType => ({
  type: TYPES.CLEAR_ERRORS,
});
