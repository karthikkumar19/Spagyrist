/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  
  StyleSheet,
  
  View,
  Text,

} from 'react-native';
import {Provider} from 'react-redux';
import 'react-native-gesture-handler';
import AppNavigator from './navigation/AppNavigation';
import { createStore, combineReducers ,applyMiddleware } from 'redux';
import videosReducers from './store/reducers/Videos';
import authReducers from './store/reducers/Auth';
import userReducers from './store/reducers/user';
import ReduxThunk from 'redux-thunk';

const rootReducer = combineReducers({
  videos:videosReducers,
  auth:authReducers,
  user:userReducers

})

const store = createStore(rootReducer,applyMiddleware(ReduxThunk));

const App = props => {
  return(
    <Provider store={store}>
      <AppNavigator/>
    </Provider>
     
  )
}

const styles = StyleSheet.create({
 screen:{
   flex:1
 }

});

export default App;
