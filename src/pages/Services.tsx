import { services } from '../data/services';
import { SingleServicesLink } from '../components/SingleServicesLink/SingleServicesLink';

import styles from './Pages.module.scss';

export const Services = () => {
  return (
    <div className={styles.serviceWrapper}>
      {services.map((service) => (
        <SingleServicesLink
          key={service.slug}
          to={`/services/${service.slug}`}
          title={service.title}
          img={service.img}
          slug={service.slug}
        />
      ))}
    </div>
  );
};
