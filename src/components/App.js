import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
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
         <nav className="nav">
            <div className="left-div">
              <img
                src="https://ninjasfiles.s3.amazonaws.com/0000000000003454.png"
                alt="logo"
              />
            </div>
            <div className="search-container">
              <img
                className="search-icon"
                src="https://image.flaticon.com/icons/svg/483/483356.svg"
                alt="search-icon"
              />
              <input placeholder="Search" />

              <div className="search-results">
                <ul>
                  <li className="search-results-row">
                    <img
                      src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
                      alt="user-dp"
                    />
                    <span>John Doe</span>
                  </li>
                  <li className="search-results-row">
                    <img
                      src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
                      alt="user-dp"
                    />
                    <span>John Doe</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="right-nav">
              <div className="user">
                <img
                  src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
                  alt="user-dp"
                  id="user-dp"
                />
                <span>John Doe</span>
              </div>
              <div className="nav-links">
                <ul>
                  <li>Log in</li>
                  <li>Log out</li>
                  <li>Register</li>
                </ul>
              </div>
            </div>
        </nav>
        
        <PostsList posts={this.props.posts} />
      </div>
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