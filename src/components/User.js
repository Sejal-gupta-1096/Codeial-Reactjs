import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchUserProfile} from '../actions/user_profile';
import {APIUrls} from '../helpers/urls';
import { addFriendSuccess } from '../actions/friends';

class User extends Component {

  constructor(props){
    super(props);
    this.state = {
      success : null,
      error : null
    }
  }
    componentDidMount = () => {
        console.log(this.props.match.params);
        this.props.dispatch(fetchUserProfile(this.props.match.params.userId))
    }

    handleAddFriend = async () =>{

      let url = APIUrls.addFreind(this.props.match.params.userId);
      const response = await fetch(url ,{ 
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization : `Bearer ${localStorage.getItem('token')}`
        },
      });

      const data = await response.json();
      console.log(data);
      if(data.success){
        this.props.dispatch(addFriendSuccess(data.data.friendship));
        this.setState({
          success : data.message
        })
      }else{
        this.setState({
          success : null,
          error : data.message
        })
      }
      
    }

    handleRemoveFriend = () => {

    }

    checkUserAFriend = () =>{
      let friendId = this.props.match.params.userId;
      let flag = false;
      this.props.friends.map( (friend) =>{
        if(friendId === friend.to_user._id){
          flag = true
        }
      })

      return flag;
    }
  render() {
      if(this.props.userProfile.inProgress){
          return <h1>Loading...</h1>
      }
      let isUserAFriend = this.checkUserAFriend();
    return (
      <div className="settings">
        <div className="img-container">
          <img
            src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
            alt="user-dp"
          />
        </div>

        <div className="field">
          <div classname="field-label">Email</div>
          <div classname="field-value">{this.props.userProfile.user.email}</div>
        </div>

        <div className="field">
          <div classname="field-label">Name</div>
          <div classname="field-value">{this.props.userProfile.user.name}</div>
        </div>

        <div className="btn-grp">
            {
            isUserAFriend ? 
            <button onClick={this.handleRemoveFriend} className="button save-btn">Remove Friend</button>:
            <button onClick={this.handleAddFriend} className="button save-btn">Add Friend</button>
            }
        </div>

        {this.state.success && <div className='alert success-dailog'>{this.state.success}</div>}
        {this.state.error && <div className='alert error-dailog'>{this.state.error}</div>}
        
      </div>
    );
  }
}

function mapStateToProps(state){
    return{
        userProfile : state.userProfile,
        friends : state.friends
    }
}
export default connect(mapStateToProps)(User);
