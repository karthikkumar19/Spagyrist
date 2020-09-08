import Video from '../../models/Video';
import axios from 'axios';
export const SET_VIDEOS = 'SET_VIDEOS';

export const fetchVideos = () => {
    return async (dispatch,getState) => {
        
           await axios.get( 'http://smmentors.com/cms/vdod-web/web/api/vod/videos/en?_format=json')
        .then( response => {
            const resData = response.data;
            const loadedVideos = [];
            for(const key in resData){
                loadedVideos.push(
                    new Video(
                        key,
                        resData[key].title,
                        resData[key].field_thumbnail_image_path,
                        resData[key].field_video_category,
                        resData[key].field_video_length,
                        resData[key].field_video
                    )
                )
            }

            dispatch({type:SET_VIDEOS,videos:loadedVideos})

            // dispatch(addPageSuccess(response.data.name, pageData));
        } )
        .catch( error => {
            console.log(error)
            // dispatch(addPageFail(error));
        } );
            // const response = await fetch('http://smmentors.com/cms/vdod-web/web/api/vod/videos/en?_format=json');
            // if(!response.ok){
            //     throw new Error('Something went Wromg!');
            // }
            // const resData = response.json();
            // const loadedVideos = []
            // console.log(resData);
       
    } 
}