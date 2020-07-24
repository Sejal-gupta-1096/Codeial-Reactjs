import React from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/posts';
import PostsList from './PostsList';

class App extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchPosts())
  }
  
  render() {
    console.log(this.props)
    return (
      <div>
        <PostsList posts={this.props.posts} />
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    posts : state.posts
  }
}
export default connect(mapStateToProps)(App);