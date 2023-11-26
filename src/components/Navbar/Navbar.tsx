import { Menu } from 'antd';

import styles from './Navbar.module.scss';
import { NavLink, useNavigate } from 'react-router-dom';
import { FC } from 'react';

import { services } from '../../data/services';

// interface NavbarProps {
//   mode: 'horizontal' | 'inline';
//   onClose?: () => void;
// }

export const Navbar = () => {
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

  // const items = [
  //   { label: 'Главная', key: 'home', onClick: () => handleMenuClick('/') },
  //   {
  //     label: 'Услуги',
  //     key: 'services',
  //     onClick: () => handleMenuClick('/all-services'),
  //     // children: [
  //     //   {
  //     //     label: 'Все услуги',
  //     //     key: 'all',
  //     //     onClick: () => handleMenuClick('/all-services'),
  //     //   },
  //     //   ...allServices,
  //     // ],
  //   },
  //   {
  //     label: 'О нас',
  //     key: 'about',
  //     onClick: () => handleMenuClick('/about'),
  //   },
  //   {
  //     label: 'Прайс',
  //     key: 'price-list',
  //     onClick: () => handleMenuClick('/price-list'),
  //   },
  //   {
  //     label: 'Контакты',
  //     key: 'contact',
  //     onClick: () => handleMenuClick('/contacts'),
  //   },
  // ];

  const menuItems = [
    {
      label: 'Главная',
      to: '.',
    },
    {
      label: 'Услуги',
      to: 'all-services',
    },
    // {
    //   label: 'Прeпараты',
    //   to: 'brands',
    // },
    {
      label: 'О нас',
      to: 'about',
    },
    {
      label: 'Прайс',
      to: 'price-list',
    },
    {
      label: 'Контакты',
      to: 'contacts',
    },
  ];

  return (
    <nav className={styles.root}>
      {menuItems.map((item, index) => (
        <NavLink key={index} to={item.to}>
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
};
