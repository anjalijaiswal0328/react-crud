import React, { Component } from "react";
import axios from "axios";

export class UsersDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
    };
  }

  async componentDidMount() {
    const { id } = this.props.match.params;

    try {
      const response = await axios.get(`/users/${id}`);
      this.setState({ user: response.data });
    } catch (error) {
      console.log("its an error");
    }
  }

  render() {
    const { user } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col"></div>
          <div className="col">
            <div className="card  shadow mt-5">
              <div className="card-body">
                <ul>
                  <li>Id: {user.id}</li>
                  <li>FirstName: {user.firstName}</li>
                  <li>LastName: {user.lastName}</li>
                  <li>Email: {user.email}</li>
                  <li>Role: {user.role}</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col"></div>
        </div>
      </div>
    );
  }
}

export default UsersDetail;
