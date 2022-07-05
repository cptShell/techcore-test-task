import { FC } from 'react';
import { Logo } from './logo';
import dashboardSrc from '../../assets/icons/dashboard.svg';
import usersSrc from '../../assets/icons/users.svg';
import settingsSrc from '../../assets/icons/setting.svg';
import plSrc from '../../assets/icons/P&L.svg';
import vacationManagerSrc from '../../assets/icons/vacation-manager.svg';
import { NavigationItemData } from '../../types/navigation-item/navigation-item';
import { NavigationList } from './navigation-list';
import { UserContainer } from './user-container';
import style from './style.module.scss';

const navlistDto: Array<NavigationItemData> = [
  { description: 'dashboard', src: dashboardSrc },
  { description: 'users', src: usersSrc },
  { description: 'settings', src: settingsSrc },
  { description: 'P&L', src: plSrc },
  { description: 'vacation manager', src: vacationManagerSrc },
];

export const AppNavigation: FC = () => {
  return (
    <aside className={style['container']}>
      <Logo />
      <NavigationList navListDto={navlistDto} />
      <UserContainer />
    </aside>
  );
};
