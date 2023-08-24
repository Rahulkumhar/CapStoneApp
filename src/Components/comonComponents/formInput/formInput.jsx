import React from "react";

import "./formInput.style.scss";

const FormInput = ({ signUpFormHandle, label, ...props }) => (
  <div className="group">
    <input className="form-input" onChange={signUpFormHandle} {...props} />
    {label ? (
      <label
        className={`${props.value.length ? "shrink" : ""} form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
