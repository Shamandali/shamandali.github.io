import SelectSlider from '@/components/slider/selectSlider/selectSlider';
import React from 'react';
import './index.scss';
const Slider = () => {
  const inputsForm = [
    {
      icon: '/images/briefcase.svg',
      title: 'Cuentas'
    },
    {
      icon: '/images/report.svg',
      title: 'Reportes'
    },
    {
      icon: '/images/users.svg',
      title: 'Usuarios'
    }
  ];
  return (
    <div className="slider">
      <img className="img" src="/images/logo.svg"></img>
      <div className="title">
        <img className="icon" src="/images/home.svg"></img>
        <label className="label">Inicio</label>
      </div>
      <label className="main-title">Administración</label>
      <div className="main-panel-select">
        {inputsForm.map((form, j) => (
          <div className="container-select" key={j}>
            <SelectSlider icon={form.icon} title={form.title} navigate={true} />
          </div>
        ))}
      </div>
      <div className="container-close-sesion">
        <SelectSlider icon="/images/closeSesion.svg" title="Cerrar Sesión" navigate={false} />
      </div>
    </div>
  );
};

export default Slider;
