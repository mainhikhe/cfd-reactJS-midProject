import React from "react";

const Input = ({ label, required, renderProps, ...inputProps }) => {
  return (
    <>
      <label className="label">
        {label} {required && <span>*</span>}
      </label>
      {renderProps ? (
        renderProps(inputProps)
      ) : (
        <input
          {...inputProps}
          className={`form__input ${!!inputProps.error ? "formerror" : ""}`}
        />
      )}
      <p className="error">{inputProps.error || ""}</p>
    </>
  );
};

export default Input;
