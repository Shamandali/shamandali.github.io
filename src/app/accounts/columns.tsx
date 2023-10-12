import ColumnFactory from '@/components/TableData/ColumnFactory';
import { AccountResponseModel } from '@/core/infrastructure/domain/models/Account/account-response.model';

export default ColumnFactory<AccountResponseModel>({
  columns: [
    {
      name: 'Id',
      customName: 'ID',
      ellipsis: true
    },
    {
      name: 'Logo',
      customName: 'LOGO',
      ellipsis: true
    },
    {
      name: 'Name',
      ellipsis: true,
      customName: 'NOMBRE'
    },
    {
      name: 'Contact',
      ellipsis: true,
      customName: 'CONTACTO'
    },
    {
      name: 'Telephone',
      ellipsis: true,
      customName: 'TELÉFONO'
    },
    {
      name: 'Locations',
      ellipsis: true,
      customName: 'LOCACIONES'
    },
    {
      name: 'Points',
      ellipsis: true,
      customName: 'PUNTOS'
    },
    {
      name: 'Ics',
      ellipsis: true,
      customName: 'ICS'
    },
    {
      name: 'Status',
      ellipsis: true,
      customName: 'STATUS'
    }
  ],
  operations: () => <></>
});
