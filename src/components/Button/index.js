import React from "react";

function Button({ label, type = "button" }) {
  return (
    <button type={type} className="btn btn-secondary form-control mt-5">
      {label}
    </button>
  );
}

export default Button;
