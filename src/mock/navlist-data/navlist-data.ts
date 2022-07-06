import { ReactComponent as Dashboard } from '../../assets/icons/dashboard.svg';
import { ReactComponent as Users } from '../../assets/icons/users.svg';
import { ReactComponent as Settings } from '../../assets/icons/setting.svg';
import { ReactComponent as Pl } from '../../assets/icons/P&L.svg';
import { ReactComponent as VacationManager } from '../../assets/icons/vacation-manager.svg';
import { NavigationItemData } from '../../types/navigation-item/navigation-item';

export const navListData: Array<NavigationItemData> = [
  { description: 'dashboard', Icon: Dashboard },
  { description: 'users', Icon: Users },
  { description: 'settings', Icon: Settings, isActive: true },
  { description: 'P&L', Icon: Pl },
  { description: 'vacation manager', Icon: VacationManager },
];
