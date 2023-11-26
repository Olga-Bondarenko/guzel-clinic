import { Link } from 'react-router-dom';
import { FC } from 'react';

import styles from './SingleItemLink.module.scss';

interface SingleItemLinkProps {
  to: string;
  title: string;
  img: string;
  slug: string;
}

export const SingleItemLink: FC<SingleItemLinkProps> = ({
  to,
  title,
  img,
  slug,
}) => (
  <Link to={to} className={styles.root}>
    <img src={img} alt={slug} />
    <div className={styles.text}>{title}</div>
  </Link>
);
