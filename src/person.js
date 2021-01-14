import React, { Component } from "react";

class Person extends Component {
  constructor() {
    super();
    this.state = {
      profile: {
          
        fullname: "med shelby",
        phonenumber: "95547926",
        bio: "i am a student",
      },
      show: false,
      counter:0,
    };
  }
  showme = () => {
    this.setState({
      show: !this.state.show,
    });
  };
  componentDidMount() {
      setInterval(() => {
          this.setState({
              counter:this.state.counter +1
          })
          
      }, 1000);
  }
  render() {
    return (
      <div>
          {this.state.counter}
        {this.state.show ? (
          <div>
            
            <h1>{this.state.profile.fullname}</h1>
            <p>{this.state.profile.bio}</p>
            <p>{this.state.profile.phonenumber}</p>
          </div>
        ) : "my profile"}
        <button onClick={() => this.showme()}>show me</button>
      </div>
    );
  }
}

export default Person;