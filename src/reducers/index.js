import {combineReducers} from 'redux';
import posts from './posts';
import auth from './auth';
import userProfile from './user_profile';
import friends from './friends';

export default combineReducers({
    posts,
    auth,
    userProfile,
    friends
})