import { FC } from 'react';
import Elements from './Elements';
import { FormFactoryProp } from './FormFactory.interface';

const index: FC<FormFactoryProp> = ({ elements, isUpdate }) => {
  return elements.map((element, i) => <Elements key={i} isUpdate={isUpdate} element={element} />);
};

export default index;
