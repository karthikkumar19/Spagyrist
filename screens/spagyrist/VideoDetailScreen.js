import React from 'react';
import {View,Text,StyleSheet} from 'react-native'; 

const  VideoDetailScreen = props => {
    return (
       <View style={styles.screen}>
           <Text>Video Detail Screen</Text>
       </View>
    )
}
export const screenOptions = navData => {
    return{
        headerTitle:"Video Details"
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

export default VideoDetailScreen;
