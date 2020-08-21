import React ,{useState}from 'react';
import {View,Text,StyleSheet,FlatList,Dimensions} from 'react-native'; 
import {  Header } from 'native-base';

import {Searchbar} from 'react-native-paper';
import VideoList from '../../components/spagyrist/VideoList';
import {useSelector} from 'react-redux';
import Colors from '../../Constants/Colors';


const  SearchScreen = props => {
    const [searchQuery, setSearchQuery] = useState('');
    const videos = useSelector(state => state.videos.videos);
    const [searchVideos,setSearchVideos] = useState(videos);

    const onChangeSearch = text =>{
        const newData = videos.filter(function(item) {
            //applying filter for the inserted text in search bar
            const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
          });
          setSearchQuery(text);
          setSearchVideos(newData);
          console.log("new",newData)

        //   this.setState({
        //     //setting the filtered newData on datasource
        //     //After setting the data it will automatically re-render the view
        //     dataSource: newData,
        //     text: text,
        //   });
    }


    const selectVideoHandler = (id,title) => {
        props.navigation.navigate('VideoDetail',{
            videoId:id,
            videoTitle:title
        })
    }
   


    if( videos.length === 0){
        return(
            <View style={styles.centered}>
                <Text>No Videos Found!</Text>
            </View>
        )
    }
    return (
       <View style={styles.screen}>
           
        <Header   style={{backgroundColor:Colors.primary}}>
            <View style={styles.searchBar}>
            <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
           
            </View>
         
        
        </Header>
           
           
            <View style={styles.flatlistContainer}>
   <FlatList  data={searchVideos} 
   horizontal={false}
   numColumns={2}
   renderItem={itemData => <VideoList style={styles.video} thumb={styles.thumb}
onSelect={() =>  {selectVideoHandler(itemData.item.nid,itemData.item.title)}}
image={itemData.item.thumbnail_image}
/>} keyExtractor={item => item.nid} />
   </View>
       </View>
    )
}
// export const screenOptions = navData => {
//     return{
//         headerTitle: 'Search',
//     //     headerLeft : () => <HeaderButtons HeaderButtonComponent={Headerbutton}>
//     //     <Item title='Menu' iconName={'md-menu'} onPress={() => {
//     //         navData.navigation.toggleDrawer();
//     //     }} />
//     // </HeaderButtons>,
       
//     }
   
// }

const styles = StyleSheet.create({
    centered:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'black'

    },
    screen:{
        flex:1,
        backgroundColor:'black'

    },
    flatlistContainer:{
        flex:1
    },
    searchBar:{
        flex:1,
        marginHorizontal:2,
        marginVertical:2,
    },
    video:{
        width:Dimensions.get('window').width / 2.2,
        margin:9,
    },
    thumb:{
        width:'100%'
    }
})

export default SearchScreen;
