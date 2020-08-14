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
import 'react-native-gesture-handler';
import AppNavigator from './navigation/AppNavigation';

const App = props => {
  return(
   
     <AppNavigator/>
  )
}

const styles = StyleSheet.create({
 screen:{
   flex:1
 }

});

export default App;
