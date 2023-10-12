'use client';
import MainContentLayout from '@/components/MainContentLayout';
import { FormFactory as FormFactoryModel } from '@/components/FormFactory/FormFactory.interface';
import FormFactory from '@/components/FormFactory';
import React from 'react';
import './styles.scss';
import { SearchOutlined } from '@ant-design/icons';
import TableData from '@/components/TableData';
import { useAccountView } from './hooks/useAccountView.hook';
import columns from './columns';
import CardResume from '@/components/Accounts/CardResume';
import { Button, Form } from 'antd';

const Accounts = () => {
  // Hooks
  const { data } = useAccountView();
  const formElements: FormFactoryModel.IFormFactoryType<any>[] = [
    {
      name: 'prueba',
      type: 'string',
      required: false,
      placeholder: 'Buscar por cuenta'
    },
    {
      name: 'prueba2',
      type: 'string',
      required: false,
      placeholder: 'Buscar por contacto'
    },
    {
      name: 'prueba3',
      type: 'string',
      required: false,
      placeholder: 'Buscar por locación'
    },
    {
      name: 'prueba4',
      type: 'string',
      required: false,
      placeholder: 'Buscar por punto'
    }
  ];
  const inputsForm = [
    {
      icon: '/images/counts.svg',
      number: 50
    },
    {
      icon: '/images/countBlack.svg',
      number: 50
    },
    {
      icon: '/images/locations.svg',
      number: 50
    },
    {
      icon: '/images/homeBlack.svg',
      number: 50
    },
    {
      icon: '/images/qr.svg',
      number: 50
    },
    {
      icon: '/images/qrBlack.svg',
      number: 50
    }
  ];
  return (
    <MainContentLayout>
      <div className="container-accounts">
        <div className="accounts-head">
          <h2 className="accounts-title">LISTADO DE CUENTAS</h2>
          <div className="container-states">
            {inputsForm.map(form => (
              <CardResume icon={form.icon} number={form.number} />
            ))}
          </div>
        </div>
        <div className="accounts-filter">
          <div className="main-filter">
            <FormFactory isUpdate={false} elements={formElements} />
          </div>
          <div className="filter-button">
            <Form.Item>
              <Button icon={<SearchOutlined />} className="button-search" htmlType="submit">
                Buscar
              </Button>
            </Form.Item>
          </div>
        </div>
        <TableData columns={columns} loading={false} data={data} />
      </div>
    </MainContentLayout>
  );
};

export default Accounts;
