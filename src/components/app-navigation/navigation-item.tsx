import { FC } from 'react';
import { NavigationItemData } from '../../types/navigation-item/navigation-item';
import styles from './style.module.scss';

type Props = {
  item: NavigationItemData;
};

export const NavigationItem: FC<Props> = ({ item }) => {
  const { src, description } = item;

  return (
    <div className={styles['navigation-item']}>
      <img className={styles['navigation-item__icon']} src={src} alt={description} />
      <span className={styles['navigation-item__description']}>{description}</span>
    </div>
  );
};
