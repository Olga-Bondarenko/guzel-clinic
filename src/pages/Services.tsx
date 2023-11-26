import { SingleItemLink } from '../components/SingleItemLink';
import { services } from '../data/services';

import styles from './Service.module.scss';

export const Services = () => {
  return (
    <div className={styles.root}>
      <div className='wrapper'>
        {services.map((service) => (
          <SingleItemLink
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
