import React from 'react';
import {View,Text,StyleSheet} from 'react-native'; 
import Headerbutton from '../../components/UI/HeaderButton';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';

const  MyListScreen = props => {
    return (
       <View style={styles.screen}>
           <Text>List is Empty! Add Some Videos! </Text>
       </View>
    )
}

export const screenOptions = navData => {
    return{
        headerTitle: 'My List',
       
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

export default MyListScreen;
