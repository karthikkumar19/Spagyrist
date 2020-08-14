import React from 'react';
import {View,Text,StyleSheet} from 'react-native'; 

const  MyAccountScreen = props => {
    return (
       <View style={styles.screen}>
           <Text>My Account Screen</Text>
       </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default MyAccountScreen;
