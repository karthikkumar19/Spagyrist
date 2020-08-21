import React,{useCallback,useEffect,useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {View,Text,StyleSheet,ScrollView,YellowBox,FlatList,Button,ActivityIndicator} from 'react-native'; 
import Headerbutton from '../../components/UI/HeaderButton';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import VideoList from '../../components/spagyrist/VideoList';
import * as videoActions from '../../store/actions/Video';
import Colors from '../../Constants/Colors';

const  VideoOverviewScreen = props => {

    const construction = useSelector(state => state.videos.videos.filter(video => video.category === "Construction"));
    const industrial = useSelector(state => state.videos.videos.filter(video => video.category === "Industrial Safety" ));
    const oil = useSelector(state => state.videos.videos.filter(video => video.category ===  "Oil &amp; Gas Industry"));
    const softSkill = useSelector(state => state.videos.videos.filter(video => video.category ===   "Soft Skill"));
    const welding = useSelector(state => state.videos.videos.filter(video => video.category ===  "Welding"));
    const videos = useSelector(state => state.videos.videos);
console.log(videos)

    const dispatch = useDispatch();
    // const products = useSelector(state => state.products.availableProducts);
    const [loading,setLoading] = useState(false);
    const [refreshing,setRefreshing] = useState(false);
    const [error, setError] = useState('');

  

    const loadVideos = useCallback( async  () => {
        console.log('load')
        setRefreshing(true);
        setError(null)
        try{
            await dispatch(videoActions.fetchVideos());
        } catch (err) {
            setError(err.message)
        }
        setRefreshing(false)
    },[dispatch,setError,setLoading]);
// const loadVideos = () => {
//     console.log('gg')
// }
    useEffect(() => {
        setLoading(true);
        loadVideos().then(() => {
            setLoading(false)
        })
    },[dispatch, loadVideos])

// useEffect(() => {
//     const willFocusSub = props.navigation.addListener(
//         'willFocus',
//         loadVideos
//     );

//     return () => {
//         willFocusSub.remove();
//     }
// },[loadVideos])


    const selectVideoHandler = (id,title) => {
        props.navigation.navigate('VideoDetail',{
            videoId:id,
            videoTitle:title
        })
    }

    if(error){
        return(
                <View style={styles.centered}>
                    <Text>error occured</Text>
                    <Button title='try again' onPress={()=>{}} />
                </View>
            )
        }
        
        if(loading){
            return(
                <View style={styles.centered}>
                    <ActivityIndicator size='large' color={Colors.primary} />
                </View>
            )
        }

        if(!loading && videos.length === 0){
            return(
                <View style={styles.centered}>
                    <Text>No Videos Found</Text>
                </View>
            )
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
      onSelect={() =>  {selectVideoHandler(itemData.item.nid,itemData.item.title)}}
        image={itemData.item.thumbnail_image}
       />} keyExtractor={item => item.nid} />
</View>
     
<View>
 <Text style={styles.title}>{oil[0].category}</Text> 
<FlatList  data={oil}   horizontal={true}
    //   contentContainerStyle={styles.container} 
      renderItem={itemData => <VideoList category={itemData.item.category} 
      onSelect={() =>  {selectVideoHandler(itemData.item.nid,itemData.item.title)}}

        image={itemData.item.thumbnail_image}
       />} keyExtractor={item => item.nid} />

</View>
       
       <View>
        <Text style={styles.title}>{softSkill[0].category}</Text> 
       <FlatList  data={softSkill}   horizontal={true}
    //   contentContainerStyle={styles.container} 
      renderItem={itemData => <VideoList category={itemData.item.category} 
      onSelect={() =>  {selectVideoHandler(itemData.item.nid,itemData.item.title)}}
        image={itemData.item.thumbnail_image}
       />} keyExtractor={item => item.nid} />
       </View>
      
<View>
 <Text style={styles.title}>{welding[0].category}</Text> 
<FlatList  data={welding}   horizontal={true}
    //   contentContainerStyle={styles.container} 
    onSelect={() =>  {selectVideoHandler(itemData.item.nid,itemData.item.title)}}
      renderItem={itemData => <VideoList category={itemData.item.category}
      onSelect={() =>  {selectVideoHandler(itemData.item.nid,itemData.item.title)}}
 
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
        <Item title='Menu' iconName={'bars'} onPress={() => {
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
   centered:{
       flex:1,
     justifyContent:'center',
     alignItems:'center' ,
     backgroundColor:'black'
 
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
