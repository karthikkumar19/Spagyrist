import React from 'react';
import {View,Text,StyleSheet} from 'react-native'; 

const  CategoryVideoScreen = props => {
    return (
       <View style={styles.screen}>
           <Text>CategoryVideoScreen </Text>
       </View>
    )
}

export const screenOptions = navData => {
    return{
        headerTitle:"Category Video Details"
        // navData.navigation.getParam('productTitle')
    }
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default CategoryVideoScreen;
