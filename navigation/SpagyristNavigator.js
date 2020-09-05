import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator,DrawerItemList} from '@react-navigation/drawer';
import {Platform, SafeAreaView, Button, View,Dimensions,StyleSheet,Text,ScrollView,TouchableOpacity} from 'react-native';
import Colors from '../Constants/Colors';
import VideoOverViewScreen,{screenOptions as VideoOverviewScreenOptions} from '../screens/spagyrist/VideoOverviewScreen';
import VideoDetailScreen ,{screenOptions as VideoDetailScreenOptions} from '../screens/spagyrist/VideoDetailScreen';
import CategoryVideoScreen, {screenOptions as CategoryDetailScreenOptions}from '../screens/spagyrist/CategoryVideoScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchScreen, {screenOptions as SearchScreenOptions} from '../screens/spagyrist/SearchScreen';
import MyListScreen from '../screens/spagyrist/MyListScreen';
import HelpScreen from '../screens/spagyrist/HelpScreen';
import AuthScreen from '../screens/user/AuthScreen';
import CategoryOverViewScreen,{screenOptions as CategoryOverviewScreenOptions} from '../screens/spagyrist/CategoryOverViewScreen';
import MyAccountScreen,{screenOptions as MyAccountScreenOptions} from '../screens/user/MyAccountScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch} from 'react-redux';
import * as authActions from '../store/actions/auth';

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
            options={VideoDetailScreenOptions}
            />
        </SearchStackNavigator.Navigator>
    )
}

const MylistStackNavigator = createStackNavigator();

export const MylistNavigator = () => {
    return(
        <MylistStackNavigator.Navigator screenOptions={defaultNavOptions} >
            <MylistStackNavigator.Screen 
            name="My List"  component={MyListScreen}
             />
             <MylistStackNavigator.Screen name="VideoDetail"
            component={VideoDetailScreen} 
            />
        </MylistStackNavigator.Navigator>
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

const MyAccountStackNavigator = createStackNavigator();

export const MyAccountNavigator = () => {
    return(
        <MyAccountStackNavigator.Navigator screenOptions={defaultNavOptions}>
            <MyAccountStackNavigator.Screen name="My Account"
            component={MyAccountScreen}
           options={MyAccountScreenOptions} />
        </MyAccountStackNavigator.Navigator>
    )
}
   


const SpagyristDrawerNavigator = createDrawerNavigator();

const styles = StyleSheet.create({
    item: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor:'#d43545',
      width:'99%',
      borderRadius:8,
      marginHorizontal:2,
      marginVertical:3
      
    },
    label: {
      margin: 16,
      fontWeight: 'bold',
      color: 'rgba(0, 0, 0, .87)',
    },
    iconContainer: {
      marginHorizontal: 16,
      width: 24,
      alignItems: 'center',
    },
    icon: {
      width: 24,
      height: 24,
    }
  });

export const SpagyristNavigator = () => {
    const dispatch = useDispatch();

    return (
        <SpagyristDrawerNavigator.Navigator drawerContent={
            props => {
                        return <ScrollView contentContainerStyle={{flex: 1,  flexDirection: 'column', justifyContent: 'space-between' }}>
                        <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
                          <DrawerItemList {...props} />
                        </SafeAreaView>
                        <TouchableOpacity onPress={() => {
                            dispatch(authActions.logout())
                        }}>
                          <View style={styles.item}>
                              <View style={styles.iconContainer}>
                              <Icon name='sign-out' size={23} color={props.Color} />
                              </View>
                            <Text style={styles.label}>Logout</Text>
                          </View>
                        </TouchableOpacity>
                      </ScrollView>
                    }
        }
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
             <SpagyristDrawerNavigator.Screen name="My Account" 
            component={MyAccountNavigator} options={
                {
             drawerIcon: props => ( 
         <Icon name='user-circle' size={23} color={props.Color} /> )
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
        <Tab.Navigator  
           screenOptions={({ route }) => ({
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
            keyboardHidesTabBar: true
          }}>
          <Tab.Screen name="Home" component={SpagyristNavigator} />
        <Tab.Screen name="Search" component={SearchNavigator}  />
        <Tab.Screen name="My List" component={MylistNavigator} />
      </Tab.Navigator>
    )
}

const AuthStackNavigator = createStackNavigator();

export const AuthNavigator = () => {
    return(
        <AuthStackNavigator.Navigator screenOptions={defaultNavOptions}>
            <AuthStackNavigator.Screen name="Auth" 
            options={{headerShown: false}}
            component={AuthScreen}
             />
        </AuthStackNavigator.Navigator>
    )
}

