import React from 'react';
import {Image,Text,TouchableOpacity,View,StyleSheet,Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const VideoList = props => {
    return(
        <TouchableOpacity style={styles.videoScreen}>
            
            <View  style={styles.video}>
            <View style={styles.detailContainer}>
           
            <View style={styles.imageContainer}>
            <Icon name='play-circle' style={styles.icon} size={28} color="white" />
            <Image source={{uri:props.image}} style={styles.thumbnail} />

            </View>
            </View>
           
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    videoScreen:{
        margin:10,
    //  width:'100%',

    },
    video:{
        shadowColor:'black',
        shadowOpacity:0.26,
        shadowOffset:{width:0,height:2},
        shadowRadius:8,
        elevation:5,
        // borderRadius:10,
        backgroundColor:'white',
        height:100,
        
        padding:5
    },
    // detailContainer:{
    //     margin:40
    // },
    thumbnail:{
        width:'100%',
        height:'100%',
        resizeMode:'cover',
        },
    imageContainer:{
        width:150,
        height:90,
    },
    icon:{
       position:'absolute',
       margin:'20%',
       marginHorizontal:'40%',
        zIndex:1,
        opacity:0.9,

        
        
    }
   
})

export default VideoList;