import {connect} from 'react-redux';

import React, { Component } from 'react';
import {APIUrls} from '../helpers/urls';
import {getFormBody} from '../helpers/utils';
import { addPost } from '../actions/posts';

class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
    };
  }

  handleCreatePost = async () => {
    const {content} = this.state;
      let url = APIUrls.createNewPost();
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization : `Bearer ${localStorage.getItem('token')}`
        },
        body: getFormBody({content}),
      })
      const data = await response.json();
      console.log('data', data);
      if (data.success) {
        this.props.dispatch(addPost(data.data.post));
      }
  }

  handleChange = (e) => {
    this.setState({
      content: e.target.value,
    });
  };
  render() {
    return (
      <div className="create-post">
        <textarea
          className="add-post"
          value={this.state.content}
          onChange={this.handleChange}
        />

        <div>
          <button id="add-post-btn" onClick={this.handleCreatePost}>
            Add Post
          </button>
        </div>
      </div>
    );
  }
}


export default connect() (CreatePost);
