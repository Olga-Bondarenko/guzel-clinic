import { useParams } from 'react-router-dom';
import { brands } from '../../data/brands';
import { MarkupWrapper } from '../../components/Markup';

export const Product = () => {
  const params = useParams();

  const brand = brands.find((brand) => brand.slug === params.brand);
  const product = brand?.children?.find(
    (product) => product.slug === params.product
  );

  return (
    <>{product?.markup?.length && <MarkupWrapper markup={product.markup} />}</>
  );
};
