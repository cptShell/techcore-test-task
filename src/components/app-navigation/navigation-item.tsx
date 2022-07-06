import { FC } from 'react';
import { NavigationItemData } from '../../types/navigation-item/navigation-item';
import styles from './style.module.scss';

type Props = {
  item: NavigationItemData;
};

export const NavigationItem: FC<Props> = ({ item }) => {
  const { Icon, description, isActive } = item;

  return (
    <div className={styles['navigation-item']} style={{ color: isActive ? 'var(--blue-100)' : undefined }}>
      <Icon className={styles['navigation-item__icon']} />
      <span className={styles['navigation-item__description']}>{description}</span>
    </div>
  );
};
