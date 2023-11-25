import { services } from '../data/services';
import { SingleServicesLink } from './ServiceLayout/SingleServicesLink/SingleServicesLink';

import styles from './Service.module.scss';

export const Services = () => {
  return (
    <div className={styles.root}>
      <div className='wrapper'>
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
    </div>
  );
};
