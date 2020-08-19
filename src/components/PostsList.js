import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import CreatePost from './CreatePost'
import Post from './Post';

class PostsList extends Component {
  
  render() {
    const { posts } = this.props;
    return (
      <div className="posts-list">
        <CreatePost />
        {posts.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    );
  }
}
PostsList.propTypes = {
    posts : PropTypes.array.isRequired
}

export default PostsList;
