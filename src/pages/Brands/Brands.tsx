import { FC } from 'react';
import { brands } from '../../data/brands';
import { SingleServicesLink } from '../ServiceLayout/SingleServicesLink/SingleServicesLink';

export const Brands: FC = () => {
  return (
    <div className='wrapper'>
      {brands.map((brand) => (
        <SingleServicesLink
          key={brand.slug}
          to={`/brands/${brand.slug}`}
          title={brand.title}
          img={brand.img}
          slug={brand.slug}
        />
      ))}
    </div>
  );
};
