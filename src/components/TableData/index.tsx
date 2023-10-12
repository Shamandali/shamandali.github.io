import React from 'react';
import { Table } from 'antd';
import { ITablePropsComponent } from '@/core/infrastructure/domain/models/TableData/TablePropsComponent';

const TableData = <T,>(props: ITablePropsComponent<T>): JSX.Element => {
  const { data, columns, loading, pagination, onChange, scroll, additionalProps } = props;
  return (
    // @ts-ignore
    <Table
      rowClassName={() => {
        return 'rowTable';
      }}
      scroll={scroll ? { ...scroll } : { y: '60vh' }}
      pagination={pagination}
      dataSource={data as any}
      columns={columns as any}
      loading={loading}
      className="tableData"
      style={{ width: '100%' }}
      size="large"
      onChange={onChange && (onChange as any)}
      {...additionalProps}
    />
  );
};

export default TableData;
