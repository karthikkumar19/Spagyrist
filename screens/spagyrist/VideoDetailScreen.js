import React,{useState} from 'react';
import {View,Text,StyleSheet} from 'react-native'; 
import {useSelector} from 'react-redux';
import Video from 'react-native-video';
import MediaControls,{PLAYER_STATES} from 'react-native-media-controls'; 
import { VideosNavigator } from '../../navigation/SpagyristNavigator';

const  VideoDetailScreen = props => {
    const videoId = props.route.params.videoId;
    const video = useSelector(state => state.videos.videos.find(video => video.nid === videoId));
    console.log(video);


//functions

let videoPlayer;
const [currentTime,setCurrentTime] = useState(0);
const [duration,setDuration] = useState(0);
const [isFullScreen,setIsFullScreen] = useState(false);
const [isLoading,setIsLoading] = useState(true);
const [isPaused,setIsPaused] = useState(true);
const [fullScreenOrentiation,setFullScreenOrentitaion] = useState(true); 
const [playerState,setPlayerState] = useState(PLAYER_STATES.PLAYING);
const [screenType,setScreenType] = useState('contain');

const onSeek = seek => {
  //Handler for change in seekbar
  videoPlayer.seek(seek);
};

const onPaused = playerState => {
  //Handler for Video Pause
  setIsPaused(!isPaused);
  setPlayerState(playerState)
  
};

const onReplay = () => {
  //Handler for Replay
  setPlayerState(PLAYER_STATES.PLAYING)
  videoPlayer.seek(0);
};

const onProgress = data => {
  
  // Video Player will continue progress even if the video already ended
  if (!isLoading && playerState !== PLAYER_STATES.ENDED) {
    setCurrentTime(data.currentTime)
  }
};

const onLoad = data =>
{
  setDuration(data.duration);
  setIsLoading(false)
}

const onLoadStart = data => {
  setIsLoading(true)
}

const onEnd = () =>{
  setPlayerState(PLAYER_STATES.ENDED)
}


const onError = () => console.log("error")

const exitFullScreen = () => {
 console.log("exit full screen")
};

const enterFullScreen = () => {};

const onFullScreen = () => {
  if (screenType == 'contain')
  setScreenType('cover')
  else setScreenType('contain')
};
const renderToolbar = () => (
  <View>
    <Text> toolbar </Text>
  </View>
);
const onSeeking = currentTime =>{
  setCurrentTime(currentTime)
}




return (
    <>
      <View style={styles.container}>
          <View style={styles.videoContainer}>
          <Video
      onEnd={onEnd}
    //   fullscreenOrientation="landscape"
      onLoad={onLoad}
      poster={video.thumbnail_image}
      onLoadStart={onLoadStart}
      onProgress={onProgress}
      
      paused={isPaused}
      ref={videoPlayers => (videoPlayer = videoPlayers)}
      resizeMode={screenType}
      onFullScreen={isFullScreen}
    //   onFullscreenPlayerDidPresent={isFullScreen}
      source={{ uri: video.video_url }}
      style={styles.mediaPlayer}
      volume={10}
       />
       <MediaControls
       
        duration={duration}
        isLoading={isLoading}
        mainColor="#333"
        isFullScreen={isFullScreen}
        onFullScreen={onFullScreen}
        onPaused={onPaused}
        onReplay={onReplay}
        onSeek={onSeek}
        onSeeking={onSeeking}
        playerState={playerState}
        progress={currentTime}
        toolbar={renderToolbar()}
      />
      </View>
      <View style={styles.detailContainer}>
          <Text style={styles.title}>{video.title}</Text>
          <View style={styles.horizontal}></View>
          <View style={styles.textContainer}>
              <Text style={{fontSize:23,color:'white',margin:10}}>Video Info:</Text>
              <View >
                  <View style={styles.infoContainer}>
                  <Text style={styles.detailHeading}>Category:-</Text>
                  <Text style={styles.detailHeading}>{video.category}</Text>
                  </View>
                  <View style={styles.infoContainer}>
                  <Text style={styles.detailHeading}>Duration:-</Text>
                  <Text style={styles.detailHeading}>{video.length}</Text>
                  </View>
              </View>
          </View>
      </View>
          </View>
     
      {/* <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
       <Text style={styles.text}>Hello world!</Text>
      </View> */}
    {/* <View style={{flex:1,alignItems:'center',justifyContent:'center' }}>
     
      <MainScreen/>

    </View> */}
    </>
  );

}
export const screenOptions = navData => {
    return{
        headerTitle:navData.route.params.videoTitle
        // navData.navigation.getParam('productTitle')
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
backgroundColor:'black'
      },
      videoContainer:{
          top:10,
        width:'100%',
        height:'40%',
        // backgroundColor:'black'

      },
      toolbar: {
       marginTop: 30,
       backgroundColor: 'white',
       padding: 10,
       borderRadius: 5,
     },
      mediaPlayer:{
        width:'100%',
        height:'100%',
        // backgroundColor:'black'

      },
      detailContainer:{
          width:'100%'
      },
      title:{
          color:'white',
          fontSize:20,
          textAlign:'center',
      },
      horizontal:{
          borderBottomWidth:1,
          borderBottomColor:'white',
          marginVertical:10,
          marginHorizontal:20
      },
     
      detailHeading:{
          color:'white',
          fontSize:15,
          margin:10
      },
      infoContainer:{
          flexDirection:'row'
      }
     
     
})

export default VideoDetailScreen;
