import { takeEvery, call, put } from 'redux-saga/effects';
import { fencedLocations } from './helper';

import * as TYPES from './actionTypes';
import {
    setErrors,
    setLocations,
} from './actions';

function* getFilteredLocations(payload) {
    try {
        const filteredLocations = yield call(fencedLocations, payload);
        console.log(filteredLocations);
        yield put(setLocations(filteredLocations));
    } catch (error) {
        yield put(setErrors({message: "error filtering locations"}));
    }
}
function* getFilteredLocationsEffect({ payload }) {
    yield call(getFilteredLocations, payload);
}



export default function* actionWatcher() {
    yield takeEvery(TYPES.GET_LOCATIONS, getFilteredLocationsEffect);
}
