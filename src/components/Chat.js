import io from 'socket.io-client';
import {connect} from 'react-redux';

import React, { Component } from 'react';
import '../chat.css';

class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [], // {content: 'some message', self: true}
      typedMessage: '',
    };

    this.userEmail = props.auth.user.email;
    this.socket = io.connect('http://54.237.158.65:5000');
    if(this.userEmail){
        this.setUpConnections();
    }

  }

  setUpConnections = () =>{
      const socketConnection = this.socket;
      const self = this;

      socketConnection.on('connect' , function(){
          console.log('Connnection Established');
          
          socketConnection.emit('join_room' , {
              user_email : self.userEmail,
              chatroom : 'codeial'
          });

          socketConnection.on('user_joined' , function(){
              console.log('New User Joined');
          })
      })

      socketConnection.on('receive_message' , function(data) {

        const messageObject = {};
        const messages = self.state.messages;

        messageObject.content = data.message;
        if(data.user_email === self.userEmail){
            messageObject.self = true;
        }

        self.setState({
            messages : [...messages , messageObject],
            typedMessage : ''
        })
      })
  }

  handleSubmit = () =>{
      const {typedMessage} =  this.state;

      if(typedMessage && this.userEmail){
          this.socket.emit('send_message' , {
              user_email : this.userEmail,
              chatroom : 'codeial',
              message : typedMessage
          })
      }
  }
  render() {
    const { typedMessage, messages } = this.state;

    return (
      <div className="chat-container">
        <div className="chat-header">
          Chat
          <img
            src="https://cdn2.iconfinder.com/data/icons/harmonicons-05/64/minus-circle-512.png"
            alt=""
            height={17}
          />
        </div>
        <div className="chat-messages">
          {messages.map((message) => (
            <div
              className={
                message.self
                  ? 'chat-bubble self-chat'
                  : 'chat-bubble other-chat'
              }
            >
              {message.content}
            </div>
          ))}
        </div>
        <div className="chat-footer">
          <input
            type="text"
            value={typedMessage}
            onChange={(e) => this.setState({ typedMessage: e.target.value })}
          />
          <button onClick={this.handleSubmit}>Submit</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
    return{
        auth : state.auth
    }
}

export default connect(mapStateToProps)(Chat);
