import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { createServer } from "miragejs";

let id = 4;
const users = [
  {
    id: "1",
    firstName: "Luke",
    lastName: "Mike",
    email: "luke.mike@gmail.com",
    password: "*******",
    role: "ADMIN",
    createdAt: new Date(),
  },
  {
    id: "2",
    firstName: "Eva",
    lastName: "Stone",
    email: "eva.stone@gmail.com",
    password: "********",
    role: "ADMIN",
    createdAt: new Date(),
  },
  {
    id: "3",
    firstName: "Eva",
    lastName: "Green",
    email: "eva.green@gmail.com",
    password: "*******",
    role: "ADMIN",
    createdAt: new Date(),
  },
];

createServer({
  routes() {
    this.get("/users", (schema) => {
      return users;
    });

    this.post("/users/create", (schema, request) => {
      let body = JSON.parse(request.requestBody);
      const newUser = {
        ...body,
        id: id++,
        createdAt: new Date(),
      };
      users.push(newUser);
      return newUser;
    });

    this.get("/users/:id", (schema, request) => {
      const { id } = request.params;
      return users.find((user) => +user.id === +id);
    });

    this.put("/users/:id", (schema, request) => {
      const { id } = request.params;
      const userIndex = users.find((user) => +user.id === +id);
      let body = JSON.parse(request.requestBody);
      const updatedUser = { ...users[userIndex], ...body };
      users[userIndex] = updatedUser;
      return updatedUser;
    });

    this.delete("/users/:id", (schema, request) => {
      const { id } = request.params;
      const userIndex = users.find((user) => +user.id === +id);
      users.splice(userIndex, 1);
      return {};
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
