import './inputLogin.scss';
import React from 'react';
const InputLogin = ({ label, placeholder }: { label?: string; placeholder?: string }) => {
  return (
    <div className="main-input-login">
      <label className="label-input">{label}</label>
      <input className="main-input" placeholder={placeholder}></input>
    </div>
  );
};

export default InputLogin;
