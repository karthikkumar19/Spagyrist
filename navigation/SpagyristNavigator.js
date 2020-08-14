import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator,DrawerItemList} from '@react-navigation/drawer';
import {Platform} from 'react-native';
import Colors from '../Constants/Colors';
import VideoOverViewScreen,{screenOptions as VideoOverviewScreenOptions} from '../screens/spagyrist/VideoOverviewScreen';
import VideoDetailScreen ,{screenOptions as VideoDetailScreenOptions} from '../screens/spagyrist/VideoDetailScreen';
import CategoryVideoScreen, {screenOptions as CategoryDetailScreenOptions}from '../screens/spagyrist/CategoryVideoScreen';
import SearchScreen from '../screens/spagyrist/SearchScreen';
import MyListScreen from '../screens/spagyrist/MyListScreen';
import HelpScreen from '../screens/spagyrist/HelpScreen';
import CategoryOverViewScreen,{screenOptions as CategoryOverviewScreenOptions} from '../screens/spagyrist/CategoryOverViewScreen';
import MyAccountScreen from '../screens/user/MyAccountScreen';
import Icon from 'react-native-vector-icons/FontAwesome'
const defaultNavOptions = {
    headerStyle:{
        backgroundColor:Platform.OS === 'android' ? Colors.primary : ''
    },
    headerTitleStyle:{
        fontFamily: 'OpenSans-Bold',
    },
    headerBackTitleStyle:{
        fontFamily:'OpenSans-Bold'
    },
    headerTintColor:Platform.OS === 'android' ? 'white' : Colors.primary
}

const VideoStackNavigator = createStackNavigator();

export const VideosNavigator = () => {
    return(
        <VideoStackNavigator.Navigator screenOptions={defaultNavOptions}>
            <VideoStackNavigator.Screen name="Home" 
            component={VideoOverViewScreen} 
            options={VideoOverviewScreenOptions} />
            <VideoStackNavigator.Screen name="VideoDetail"
            component={VideoDetailScreen} 
            options={VideoDetailScreenOptions} />
        </VideoStackNavigator.Navigator>
    )
}

const CategoryStackNavigator = createStackNavigator();

export const CategoryNavigator = () => {
    return(
        <CategoryStackNavigator.Navigator screenOptions={defaultNavOptions}>
            <CategoryStackNavigator.Screen name="Categories"
            component={CategoryOverViewScreen}
             options={CategoryOverviewScreenOptions} />
            <CategoryStackNavigator.Screen name="CategoryName"
            component={CategoryVideoScreen} 
            options={CategoryDetailScreenOptions} />

        </CategoryStackNavigator.Navigator>
    )
}

const SpagyristDrawerNavigator = createDrawerNavigator();

export const SpagyristNavigator = () => {
    // const dispatch = useDispatch();

    return (
        <SpagyristDrawerNavigator.Navigator 
        drawerContentOptions={
            {
                activeTintColor:Colors.primary
            }
        }>
            <SpagyristDrawerNavigator.Screen name="Home" 
            component={VideosNavigator} 
            options={
                {
            drawerIcon: props => ( 
              <Icon name='home' size={23} color={props.Color} /> )
                        }
            } />
              <SpagyristDrawerNavigator.Screen name="Category" 
            component={CategoryNavigator} options={
                {
             drawerIcon: props => ( 
         <Icon name='list-ul' size={23} color={props.Color} /> )
                        }
            } />
              {/* <ShopDrawerNavigator.Screen name="Admin" 
            component={AdminNavigator}
            options={
                {
                 drawerIcon: props => ( 
                 <Ionicons name='md-create' size={23} color={props.Color} /> )
                        }
            } /> */}
        </SpagyristDrawerNavigator.Navigator>
    )
}

