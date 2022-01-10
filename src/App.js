import React from "react";
export default class Application extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      display: false,
      firstName: "",
      city: "",
    };
  }

  inputCheck = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitCheck = () => {
    this.setState({ display: true });
    // display: true
  };

  displayForm() {
    return (
      <div className="form">
        <div className="header">
          <h1>Welcome!</h1>
          <p>Please provide your information below.</p>
        </div>
        <div className="inputcontainer">
          <input
            name="firstName"
            placeholder="First Name"
            onChange={this.inputCheck}
          />
          <input name="city" placeholder="city" onChange={this.inputCheck} />

          <button onClick={this.submitCheck}>Submit</button>
        </div>
      </div>
    );
  }

  displayData() {
    return (
      <div className="form">
        <p>
          Name is <b>{this.state.city}</b> and the city is{" "}
          <b> {this.state.firstName}</b>
        </p>
      </div>
    );
  }
  render() {
    return this.state.display ? this.displayData() : this.displayForm();
  }
}
