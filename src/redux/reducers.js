import * as TYPES from './actionTypes';
import { locationData} from '../config/data';

const initialState = {
    filteredMarkers: [],
    markers: locationData,
    region: {},
    radius: 0,
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case TYPES.SET_LOCATIONS:
            return { ...state, filteredMarkers: payload };
        case TYPES.SET_RADIUS:
            return { ...state, radius: payload };
        case TYPES.SET_REGION:
            return { ...state, region: payload };
        case TYPES.SET_ERRORS:
            return { ...state, errors: payload};
        case TYPES.CLEAR_ERRORS:
            return { ...state, errors: {}};
        default:
            return state;
    }
};

