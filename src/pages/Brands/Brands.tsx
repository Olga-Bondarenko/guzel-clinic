import { FC } from 'react';
import { brands } from '../../data/brands';
import { SingleItemLink } from '../../components/SingleItemLink';

export const Brands: FC = () => {
  return (
    <div className='wrapper'>
      {brands.map((brand) => (
        <SingleItemLink
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
