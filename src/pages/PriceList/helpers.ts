import { ColumnsType } from 'antd/es/table';
import { RefObject } from 'react';
import { DataType } from './PriceList';

export const columns: ColumnsType<DataType> = [
  {
    title: 'Наименование процедуры',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Цена (руб.)',
    dataIndex: 'price',
    key: 'price',
  },
];

export const getPriceMenuItem = (
  label: string,
  key: string,
  ref: RefObject<HTMLHeadingElement>
) => ({
  label,
  key,
  onClick: () => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        inline: 'start',
      });
    }
  },
});


