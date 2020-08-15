import React from 'react';
import {useSelector} from 'react-redux';
import {View,Text,StyleSheet,ScrollView,FlatList} from 'react-native'; 
import Headerbutton from '../../components/UI/HeaderButton';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import VideoList from '../../components/spagyrist/VideoList';

const  VideoOverviewScreen = props => {

    const construction = useSelector(state => state.videos.videos.filter(video => video.category === "Construction"));
    const industrial = useSelector(state => state.videos.videos.filter(video => video.category === "Industrial Safety" ));
    const oil = useSelector(state => state.videos.videos.filter(video => video.category ===  "Oil &amp; Gas Industry"));
    const softSkill = useSelector(state => state.videos.videos.filter(video => video.category ===   "Soft Skill"));
    const welding = useSelector(state => state.videos.videos.filter(video => video.category ===  "Welding"));

    const selectVideoHandler = (id,title) => {
        props.navigation.navigate('VideoDetail',{
            videoId:id,
            videoTitle:title
        })
    }

    return (
       <View style={styles.screen}>
           <ScrollView>
           <View style={styles.flatlistContainer}>
               <Text style={styles.title}>{construction[0].category}</Text>
           <FlatList  data={construction}   horizontal={true}
    //   contentContainerStyle={styles.container} 
      renderItem={itemData => <VideoList category={itemData.item.category} 
      onSelect={() =>  {selectVideoHandler(itemData.item.nid,itemData.item.title)}}
        image={itemData.item.thumbnail_image}
       />} keyExtractor={item => item.nid} />
           </View>

<View>
<Text style={styles.title}>{industrial[0].category}</Text>
<FlatList  data={industrial}   horizontal={true}
    //   contentContainerStyle={styles.container} 
      renderItem={itemData => <VideoList category={itemData.item.category} 
        image={itemData.item.thumbnail_image}
       />} keyExtractor={item => item.nid} />
</View>
     
<View>
<Text style={styles.title}>{oil[0].category}</Text>
<FlatList  data={oil}   horizontal={true}
    //   contentContainerStyle={styles.container} 
      renderItem={itemData => <VideoList category={itemData.item.category} 
        image={itemData.item.thumbnail_image}
       />} keyExtractor={item => item.nid} />

</View>
       
       <View>
       <Text style={styles.title}>{softSkill[0].category}</Text>
       <FlatList  data={softSkill}   horizontal={true}
    //   contentContainerStyle={styles.container} 
      renderItem={itemData => <VideoList category={itemData.item.category} 
        image={itemData.item.thumbnail_image}
       />} keyExtractor={item => item.nid} />
       </View>
      
<View>
<Text style={styles.title}>{welding[0].category}</Text>
<FlatList  data={welding}   horizontal={true}
    //   contentContainerStyle={styles.container} 
      renderItem={itemData => <VideoList category={itemData.item.category} 
        image={itemData.item.thumbnail_image}
       />} keyExtractor={item => item.nid} />
       </View>
           </ScrollView>
          
</View>
      

       
      
      
    )
}

export const screenOptions = navData => {
    return{
        headerTitle: 'Home',
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
   flatlistContainer:{
       marginBottom:10
   },
   title:{
       fontSize:20,
       color:'white',
       fontFamily:'OpenSans-Bold',
       marginLeft:10,
       marginTop:5
   },
   screen:{
       backgroundColor:'black'
   }
})

export default VideoOverviewScreen;
