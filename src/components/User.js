import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchUserProfile} from '../actions/user_profile'

class User extends Component {

    componentDidMount = () => {
        console.log(this.props.match.params);
        this.props.dispatch(fetchUserProfile(this.props.match.params.userId))
    }
  render() {
      if(this.props.userProfile.inProgress){
          return <h1>Loading...</h1>
      }
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
            <button className="button save-btn">Add Friend</button>
        </div>
        
      </div>
    );
  }
}

function mapStateToProps(state){
    return{
        userProfile : state.userProfile
    }
}
export default connect(mapStateToProps)(User);
