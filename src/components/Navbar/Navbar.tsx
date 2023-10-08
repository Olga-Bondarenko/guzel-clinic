import { Menu } from 'antd';

import styles from './Navbar.module.scss';
import { useNavigate } from 'react-router-dom';
import { FC } from 'react';

import { services } from '../../data/services';

interface NavbarProps {
  mode: 'horizontal' | 'inline';
  onClose?: () => void;
}

export const Navbar: FC<NavbarProps> = ({ mode, onClose }) => {
  const navigate = useNavigate();

  const handleMenuClick = (path: string) => {
    navigate(path);
    // onClose && onClose();
  };

  const allServices = services.map((service) => {
    const { title, slug, children } = service;

    const childServices = children?.map((child) => {
      // const { title, slug } = child;
      return {
        label: child.title,
        key: child.slug,
        onClick: () => handleMenuClick(`services/${slug}/${child.slug}`),
      };
    });

    return {
      label: title,
      key: slug,
      children: childServices,
    };
  });

  const items = [
    { label: 'Главная', key: 'home', onClick: () => handleMenuClick('/') },
    {
      label: 'Услуги',
      key: 'services',
      onClick: () => handleMenuClick('/all-services'),
      // children: [
      //   {
      //     label: 'Все услуги',
      //     key: 'all',
      //     onClick: () => handleMenuClick('/all-services'),
      //   },
      //   ...allServices,
      // ],
    },
    {
      label: 'О нас',
      key: 'about',
      onClick: () => handleMenuClick('/about'),
    },
    {
      label: 'Прайс',
      key: 'price-list',
      onClick: () => handleMenuClick('/price-list'),
    },
    {
      label: 'Контакты',
      key: 'contact',
      onClick: () => handleMenuClick('/contacts'),
    },
  ];

  return <Menu items={items} mode={mode}
    className={styles.menu}
  />
    
   
};
