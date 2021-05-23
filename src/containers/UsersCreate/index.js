import React, { Component } from "react";
import axios from "axios";
import InputForm from "./../../components/InputForm";
import Button from "./../../components/Button";

class UsersCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      role: "",
    };

    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(event) {
    event.stopPropagation(event);
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  async handleOnSubmit(event) {
    event.preventDefault();

    try {
      await axios.post("/users/create", this.state);
      this.props.history.push("/users");
    } catch (error) {
      console.log("oops an error has occured ");
    }
  }

  render() {
    const { firstName, lastName, email, role } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">
            <div className="card shadow mt-5">
              <div className="card-body">
                <form onSubmit={this.handleOnSubmit}>
                  <InputForm
                    label="First Name"
                    name="firstName"
                    value={firstName}
                    type="text"
                    placeholder="John"
                    onChange={this.handleOnClick}
                    required
                  />
                  <InputForm
                    label="Last Name"
                    name="lastName"
                    value={lastName}
                    type="text"
                    placeholder="Doe"
                    onChange={this.handleOnClick}
                    required
                  />
                  <InputForm
                    label="Email"
                    name="email"
                    value={email}
                    type="text"
                    placeholder="john@exm.com"
                    onChange={this.handleOnClick}
                    required
                  />

                  <InputForm
                    label="Role"
                    name="role"
                    value={role}
                    type="text"
                    placeholder="abcde"
                    onChange={this.handleOnClick}
                    required
                  />

                  <Button label="Submit" />
                </form>
              </div>
              <div className="col-3"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UsersCreate;
