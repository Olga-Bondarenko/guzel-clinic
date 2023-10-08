import { Breadcrumb } from 'antd';
import { Link, useLocation } from 'react-router-dom';

const breadcrumbNameMap: Record<string, string> = {
  '/about': 'О нас',
  '/services': 'Услуги',
  '/services/laser-cosmetology': 'Лазер',
};

export const Breadcrumps = () => {
  const location = useLocation();


  const pathSnippets = location.pathname.split('/').filter((i) => i);

  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    return {
      key: url,
      title: <Link to={url}>{breadcrumbNameMap[url]}</Link>,
    };
  });

  const breadcrumbItems = [
    {
      title: <Link to='/'>Home</Link>,
      key: 'home',
    },
  ].concat(extraBreadcrumbItems);
  return <Breadcrumb items={breadcrumbItems} />;
};
