import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import {fetchPosts} from '../actions/posts';
import Navbar from './Navbar';
import Home from './Home';
import Page404 from './Page404';


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
          <Switch>
            <Route exact path='/' render={ (props) => {
              return <Home {...props} posts={this.props.posts} />
            }} />
            <Route path='/signup' component={Signup} />
            <Route path='/login' component={Login} />
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
    posts : state.posts
  }
}
export default connect(mapStateToProps)(App);