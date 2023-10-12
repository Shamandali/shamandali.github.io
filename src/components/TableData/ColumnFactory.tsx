import { ColumnType } from 'antd/lib/table';

import GetColumnSearchProps from './GetColumnSearchProps';
import { ColumnFactoryType } from '@/core/infrastructure/domain/models/TableData/column';

const ColumnFactory = <T,>(props: {
  columns: ColumnFactoryType<T>[];
  operations: (render: T, index?: number) => JSX.Element;
  operationOptions?: unknown;
  nonShowOperation?: boolean;
}): ColumnType<T>[] => {
  const { columns, operations, nonShowOperation, operationOptions } = props;
  const getColumns = () => [
    ...columns.map(e => {
      let allColumns = { key: e.name, title: e.customName ?? e.name, dataIndex: e.name } as ColumnType<T>;
      if (e.customRender) {
        allColumns = {
          ...allColumns,
          render: (_, record, index) => {
            if (e.customRender) {
              return e.customRender(record, index);
            }
          }
        };
      }
      if (e.search) {
        allColumns = {
          key: e.name,
          title: e.customName ?? e.customName,
          dataIndex: e.name,
          ...GetColumnSearchProps(e.name, e.name, e.customRender)
        };
      }
      if (e.sort) {
        /*eslint-disable*/
        //@ts-ignore
        allColumns = { ...allColumns, sorter: (a, b) => a[e.name] - b[e.name] };
      }
      if (e.width) {
        allColumns = { ...allColumns, width: e.width };
      }
      if (e.fixed) {
        allColumns = {
          ...allColumns,
          fixed: e.fixed
        };
      }
      if (e.ellipsis) {
        allColumns = {
          ...allColumns,
          ellipsis: true
        };
      }
      if (e.filter) {
        allColumns = {
          ...allColumns,
          filters: e.filter,
          onFilter: (value, record) => {
            if (e.customFilter) {
              //@ts-ignore
              return record[e.name][e.customFilter].includes(value);
            }
            //@ts-ignore
            return record.name.indexOf(value) === 0;
          }
        };
      }
      return { ...allColumns };
    })
  ];

  return nonShowOperation
    ? [...getColumns()]
    : [
        ...getColumns(),
        {
          key: 'operacion',
          title: '',
          dataIndex: 'operacion',
          width: 180,
          //@ts-ignore
          ...operationOptions,
          render: (_, record, index) => operations(record, index)
        }
      ];
};
export default ColumnFactory;
