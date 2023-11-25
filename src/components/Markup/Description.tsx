import { FC } from 'react';
import { DescriptionItem } from '../../types/types';
import styles from './Description.module.scss';

interface DescriptionProps {
  item: DescriptionItem;
}

export const Description: FC<DescriptionProps> = ({ item }) => (
  <div className={styles.root} key={item.title}>
    <img src={item.img} alt={item.title} />
    <div>
      <h4>{item.title}</h4>
      {item.content.map((paragraph) => (
        <p>{paragraph}</p>
      ))}
    </div>
  </div>
);
