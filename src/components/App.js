import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {BrowserRouter as Router , Route , Switch, Redirect} from 'react-router-dom';
import * as jwtDecode from 'jwt-decode';

import {fetchPosts} from '../actions/posts';
import Navbar from './Navbar';
import Home from './Home';
import Page404 from './Page404';
import Login from './Login';
import Signup from './Signup'
import {authenticateUser} from '../actions/auth';
import Settings from './Settings';
import User from './User';
import {fetchFriends} from '../actions/friends';

const PrivateRoute = (privateRouteProps) =>{
  const {isLoggedIn , path , component : Component} = privateRouteProps
  return(
    <Route 
      path={path}
      render={(props) => {
        console.log(isLoggedIn)
        return  isLoggedIn ? <Component {...props} /> : <Redirect to={{pathname : '/login' , state : {from : props.location}}} />
      }}
      />
  )
}

class App extends React.Component {

  componentDidMount() {
    let token = localStorage.getItem('token');
    let user;
    if(token){
      user = jwtDecode(token);
      this.props.dispatch(authenticateUser({name : user.name , email : user.email , _id : user._id}));
      this.props.dispatch(fetchFriends(this.props.auth.user._id));
    }
    console.log(user);
    
    this.props.dispatch(fetchPosts())
  }
  
  render() {
    console.log(this.props)
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path='/' render={ (props) => {
              return <Home {...props} isLoggedIn={this.props.auth.isLoggedIn} friends={this.props.friends} posts={this.props.posts} />
            }} />
            <Route path='/signup' component={Signup} />
            <Route path='/login' component={Login} />
            <PrivateRoute path='/settings' component={Settings} isLoggedIn={this.props.auth.isLoggedIn} />
            <PrivateRoute path='/user/:userId' component={User} isLoggedIn={this.props.auth.isLoggedIn} />
            <Route component={Page404} />
          </Switch>
        </div>
      </Router>
      
    );
  }
}

App.propTypes = {
  posts : PropTypes.array.isRequired
}

function mapStateToProps(state){
  return{
    posts : state.posts,
    auth : state.auth,
    friends : state.friends
  }
}
export default connect(mapStateToProps)(App);