import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes, { func } from 'prop-types';
import { connect } from 'react-redux';
import Comment from './Comment';
import {APIUrls} from '../helpers/urls';
import {getFormBody} from '../helpers/utils';
import { addComment, addPostLikesToStore } from '../actions/posts';

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: '',
      isPostLiked : false
    };
  }
  handleAddComment = async (e) => {
    const { comment } = this.state;
    const postId = this.props.post._id;

    if (e.key === 'Enter') {

        let url = await APIUrls.createNewComment();
        const response = await fetch(url, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization : `Bearer ${localStorage.getItem('token')}`
            },
            body: getFormBody({content:comment , post_id: postId})
        })
        const data = await response.json();
        console.log('data', data);
        if (data.success) {
            this.props.dispatch(addComment(data.data.comment , postId));
        }

      // clear comment
      this.setState({
        comment: '',
      });
    }
  };

  handleOnCommentChange = (e) => {
    this.setState({
      comment: e.target.value,
    });
  };

  handleToggleLike = async () =>{

    let postId = this.props.post._id;
    let likeType = 'Post';
    let userId = this.props.auth.user._id;
    let url = await APIUrls.toggleLike(postId , likeType);
    const response = await fetch(url, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization : `Bearer ${localStorage.getItem('token')}`
        },
    })
    const data = await response.json();
    console.log('data', data);
    if (data.success) {
        this.props.dispatch(addPostLikesToStore(postId , userId , data.data.deleted));
    }
  }

  render() {
    const { post } = this.props;
    const { comment } = this.state;
    const isPostLiked = this.props.post.likes.includes(this.props.auth.user._id);
    console.log('Checking toggleLike' , this.props.post.likes , isPostLiked);
    return (
      <div className="post-wrapper" key={post._id}>
        <div className="post-header">
          <div className="post-avatar">
            <Link to={`/user/${post.user._id}`}>
              <img
                src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
                alt="user-pic"
              />
            </Link>
            <div>
              <span className="post-author">{post.user.name}</span>
              <span className="post-time">a minute ago</span>
            </div>
          </div>
          <div className="post-content">{post.content}</div>

          <div className="post-actions">
            <button className="post-like no-btn" onClick = {this.handleToggleLike}>
              {
                isPostLiked ? 
                <img
                src="https://image.flaticon.com/icons/svg/1076/1076984.svg"
                alt="likes-icon"
                /> : 
                <img
                src="https://image.flaticon.com/icons/svg/1077/1077035.svg"
                alt="likes-icon"
                />
            }
              
              <span>{post.likes.length}</span>
            </button>

            <div className="post-comments-icon">
              <img
                src="https://image.flaticon.com/icons/svg/1380/1380338.svg"
                alt="comments-icon"
              />
              <span>{post.comments.length}</span>
            </div>
          </div>
          <div className="post-comment-box">
            <input
              placeholder="Start typing a comment"
              onChange={this.handleOnCommentChange}
              onKeyPress={this.handleAddComment}
              value={comment}
            />
          </div>

          <div className="post-comments-list">
            {post.comments.map((comment) => (
              <Comment comment={comment} key={comment._id} postId={post._id} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
};

function mapStateToProps(state){
  return {
    auth : state.auth
  }
}
export default connect(mapStateToProps)(Post);
