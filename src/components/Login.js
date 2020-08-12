import React, { Component } from 'react';
import {login} from '../actions/auth';
import {connect} from 'react-redux';

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

    let {email , password} = this.state;

    if(email && password){
      this.props.dispatch(login(email,password));
    }
  }
  render() {
    return (
      <form className="login-form">
        <span className="login-signup-header">Log In</span>
        {this.props.auth.error && <div className='alert error-dailog'>{this.props.auth.error}</div>}
        <div className="field">
          <input onChange={this.handleEmail} value={this.state.email} type="email" placeholder="Email" required />
        </div>
        <div className="field">
          <input onChange={this.handlePassword} value={this.state.password} type="password" placeholder="Password" required />
        </div>
        <div className="field">
          {this.props.auth.inProgress ? <button disabled={this.props.auth.inProgress} onClick={this.handleFormSubmit}>Loging In..</button>:<button disabled={this.props.auth.inProgress} onClick={this.handleFormSubmit}>Log In</button>}
        </div>
      </form>
    );
  }
}

function mapStateToProps(state){
  return{
    auth : state.auth
  }
}

export default connect(mapStateToProps)(Login);
