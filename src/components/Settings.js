import React, { Component } from 'react';
import { connect } from 'react-redux';

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.auth.user.name,
      password: '',
      confirmPassword: '',
      editMode: false,
    };
  }

  handlePassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  handleConfirmPassword = (event) => {
    this.setState({
      confirmPassword: event.target.value,
    });
  };

  handleName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  onEditMode = () =>{
    this.setState({
        editMode: true,
    });
  }

  offEditMode = () =>{
    this.setState({
        editMode: false,
    });
  }

  render() {
    const { user } = this.props.auth;
    const { editMode } = this.state;
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
          <div classname="field-value">{user.email}</div>
        </div>

        <div className="field">
          <div classname="field-label">Name</div>
          {editMode ? (
            <input
              type="text"
              onChange={this.handleName}
              value={this.state.email}
            />
          ) : (
            <div classname="field-value">{user.name}</div>
          )}
        </div>

        {editMode && (
          <div className="field">
            <div classname="field-label">New password</div>

            <input
              type="password"
              onChange={this.handlePassword}
              value={this.state.password}
            />
          </div>
        )}

        {editMode && (
          <div className="field">
            <div classname="field-label">Confirm password</div>

            <input
              type="password"
              onChange={this.handleConfirmPassword}
              value={this.state.confirmPassword}
            />
          </div>
        )}

        <div className="btn-grp">
          {editMode ? (
            <button className="button save-btn">Save</button>
          ) : (
            <button onClick={this.onEditMode} className="button edit-btn">Edit profile</button>
          )}

          {editMode && <div onClick={this.offEditMode} className="go-back">Go back</div>}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return {
    auth,
  };
}
export default connect(mapStateToProps)(Settings);
