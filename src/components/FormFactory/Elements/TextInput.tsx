import { Form, Input } from 'antd';
import React, { FC } from 'react';
import { PropsElement } from './props.interface';

const TextInput: FC<PropsElement> = ({ element, props }) => {
  return (
    <Form.Item {...props}>
      <Input placeholder={element.placeholder} autoComplete="off" {...element.adicionalProps} />
    </Form.Item>
  );
};

export default TextInput;
