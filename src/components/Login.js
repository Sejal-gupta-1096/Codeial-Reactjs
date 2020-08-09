import React, { Component } from 'react';

class Login extends Component {
  constructor(props){
    super(props);

    this.state = {
      email : '',
      password : ''
    };
  }

  handleEmail = (event) =>{
    this.setState({
      email : event.target.value
    })
  }

  handlePassword = (event) =>{
    this.setState({
      password : event.target.value
    })
  }

  handleFormSubmit = (event) =>{
    event.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <form className="login-form">
        <span className="login-signup-header">Log In</span>
        <div className="field">
          <input onChange={this.handleEmail} value={this.state.email} type="email" placeholder="Email" required />
        </div>
        <div className="field">
          <input onChange={this.handlePassword} value={this.state.password} type="password" placeholder="Password" required />
        </div>
        <div className="field">
          <button onClick={this.handleFormSubmit}>Log In</button>
        </div>
      </form>
    );
  }
}

export default Login;