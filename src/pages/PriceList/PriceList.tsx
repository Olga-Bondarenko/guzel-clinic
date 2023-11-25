import { Button, Menu } from 'antd';
import { consultation, epilation, injection, massage, therapeutic } from '../../data/price';
import styles from './PriceList.module.scss';
import { useEffect, useRef, useState } from 'react';
import { getPriceMenuItem, columns } from './helpers';
import { PriceItem } from './PriceItem';
import { v4 as uuidv4 } from 'uuid';


export interface DataType {
  name: string;
  price: number | string | null;
}

export const PriceList = () => {
  const epilationRef = useRef<HTMLHeadingElement>(null);
  const consulRef = useRef<HTMLHeadingElement>(null);
  const massageRef = useRef<HTMLHeadingElement>(null);
  const therapeuticRef = useRef<HTMLHeadingElement>(null);
  const injectionRef = useRef<HTMLHeadingElement>(null);

  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.scrollY > 400) {
      setShowScroll(true);
    } else if (showScroll && window.scrollY <= 400) {
      setShowScroll(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  const items = [
    {
      label: 'Консультации',
      key: 'cons',
      ref: consulRef,
      dataSource: consultation,
    },
    {
      label: 'Лазерная эпиляция',
      key: 'epil',
      ref: epilationRef,
      dataSource: epilation,
    },
    {
      label: 'Пилинги, чистки, уходовые процедуры',
      key: 'therapeutic',
      ref: therapeuticRef,
      dataSource: therapeutic,
    },
    {
      label: 'Инъекционная косметология ',
      key: 'injection',
      ref: injectionRef,
      dataSource: injection,
    },
    {
      label: 'Массаж ',
      key: 'massage',
      ref: massageRef,
      dataSource: massage,
    },
  ];

  return (
    <div className={styles.root}>
      <Menu
        items={items.map((item) =>
          getPriceMenuItem(item.label, item.key, item.ref)
        )}
        mode='inline'
        className={styles.sideMenu}
      />
      <div className={styles.price}>
        {items.map((item) => (
          <PriceItem {...item} columns={columns} key={uuidv4()} />
        ))}
      </div>
      {showScroll && (
        <Button className={styles.scrollTop} onClick={scrollToTop}>
          Наверх
        </Button>
      )}
    </div>
  );
};
