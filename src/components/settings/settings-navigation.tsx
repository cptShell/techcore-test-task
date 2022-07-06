import { FC, useState } from 'react';
import { Menu, MenuProps } from 'antd';
import { ReactComponent as SettingsIcon } from '../../assets/icons/settings-2.svg';
import { ReactComponent as VacationIcon } from '../../assets/icons/vacation-manager.svg';
import styles from './style.module.scss';

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
        items={[
          {
            label: <span style={{ fontSize: '14px', fontWeight: '500' }}>General</span>,
            key: '1',
            icon: <SettingsIcon width={14} />,
          },
          {
            label: <span style={{ fontSize: '14px', fontWeight: '500' }}>Vacation Manager</span>,
            key: '2',
            icon: <VacationIcon width={14} />,
            children: [
              { label: <span style={{ fontSize: '13px', fontWeight: '400' }}>Leave Types</span>, key: '3' },
              { label: <span style={{ fontSize: '13px', fontWeight: '400' }}>Locations</span>, key: '4' },
            ],
          },
        ]}
        style={{ background: 'none', border: 'none', color: 'var(--grey-2)' }}
        mode="inline"
        defaultOpenKeys={['4']}
        selectedKeys={[current]}
      />
    </div>
  );
};
