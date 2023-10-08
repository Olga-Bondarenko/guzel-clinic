import { FC, useState } from 'react';
import logo from '../../assets/logo.png';
import styles from './Header.module.scss';
import { Button } from 'antd';
import { MenuOutlined, PhoneOutlined  } from '@ant-design/icons';
import { Navbar } from '../Navbar/Navbar';
// import { VerticalMenu } from "../VerticalMenu/VerticalMenu";

interface HeaderProps {
  isMobile: boolean;
}

export const Header: FC<HeaderProps> = ({ isMobile }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <>
      <div className={styles.root}>
        {!isMobile && (
          <div className={styles.header}>
            <div className={styles.logo}>
              <img src={logo} alt='logo' />
              <div className={styles.name}>
                <div>PROFESSIONAL</div>
                <div>COSMETOLOGY</div>
                <div>BY DR. MURATOVA</div>
              </div>
            </div>

            <div>Симферополь, ул. Беспалова</div>
            <div className={styles.address}>
              <PhoneOutlined />
              Call us: +7 978 107 7706
            </div>

            
          </div>
        )}
        <Navbar mode='horizontal' />
      </div>
      {isMobile && (
        <Button
          type='text'
          icon={<MenuOutlined />}
          onClick={() => setMenuVisible(!menuVisible)}
        />
      )}
      {/* <VerticalMenu
          isVisible={isMobile && menuVisible}
          onClose={() => setMenuVisible(false)}
        /> */}
    </>
  );
};
