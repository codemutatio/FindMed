import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {main} from './sagas';
import reducer from './reducers';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(main);

export default store;
