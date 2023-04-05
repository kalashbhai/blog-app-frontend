import React from 'react';

const Input = ({ type, placeholder, value, onChange }) => {
  return (
    <input type={type} className="form-control" placeholder={placeholder} value={value} onChange={onChange} />
  );
}

export default Input;
