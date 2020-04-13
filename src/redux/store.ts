import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import appSaga from './sagas';
import locationReducer from './reducers';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(locationReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(appSaga);

export default store;
