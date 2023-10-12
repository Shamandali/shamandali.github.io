'use client';
import FormFactory from '@/components/FormFactory/index';
import { Button, Form } from 'antd';
import { elements } from '../FormElements';
import { AccountService } from '../services';
const CreateAccount = () => {
  const onFinish = async (data: any) => {
    await AccountService.CreateAccount(data);
  };

  return (
    <div>
      <Form layout="vertical" onFinish={onFinish}>
        <FormFactory elements={elements} isUpdate />
        <Form.Item>
          <Button htmlType="submit">Continuar</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateAccount;
