import React from 'react';
// import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
// import {ShopNavigator,AuthNavigator} from './ShopNavigator';
// import StartupScreen from '../screens/StartupScreen';
import {TabNavigator} from '../navigation/SpagyristNavigator';



const AppNavigator = props => {
// const isAuth = useSelector(state => !!state.auth.token);
// const didTryAutoLogin = useSelector(state => state.auth.didTryAutoLogin);

  
    return <NavigationContainer>
        <TabNavigator />
          {/* {isAuth && <ShopNavigator/> }
{ !isAuth && didTryAutoLogin && <AuthNavigator/> }
          {!isAuth && !didTryAutoLogin && <StartupScreen/> } */}
    </NavigationContainer>
}

export default AppNavigator;