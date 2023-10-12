'use client';
import FormFactory from '@/components/FormFactory';
import { FormFactory as FormFactoryModel } from '@/components/FormFactory/FormFactory.interface';
import { Button, Form, Input } from 'antd';
import styles from './page.module.css';

export default function Home() {
  const formElements: FormFactoryModel.IFormFactoryType<any>[] = [
    {
      name: 'prueba',
      type: 'email',
      required: true,
      placeholder: 'prueba'
    }
    // {
    //   name: 'prueba2',
    //   type: 'number',
    //   required: false,
    //   placeholder: 'prueba 2'
    // }
  ];

  const onFinish = (data: any) => {
    console.log(data);
  };

  return (
    <main className={styles.main}>
      <Form layout="vertical" name="basic" onFinish={onFinish}>
        <FormFactory isUpdate={false} elements={formElements} />
        <Form.Item>
          <Button htmlType="submit" type="primary">
            Button
          </Button>
        </Form.Item>
      </Form>
      <Input placeholder="Basic usage" />
    </main>
  );
}
