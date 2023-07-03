import React from "react";
// const options = [
//   {
//     value: "",
//     label: "--",
//   },
//   {
//     value: "res",
//     label: "Web Responsive",
//   },
//   {
//     value: "react",
//     label: "React",
//   },
// ];
const Select = ({
  options,
  label,
  required,
  value,
  onChange,
  error,
  ...selectProps
}) => {
  return (
    <>
      <label className="label">
        {label} {required && <span>*</span>}
      </label>
      <select
        className={`select form__input ${!!error ? "formerror" : ""}`}
        value={value}
        onChange={onChange}
        {...selectProps}
      >
        {options?.length > 0 &&
          options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
      </select>
      <p className="error">{error || ""}</p>
    </>
  );
};

export default Select;
