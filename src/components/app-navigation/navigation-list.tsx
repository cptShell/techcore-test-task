import { FC } from 'react';
import { NavigationItemData } from '../../types/navigation-item/navigation-item';
import { NavigationItem } from './navigation-item';
import styles from './style.module.scss';

type Props = {
  navListDto: Array<NavigationItemData>;
};

export const NavigationList: FC<Props> = ({ navListDto }) => {
  return (
    <div className={styles['navigation-list']}>
      {navListDto.map((item) => (
        <NavigationItem key={item.description} item={item} />
      ))}
    </div>
  );
};
