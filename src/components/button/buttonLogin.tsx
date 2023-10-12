import './buttonLogin.scss';
import React from 'react';
const ButtonLogin = ({ label, placeholder }: { label?: string; placeholder?: string }) => {
  return (
    <div className="main-input-login">
      <button type="button" className="main-button">
        Ingresar
      </button>
    </div>
  );
};

export default ButtonLogin;
