import {combineReducers} from 'redux';
import posts from './posts';
import auth from './auth';
import userProfile from './user_profile';

export default combineReducers({
    posts,
    auth,
    userProfile
})