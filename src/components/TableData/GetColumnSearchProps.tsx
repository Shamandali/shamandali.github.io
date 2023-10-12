import { SearchOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';
import { useState } from 'react';
import Highlighter from 'react-highlight-words';

const GetColumnSearchProps = (dataIndex: string, name: string, customRender?: (render: any) => any): object => {
  //States
  const [searchText, setSearchText] = useState<string>('');
  const [searchedColumn, setSearchedColumn] = useState<string>('');

  //Functions
  const handleSearch = (selectedKeys: string[], confirm: () => void, currentDataIndex: string) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(currentDataIndex);
  };
  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText('');
  };

  return {
    filterDropdown: (props: {
      setSelectedKeys: (value: string[]) => void;
      selectedKeys: string[];
      confirm: () => void;
      clearFilters: () => void;
    }) => {
      const { setSelectedKeys, selectedKeys, confirm, clearFilters } = props;
      return (
        <div style={{ padding: 8 }}>
          <Input
            placeholder={`Buscar: ${name?.toLocaleLowerCase()}`}
            value={selectedKeys[0]}
            onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
            style={{ width: 188, marginBottom: 8, display: 'block' }}
          />
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90, marginRight: 8 }}
          >
            Buscar
          </Button>
          <Button
            shape={'round'}
            onClick={() => {
              handleReset(clearFilters);
            }}
            size="small"
            style={{ width: 90 }}
          >
            Cancelar
          </Button>
        </div>
      );
    },
    filterIcon: (filtered: any) => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value: any, record: any) => {
      return customRender
        ? customRender(record[dataIndex])
            ?.toString()
            ?.toLowerCase()
            ?.includes(value?.toLowerCase())
        : record[dataIndex]
            ?.toString()
            ?.toLowerCase()
            ?.includes(value?.toLowerCase());
    },
    render: (text: any) => {
      return searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={customRender ? customRender(text)?.toString() : text?.toString()}
        />
      ) : customRender ? (
        customRender(text)
      ) : (
        text
      );
    }
  };
};

export default GetColumnSearchProps;
