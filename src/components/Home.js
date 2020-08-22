import React, { Component } from 'react';
import PostsList from './PostsList';
import FriendsList from './FriendsList';
import Chat from './Chat';

class Home extends Component {
    render() {
        return (
            <div class='home'>
                <PostsList posts={this.props.posts} />
                {this.props.isLoggedIn && <FriendsList friends={this.props.friends} />}
                {this.props.isLoggedIn && <Chat /> }
            </div>
        );
    }
}

export default Home;