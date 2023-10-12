import { Form, Select } from 'antd';
import { FC } from 'react';
import { PropsElement } from './props.interface';

const SelectElement: FC<PropsElement> = ({ element, props }) => {
  return (
    <Form.Item {...props}>
      <Select
        {...element.adicionalProps}
        allowClear
        showSearch
        placeholder={element.placeholder}
        //   @ts-ignore
        filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
      >
        {//@ts-ignore
        element.data?.map((c: { name: string; _id: string } | string) => {
          //@ts-ignore
          if (Object.keys(c).findIndex(e => e === '_id') !== -1) {
            return (
              //@ts-ignore
              <Select.Option key={c._id} value={c._id}>
                {(c as { name: string }).name}
              </Select.Option>
            );
          } else {
            return (
              <Select.Option key={c as string} value={c as string}>
                {c as string}
              </Select.Option>
            );
          }
        })}
      </Select>
    </Form.Item>
  );
};

export default SelectElement;
