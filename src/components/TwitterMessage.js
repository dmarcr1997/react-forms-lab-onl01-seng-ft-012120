import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();
    
    this.state = {
      remainingChars: props.maxChars
    };
  }

  handleChange = event => {
    this.setState(previousState => {
      return{
        remainingChars: previousState.remainingChars - 1,
        [event.target.name]: event.target.value
      }
    })
  }
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => {this.handleChange(event)}} value={this.state.message}/>
        <p>{this.state.remainingChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
