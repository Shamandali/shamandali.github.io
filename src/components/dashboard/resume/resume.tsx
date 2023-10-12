import React from 'react';
import CardResume from './cardResume/cardResume';
import './resume.scss';
const Resume = () => {
  const inputsForm = [
    {
      icon: '/images/counts.svg',
      title: 'Cuentas',
      number: 50
    },
    {
      icon: '/images/locations.svg',
      title: 'Reportes',
      number: 50
    },
    {
      icon: '/images/qr.svg',
      title: 'Usuarios',
      number: 50
    },
    {
      icon: '/images/locations.svg',
      title: 'Usuarios',
      number: 50
    }
  ];
  return (
    <div className="main-container-resume">
      {inputsForm.map(form => (
        <CardResume icon={form.icon} title={form.title} number={form.number} />
      ))}
    </div>
  );
};

export default Resume;
