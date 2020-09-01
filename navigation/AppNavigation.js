import React from 'react';
import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
// import StartupScreen from '../screens/StartupScreen';
import {AuthNavigator,TabNavigator} from '../navigation/SpagyristNavigator';



const AppNavigator = props => {
const isAuth = useSelector(state => !!state.auth.token);
const didTryAutoLogin = useSelector(state => state.auth.didTryAutoLogin);

  
    return <NavigationContainer>
      
           {isAuth && <TabNavigator/> }
 { !isAuth &&  <AuthNavigator/> }
         {/* {!isAuth && !didTryAutoLogin && <StartupScreen/> }   */}
    </NavigationContainer>
}

export default AppNavigator;