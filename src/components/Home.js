import React, { Component } from 'react';
import PostsList from './PostsList';
import FriendsList from './FriendsList';

class Home extends Component {
    render() {
        return (
            <div class='home'>
                <PostsList posts={this.props.posts} />
                {this.props.isLoggedIn && <FriendsList friends={this.props.friends} />}
            </div>
        );
    }
}

export default Home;