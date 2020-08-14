import React from 'react';
import {View,Text,StyleSheet} from 'react-native'; 
import Headerbutton from '../../components/UI/HeaderButton';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';

const  SearchScreen = props => {
    return (
       <View style={styles.screen}>
           <Text>Search Screen</Text>
       </View>
    )
}

export const screenOptions = navData => {
    return{
        headerTitle: 'Search',
        headerLeft : () => <HeaderButtons HeaderButtonComponent={Headerbutton}>
        <Item title='Menu' iconName={'md-menu'} onPress={() => {
            navData.navigation.toggleDrawer();
        }} />
    </HeaderButtons>,
        // headerRight: () => <HeaderButtons HeaderButtonComponent={Headerbutton}>
        //     <Item title='Cart' iconName={'md-cart'} onPress={() => {
        //         navData.navigation.navigate('Cart')
        //     }} />
        // </HeaderButtons>
    }
   
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default SearchScreen;
