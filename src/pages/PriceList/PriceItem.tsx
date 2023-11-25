import { Table } from 'antd';
import { forwardRef } from 'react';
import { DataType } from './PriceList';
import { ColumnsType } from 'antd/es/table';

import styles from './PriceList.module.scss';

interface PriceItemProps {
  label: string;
  columns: ColumnsType<DataType>;
  dataSource: DataType[];
}

export const PriceItem = forwardRef<HTMLHeadingElement, PriceItemProps>(
  ({ label, columns, dataSource }, ref) => {
    const getRowClassName = (record: DataType) => {
      if (!record.price) {
        return styles.specialRow;
      }
      return styles.row;
    };
    return (
      <>
        <h3 ref={ref}>{label}</h3>
        <Table
          columns={columns}
          dataSource={dataSource}
          rowClassName={getRowClassName}
          pagination={false}
        />
      </>
    );
  }
);
