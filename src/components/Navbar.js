import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from '../actions/auth'
import { searchUsers } from '../actions/search';
import { fetchUserProfile } from '../actions/user_profile';

class Navbar extends React.Component {
  logout = () =>{
    localStorage.removeItem('token');
    this.props.dispatch(logout());
  }

  handleSearch = (event) =>{
    this.props.dispatch(searchUsers(event.target.value))
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
            <input placeholder="Search" onChange={this.handleSearch}/>

            {
              this.props.search.result.length > 0 &&
                  <div className="search-results">
                    <ul>
                      {
                        this.props.search.result.map( (user)=>{
                          return (<li className='search-results-row' key={user._id}>
                                  <Link to={`/user/${user._id}`}>
                                    <img src="https://image.flaticon.com/icons/svg/2154/2154651.svg"/>
                                    <span>{user.name}</span>
                                  </Link>
                                </li>)
                        })
                      }
                    </ul>
                  </div>
          
              }
          </div>
          <div className="right-nav">
            {
              this.props.auth.isLoggedIn && <div className="user">
                <Link to='/settings'>
                  <img
                    src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
                    alt="user-dp"
                    id="user-dp"
                  />
                </Link>
                <span>{this.props.auth.user.name}</span>
              </div>
            }
            <div className="nav-links">
            <ul>
              <li>
                  <Link to='/'>Home</Link>
              </li>
              {
                !this.props.auth.isLoggedIn && 
                <li>
                  <Link to='/signup'>Signup</Link>
                </li>
              }
              {
                !this.props.auth.isLoggedIn && 
                <li>
                    <Link to='/login'>Login</Link>
                </li>
              }
              {
                this.props.auth.isLoggedIn && 
                <li onClick={this.logout}>
                    <Link to='/login'>Logout</Link>
                </li>
              }
        </ul>
            </div>
          </div>
      </nav>
      
  );
  }
    
}

function mapStateToProps(state){
  return {
    auth : state.auth,
    search : state.search
  }
}
export default connect(mapStateToProps)(Navbar);