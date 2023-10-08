import { Link } from 'react-router-dom';
import { FC } from 'react';

import styles from './Services.module.scss';

interface SingleServicesLinkProps {
  to: string;
  title: string;
  img: string;
  slug: string;
}

export const SingleServicesLink: FC<SingleServicesLinkProps> = ({
  to,
  title,
  img,
  slug,
}) => {
  return (
    <Link to={to} className={styles.root}>
      <img src={img} alt={slug} />
      <div>{title}</div>
    </Link>
  );
};
