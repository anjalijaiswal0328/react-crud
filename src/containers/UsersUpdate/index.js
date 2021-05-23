import React, { Component } from "react";
import InputForm from "./../../components/InputForm";
import axios from "axios";
import Button from "./../../components/Button";

export class UsersUpdate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      role: "",
    };

    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(event) {
    event.stopPropagation();
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  async handleOnSubmit(event) {
    event.preventDefault();
    const { id } = this.props.match.params;
    try {
      await axios.put(`/users/${id}`, this.state);
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
                    label="Role"
                    name="role"
                    value={role}
                    type="text"
                    placeholder="abcde"
                    onChange={this.handleOnClick}
                    required
                  />

                  <Button label="Submit" type="submit" />
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

export default UsersUpdate;
