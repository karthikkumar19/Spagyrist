import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator,DrawerItemList} from '@react-navigation/drawer';
import {Platform} from 'react-native';
import Colors from '../Constants/Colors';
import VideoOverViewScreen,{screenOptions as VideoOverviewScreenOptions} from '../screens/spagyrist/VideoOverviewScreen';
import VideoDetailScreen ,{screenOptions as VideoDetailScreenOptions} from '../screens/spagyrist/VideoDetailScreen';
import CategoryVideoScreen, {screenOptions as CategoryDetailScreenOptions}from '../screens/spagyrist/CategoryVideoScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchScreen, {screenOptions as SearchScreenOptions} from '../screens/spagyrist/SearchScreen';
import MyListScreen from '../screens/spagyrist/MyListScreen';
import HelpScreen from '../screens/spagyrist/HelpScreen';
import CategoryOverViewScreen,{screenOptions as CategoryOverviewScreenOptions} from '../screens/spagyrist/CategoryOverViewScreen';
import MyAccountScreen from '../screens/user/MyAccountScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
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

const SearchStackNavigator = createStackNavigator();

export const SearchNavigator = () => {
    return(
        <SearchStackNavigator.Navigator screenOptions={defaultNavOptions} >
            <SearchStackNavigator.Screen 
            name="s" options={{headerShown: false}} component={SearchScreen}
             />
             <SearchStackNavigator.Screen name="VideoDetail"
            component={VideoDetailScreen} 
            />
        </SearchStackNavigator.Navigator>
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
            <CategoryStackNavigator.Screen name="VideoDetail"
            component={VideoDetailScreen} 
            options={VideoDetailScreenOptions} />

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



const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
    return(
        <Tab.Navigator  screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Search') {
                iconName = focused
                  ? 'search'
                  : 'search';
              } else if (route.name === 'My List') {
                iconName = focused ? 'playlist-add' : 'playlist-add';
              }else if( route.name === 'Home'){
                  iconName = focused ? 'home' : 'home'
              }
  
              // You can return any component that you like here!
              return <MaterialIcon name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}>
          <Tab.Screen name="Home" component={SpagyristNavigator} />
        <Tab.Screen name="Search" component={SearchNavigator}  />
        <Tab.Screen name="My List" component={MyListScreen} />
      </Tab.Navigator>
    )
}
