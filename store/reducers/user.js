import {CREATE_PROFILE, FETCH_PROFILE, UPDATE_PROFILE} from '../actions/user';
import Profile from '../../models/profile';
import PROFILES from '../../data/videosData';


const initialState ={
    profile:PROFILES,
    userProfile:[]
}

export default (state = initialState, action) => {
    switch(action.type){
        case FETCH_PROFILE : 
            return {
                profile: PROFILES,
               
               
            }
        case CREATE_PROFILE:
            const newProfile = new Profile(
                action.profileData.id,
                action.profileData.name,
            action.profileData.place, 
            action.profileData.userId);
            return{
                ...state,
                profile: state.profile.concat(newProfile),
                
            }
           
         case UPDATE_PROFILE:
                const profileIndex = state.userProfile.findIndex(
                    pro => pro.id === action.pid
                );
                const updatedProfile = new Profile(
                    action.pid,
                    action.profileData.name,
                    action.profileData.place,
                    state.userProfile[profileIndex].userId
                    );
                    
                const updatedUserProfile = [...state.userProfile];
                updatedUserProfile[profileIndex] = updatedProfile;

                return{
                    ...state,
                    userProfile: updatedUserProfile,
                }
    }
    return state
}