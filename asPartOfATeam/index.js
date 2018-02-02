/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { AsyncStorage, View } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { registerScreens, startApp } from './screens';
import configureStore from './store/configureStore';

class App extends Component {
  constructor(props) {
    // log network to chrome for debugging
    GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;
    GLOBAL.AsyncStorage = AsyncStorage;
    super(props);
    const store = configureStore();
    persistStore(store, {
      blacklist: ['apiStatusReducer', 'networkReducer'],
      storage: AsyncStorage
    });
    registerScreens(store, Provider);
    startApp();
  }
}
export default App;
