import React from "react";
import { Link } from "react-router-dom";

function Table({ users = [], onDelete }) {
  return (
    <table className="table table-bordered table-hover mt-5">
      <thead className="table-dark">
        <tr>
          <th className="text-center">ID</th>
          <th className="text-center">FIRSTNAME</th>
          <th className="text-center">LASTNAME</th>
          <th className="text-center">EMAIL</th>
          <th className="text-center">ROLE</th>
          <th className="text-center">CREATEDAT</th>
          <th className="text-center">ACTIONS</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => {
          return (
            <tr key={index}>
              <td className="text-center">{user.id}</td>
              <td className="text-center">{user.firstName}</td>
              <td className="text-center">{user.lastName}</td>
              <td className="text-center">{user.email}</td>
              <td className="text-center">{user.role}</td>
              <td className="text-center">{user.createdAt}</td>
              <td className="text-center">
                <div
                  class="btn-group outlined"
                  role="group"
                  aria-label="Basic example"
                >
                  <Link
                    to={`/users/${user.id}`}
                    type="button"
                    className="btn btn-success"
                  >
                    View
                  </Link>
                  <Link
                    to={`/users/${user.id}/update`}
                    type="button"
                    className="btn btn-warning"
                  >
                    Update
                  </Link>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => {
                      onDelete(user.id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
