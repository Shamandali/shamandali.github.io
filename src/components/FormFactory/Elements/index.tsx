import React, { FC } from 'react';

import { Rule } from 'antd/es/form';
import { FormItemProps } from 'antd/es/form/FormItem';
import moment from 'moment';
import { elementsObject } from '../FormFactory.interface';
import { PropsFormFactory } from '../props.interface';
import DatePickerElement from './DatePickerElement';
import NumberInput from './NumberInput';
import SelectElement from './SelectElement';
import SwitchElement from './SwitchElement';
import TextAreaElement from './TextAreaElement';
import TextInput from './TextInput';

const FormFactory: FC<PropsFormFactory> = ({ element, isUpdate }) => {
  const seeDummies = !process.env.NEXT_PUBLIC_PROD && isUpdate;

  element.visible === undefined && (element.visible = true);

  const rules: Rule = {
    required: element.required,
    message: `'${element.name}' es obligatorio`
  };

  const initialProps: FormItemProps = {
    rules: [rules],
    name: element.name,
    label: element.label
  };
  let props: FormItemProps = {};

  const elements: elementsObject = {
    string: () => {
      props = {
        ...initialProps,
        rules: [{ type: 'string', ...rules }],
        ...(seeDummies ? { initialValue: 'prueba' } : null)
      };
      return <TextInput props={props} element={element} />;
    },
    number: () => {
      props = { ...initialProps, rules: [{ type: 'number', ...rules }], ...(seeDummies ? { initialValue: 12 } : null) };
      return <NumberInput props={props} element={element} />;
    },
    date: () => {
      props = {
        ...initialProps,
        rules: [{ type: 'date', ...rules }],
        ...(seeDummies ? { initialValue: moment() } : null)
      };
      return <DatePickerElement props={props} element={element} />;
    },
    phone: () => {
      props = {
        ...initialProps,
        rules: [{ type: 'string', ...rules }],
        ...(seeDummies ? { initialValue: '12345667' } : null)
      };
      return <TextInput props={props} element={element} />;
    },
    boolean: () => {
      props = {
        ...initialProps,
        rules: [{ type: 'boolean', ...rules }],
        ...(seeDummies ? { initialValue: true } : null),
        valuePropName: 'checked'
      };
      return <SwitchElement props={props} element={element} />;
    },
    email: () => {
      props = {
        ...initialProps,
        rules: [{ type: 'email', message: 'Email invalido' }, { ...rules }],
        ...(seeDummies ? { initialValue: 'test@gmail.com' } : null)
      };
      return <TextInput props={props} element={element} />;
    },
    select: () => {
      return <SelectElement props={props} element={element} />;
    },
    textArea: () => {
      props = {
        ...initialProps,
        rules: [{ type: 'string', ...rules }],
        ...(seeDummies ? { initialValue: 'prueba' } : null)
      };
      return <TextAreaElement props={props} element={element} />;
    }
  };

  const selectedElement = elements[element.type]();

  return element.visible ? <div>{selectedElement}</div> : <></>;
};

export default React.memo(FormFactory);
