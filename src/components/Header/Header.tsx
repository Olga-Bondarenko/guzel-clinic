import { FC, useState } from 'react';
import logo from '../../assets/logo.png';
import styles from './Header.module.scss';
import { Button } from 'antd';
import { MenuOutlined, PhoneOutlined } from '@ant-design/icons';
import { Navbar } from '../Navbar/Navbar';

interface HeaderProps {
  isMobile: boolean;
}

export const Header: FC<HeaderProps> = ({ isMobile }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <div className={styles.root}>
      <div className={styles.logo}>
        <img src={logo} alt='logo' />

        <span>
          PROFESSIONAL
          <br />
          COSMETOLOGY
          <br />
          BY DR. MURATOVA
        </span>
      </div>

      <div>
        Симферополь, ул. Беспалова
        <br />
        Пн - Сб: 09:00 - 20:00
      </div>

      <div className={styles.phone}>
        <PhoneOutlined />
        Call us: +7 978 107 7706
      </div>
    </div>
  );
};
