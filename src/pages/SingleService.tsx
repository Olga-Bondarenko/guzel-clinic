import { useParams } from 'react-router-dom';
import { services } from '../data/services';

import styles from './Service.module.scss';


export const SingleService = () => {
  const params = useParams();
  const methods = services.find((item) => item.slug === params.service);
  const service = methods?.children?.find((item) => item.slug === params.slug);

  return service ? <div className={styles.singleService}>{service.title}</div> : <div>Not Found</div>;
};
