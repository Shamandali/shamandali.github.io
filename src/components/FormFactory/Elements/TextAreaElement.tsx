import { Form, Input } from 'antd';
import React, { FC } from 'react';
import { PropsElement } from './props.interface';

const TextAreaElement: FC<PropsElement> = ({ element, props }) => {
  return (
    <Form.Item {...props}>
      <Input.TextArea placeholder={element.placeholder} autoComplete="off" {...element.adicionalProps} />
    </Form.Item>
  );
};

export default TextAreaElement;
