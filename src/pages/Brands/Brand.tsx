import { useParams } from 'react-router-dom';
import { brands } from '../../data/brands';

import { SingleServicesLink } from '../ServiceLayout/SingleServicesLink/SingleServicesLink';
import { MarkupWrapper } from '../../components/Markup';

export const Brand = () => {
  const params = useParams();

  const brand = brands.find((brand) => brand.slug === params.brand);

  return (
    <>
      {brand?.markup?.length && <MarkupWrapper markup={brand.markup} />}

      <div className='wrapper'>
        {brand?.children?.map((child) => (
          <SingleServicesLink
            key={child.slug}
            to={`/brands/${brand.slug}/${child.slug}`}
            title={child.title}
            img={child.img}
            slug={child.slug}
          />
        ))}
      </div>
    </>
  );
};
