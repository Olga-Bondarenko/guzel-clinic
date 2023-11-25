import { Menu } from 'antd';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { services } from '../../data/services';

import styles from './ServiceLayout.module.scss';

export const ServiceLayout = () => {
  const navigate = useNavigate();
  const params = useParams();
  const method = services.find((item) => item.slug === params.service) || {
    title: 'Лазерная косметология',
    slug: 'laser-cosmetology',
  };

  const handleMenuClick = (path: string) => {
    navigate(path);
    // onClose && onClose();
  };

  const items = services.map((service) => ({
    label: service.title,
    key: service.slug,
    // onClick: () => handleMenuClick(service.slug),
    children: service?.children?.map((child) => ({
      label: child.title,
      key: child.slug,
      onClick: () => {
        handleMenuClick(`${service.slug}/${child.slug}`);
      },
    })),
  }));
  return (
    <div className={styles.root}>
      <Menu
        items={items}
        mode='inline'
        className={styles.sideMenu}
        defaultOpenKeys={[method?.slug]}
      />
      <Outlet />
    </div>
  );
};
