import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {BrowserRouter as Router , Link , Route} from 'react-router-dom';
import {fetchPosts} from '../actions/posts';
import PostsList from './PostsList';
import Navbar from './Navbar';

function Home(){
  return(
    <div>Home</div>
  )
}
function Signup(){
  return(
    <div>Signup</div>
  )
}
function Login(){
  return(
    <div>Login</div>
  )
}
class App extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchPosts())
  }
  
  render() {
    console.log(this.props)
    return (
      <Router>
        <div>
          <Navbar />
          {/* <PostsList posts={this.props.posts} /> */}
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/signup'>Signup</Link>
            </li>
            <li>
              <Link to='/login'>Login</Link>
            </li>
          </ul>
          <Route exact path='/' component={Home} />
          <Route path='/signup' component={Signup} />
          <Route path='/login' component={Login} />
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
    posts : state.posts
  }
}
export default connect(mapStateToProps)(App);