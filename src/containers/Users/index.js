import React, { Component } from "react";
import axios from "axios";
import Table from "./../../components/Table";

class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };

    this.handleOnDelete = this.handleOnDelete.bind(this);
  }

  async componentDidMount() {
    try {
      const response = await axios.get("/users");
      this.setState({ users: response.data });
    } catch (error) {
      console.log("Oops an error has occured !");
    }
  }

  async handleOnDelete(id) {
    debugger;
    try {
      await axios.delete(`/users/${id}`);
      const response = await axios.get("/users");
      this.setState({ users: response.data });
    } catch (error) {
      console.log("an error");
    }
  }

  render() {
    const { users } = this.state;
    return (
      <div className="shadow">
        <Table users={users} onDelete={this.handleOnDelete} />
      </div>
    );
  }
}

export default Users;
