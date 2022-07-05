import { FC, useState } from 'react';
import styles from './style.module.scss';
import { ReactComponent as SettingsIcon } from '../../assets/icons/settings-2.svg';
import { ReactComponent as VacationIcon } from '../../assets/icons/vacation-manager.svg';
import { Menu, MenuProps } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

const getItem = (
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem => {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
};

const items: Array<MenuItem> = [
  getItem('Option 5', '5', <SettingsIcon />),
  getItem('Option 6', '6', <VacationIcon />, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
];

export const SettingsNavigation: FC = () => {
  const [current, setCurrent] = useState('8');

  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
  };

  return (
    <div className={styles['navigation-container']}>
      <h2 className={styles['heading']}>Settings</h2>
      <Menu
        onClick={onClick}
        items={items}
        style={{ background: 'none', border: 'none', color: 'var(--grey-2)' }}
        mode="inline"
        defaultOpenKeys={['6']}
        selectedKeys={[current]}
      />
    </div>
  );
};
