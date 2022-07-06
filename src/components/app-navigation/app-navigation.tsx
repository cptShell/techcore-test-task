import { FC } from 'react';
import { Logo } from './logo';
import { NavigationList } from './navigation-list';
import { UserContainer } from './user-container';
import style from './style.module.scss';
import { navListData } from '../../mock/mock';

export const AppNavigation: FC = () => {
  return (
    <aside className={style['container']}>
      <Logo />
      <NavigationList navListData={navListData} />
      <UserContainer />
    </aside>
  );
};
