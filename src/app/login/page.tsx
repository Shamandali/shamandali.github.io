import ButtonLogin from '@/components/button/buttonLogin';
import InputLogin from '@/components/input/inputLogin';
import { format } from 'path';
import React from 'react';
import './login.scss';
const Login = () => {
  const inputsForm = [
    {
      placeholder: ' Ingrese el número de teléfono / Email',
      label: 'Usuario'
    },
    {
      placeholder: ' Ingrese el código enviado',
      label: 'Código'
    }
  ];
  return (
    <div className="main-login">
      <div className="main-logo">
        <img className="img" src="/images/img.png"></img>
      </div>
      <div className="main-form">
        <div className="main-avatar">
          <img className="img" src="/images/avatar.svg"></img>
        </div>
        <label className="title">Inicio de sesión</label>
        {inputsForm.map((form, j) => (
          <div className="container-input" key={j}>
            <InputLogin placeholder={form.placeholder} label={form.label} />
          </div>
        ))}
        <label className="subtitle">¿Olvido su contraseña? Cámbiela AQUÍ</label>
        <div className="container-button">
          <ButtonLogin></ButtonLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;
