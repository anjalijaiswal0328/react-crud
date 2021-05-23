import React from "react";

function InputForm({
  label = "",
  name = "",
  value = "",
  type = "text",
  placeholder = "",
  onChange = () => {},
  // onSubmit = () => {},
  ...rest
}) {
  return (
    <div className="form-group">
      <label className="form-label text-center">{label}</label>
      <input
        className="form-control"
        name={name}
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        {...rest}
        // onSubmit={onSubmit}
      />
    </div>
  );
}

export default InputForm;
