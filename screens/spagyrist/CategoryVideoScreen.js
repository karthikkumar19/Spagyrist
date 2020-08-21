import React from 'react';
import {View,Text,StyleSheet,FlatList,ActivityIndicator,Dimensions} from 'react-native'; 
import {useSelector} from 'react-redux';
import VideoList from '../../components/spagyrist/VideoList';

const  CategoryVideoScreen = props => {

    const categoryName = props.route.params.categoryName;
    const videos = useSelector(state => state.videos.videos.filter(video => video.category === categoryName))
        console.log(videos)

        const selectVideoHandler = (id,title) => {
            props.navigation.navigate('VideoDetail',{
                videoId:id,
                videoTitle:title
            })
        }

        if( videos.length === 0){
            return(
                <View style={styles.centered}>
                    <Text>No Videos Found in this Caetgory</Text>
                </View>
            )
        }

    return (
        <View style={styles.flatlistContainer}>
   <FlatList  data={videos}   horizontal={false}
   numColumns={2}
   renderItem={itemData => <VideoList style={styles.video} thumb={styles.thumb}
onSelect={() =>  {selectVideoHandler(itemData.item.nid,itemData.item.title)}}
image={itemData.item.thumbnail_image}
/>} keyExtractor={item => item.nid} />
   </View>
    )
}

export const screenOptions = navData => {
    return{
        headerTitle:navData.route.params.categoryName
        // navData.navigation.getParam('productTitle')
    }
}



const styles = StyleSheet.create({
    screen:{
        flex:1,
       
    },
    centered:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    flatlistContainer:{
        flex:1,
    },
    video:{
        width:Dimensions.get('window').width / 2.2,
        margin:9,
    },
    thumb:{
        width:'100%'
    }
})

export default CategoryVideoScreen;
