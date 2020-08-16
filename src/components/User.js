import React, { Component } from 'react';

class User extends Component {

    componentDidMount = () => {
        console.log(this.props.match.params);
    }
  render() {
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
          <div classname="field-value">{}</div>
        </div>

        <div className="field">
          <div classname="field-label">Name</div>
          <div classname="field-value">{}</div>
        </div>

        <div className="btn-grp">
            <button className="button save-btn">Add Friend</button>
        </div>
        
      </div>
    );
  }
}


export default User;
