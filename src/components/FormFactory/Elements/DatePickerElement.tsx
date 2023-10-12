import { DatePicker, Form } from 'antd';
import { FC } from 'react';
import { PropsElement } from './props.interface';

const DatePickerElement: FC<PropsElement> = ({ element, props }) => {
  return (
    <Form.Item {...props}>
      <DatePicker
        showTime
        use12Hours
        allowClear={true}
        showNow={false}
        placeholder={element.placeholder}
        format="DD/MM/YYYY HH:mm"
      />
    </Form.Item>
  );
};

export default DatePickerElement;
