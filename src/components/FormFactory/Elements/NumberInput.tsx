import { Form, InputNumber } from 'antd';
import { FC } from 'react';
import { PropsElement } from './props.interface';

const NumberInput: FC<PropsElement> = ({ element, props }) => {
  return (
    <Form.Item {...props}>
      <InputNumber placeholder={element.placeholder} autoComplete="off" {...element.adicionalProps} />;
    </Form.Item>
  );
};

export default NumberInput;
