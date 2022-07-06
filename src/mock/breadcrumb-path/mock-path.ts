import { BreadcrumbItem } from '../../types/types';
import { ReactComponent as SettingsIcon } from '../../assets/icons/setting.svg';

export const mockPath: Array<BreadcrumbItem> = [
  { Icon: SettingsIcon, label: 'Settings' },
  { label: 'Vacation Manager' },
];
