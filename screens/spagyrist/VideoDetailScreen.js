import React,{useState,useEffect} from 'react';
import {View,Text,StyleSheet,Dimensions,Button,ScrollView} from 'react-native'; 
import {useSelector} from 'react-redux';
import Video from 'react-native-video';
import Orientation from 'react-native-orientation-locker';
import MediaControls,{PLAYER_STATES} from 'react-native-media-controls';


const  VideoDetailScreen = props => {
    const videoId = props.route.params.videoId;
    const video = useSelector(state => state.videos.videos.find(video => video.nid === videoId));
    console.log(video);

    const videoRef = React.createRef();
    const [state, setState] = useState({
      fullscreen: false,
      play: false,
      currentTime: 0,
      duration: 0,
      showControls: true,
    });
//function 2

// useEffect(() => {
//   Orientation.addOrientationListener(handleOrientation);

//   return () => {
//     Orientation.removeOrientationListener(handleOrientation);
//   };
// }, []);

// function handleOrientation(orientation) {
//   orientation === 'LANDSCAPE-LEFT' || orientation === 'LANDSCAPE-RIGHT'
//     ? (setState(s => ({...s, fullscreen: true})), StatusBar.setHidden(true))
//     : (setState(s => ({...s, fullscreen: false})),
//       StatusBar.setHidden(false));
// }

// function handleFullscreen() {
 
// }







// functions

let videoPlayer;
const [currentTime,setCurrentTime] = useState(0);
const [duration,setDuration] = useState(0);
const [fullScreen,setFullScreen] = useState(false);
const [isFullScreen,setIsFullScreen] = useState(false);
const [isLoading,setIsLoading] = useState(true);
const [isPaused,setIsPaused] = useState(true);
const [fullScreenOrentiation,setFullScreenOrentitaion] = useState('landscape'); 
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
  // Orientation.getOrientation((err, orientation) => {
  //   console.log(`Current Device Orientation: ${orientation}`);
  // });
  // orientation === 'LANDSCAPE-LEFT' || orientation === 'LANDSCAPE-RIGHT' 
  // ?    Orientation.lockToPortrait() : Orientation.lockToLandscapeLeft()
    setFullScreen(!fullScreen);
  // if (screenType == 'contain')
  // setScreenType('cover')
  // else setScreenType('contain')
};
const renderToolbar = () => (
  <View>
    <Text> toolbar </Text>
  </View>
);
const onSeeking = currentTime =>{
  setCurrentTime(currentTime)
}

const fullScreenPresent = () => {
  console.log("present")
}

 


return (
    <>
      <View style={styles.container}>
        <ScrollView>
        <View style={styles.videoContainer}>
        <Video
      onEnd={onEnd}
      style={ styles.mediaPlayer}
    //   fullscreenOrientation="landscape"
      onLoad={onLoad}
      poster={video.thumbnail_image}
      onLoadStart={onLoadStart}
      onProgress={onProgress}
      paused={isPaused}
      fullscreen={fullScreen}
      ref={videoPlayers => (videoPlayer = videoPlayers)}
      resizeMode={screenType}
      fullscreenOrientation={fullScreenOrentiation}
      onFullScreen={isFullScreen}
      onFullscreenPlayerDidPresent={fullScreenPresent}
      source={{ uri: video.video_url }}
      volume={10}
       />
       <MediaControls
       
        duration={duration}
        isLoading={isLoading}
        mainColor="#333"
        // isFullScreen={isFullScreen}
        onFullScreen={
          onFullScreen }
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
          <Button title="Add To MyList"  />
      </View> 
         
        </ScrollView>
        
    
        </View>
        
     
    </>
  );

}
export const screenOptions = navData => {
    return{
        headerTitle:navData.route.params.videoTitle
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
backgroundColor:'black'
      },
     
      videoContainer:{
        
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height / 3
        // backgroundColor:'black'

      },
    //   toolbar: {
    //    marginTop: 30,
    //    backgroundColor: 'white',
    //    padding: 10,
    //    borderRadius: 5,
    //  },
     mediaPlayer: {
     width:'100%',
      height:'100%',
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
      },
     
    
     
     
})

export default VideoDetailScreen;


