import Videos from '../../data/dummy-data';
import {SET_VIDEOS} from '../actions/Video';

const initialState = {
    videos: [],
    
}

const videosReducers = (state = initialState,action) => {
    switch(action.type){
        case SET_VIDEOS :
            return{
                videos:action.videos
            }
    }
    return state;
}

export default videosReducers;