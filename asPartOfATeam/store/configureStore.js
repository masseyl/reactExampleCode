/* eslint-disable no-undef */
import { autoRehydrate } from 'redux-persist';
import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { get } from 'lodash';
import { createNetworkMiddleware } from 'react-native-offline';

import apiMiddleware from '../api/apiMiddleware';
import rootReducer from '../reducers';

const devTools = get(window, '__REDUX_DEVTOOLS_EXTENSION__', () => a => a);

const config = {
  actionTypes: ['CREATE_TASK', 'UPDATE_TASK', 'MOVE_TASK']
};
const networkMiddleware = createNetworkMiddleware(config);
export default () => createStore(
  rootReducer,
  compose(
    applyMiddleware(networkMiddleware, apiMiddleware, thunk),
    autoRehydrate(),
    devTools()
  )
);
