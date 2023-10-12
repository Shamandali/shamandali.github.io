import { Form, Switch } from 'antd';
import { FC } from 'react';
import { PropsElement } from './props.interface';

const SwitchElement: FC<PropsElement> = ({ element, props }) => {
  return (
    <Form.Item {...props}>
      <Switch {...element.adicionalProps} />;
    </Form.Item>
  );
};

export default SwitchElement;
