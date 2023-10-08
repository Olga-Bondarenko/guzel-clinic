import { useParams } from 'react-router-dom';
import { services } from '../data/services';

import { Hardware, Laser, Injection } from './methods';


import styles from './Pages.module.scss';

export const Method = () => {
  const params = useParams();
  const method = services.find((item) => item.slug === params.service);

  const getMethodComponent = () => {
    if (method) {
      switch (method?.slug) {
        case 'hardware-cosmetology':
          return <Hardware services={method.children || []} />;
        case 'laser-cosmetology':
          return <Laser services={method.children || []} />;
        case 'injection-cosmetology':
          return <Injection services={method.children || []} />;
        default:
          return null;
      }
    }
    return <div>Not Found</div>;
  };
  return <div className={styles.root}>{getMethodComponent()}</div>;
};
