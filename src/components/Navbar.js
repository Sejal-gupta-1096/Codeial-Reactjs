import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from '../actions/auth'

class Navbar extends React.Component {
  logout = () =>{
    localStorage.removeItem('token');
    this.props.dispatch(logout());
  }
  render() {
    return (
      <nav className="nav">
          <div className="left-div">
              <Link to='/'>
                  <img
                  src="https://ninjasfiles.s3.amazonaws.com/0000000000003454.png"
                  alt="logo"
              />
              </Link>
            
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
              <li>
                  <Link to='/'>Home</Link>
              </li>
              <li>
                  <Link to='/signup'>Signup</Link>
              </li>
              <li>
                  <Link to='/login'>Login</Link>
              </li>
              <li onClick={this.logout}>
                  <Link to='/login'>Logout</Link>
              </li>
        </ul>
            </div>
          </div>
      </nav>
      
  );
  }
    
}

function mapStateToProps(state){
  return {
    auth : state.auth
  }
}
export default connect(mapStateToProps)(Navbar);