import { SettingsNavigation } from './settings-navigation';
import styles from './style.module.scss';
import { Locations } from './locations';
import { Breadcrumbs } from '../breadcrumbs/breadcrumbs';
import { mockPath } from '../../mock/mock-path';

export const Settings = () => {
  return (
    <div className={styles['settings-container']}>
      <SettingsNavigation />
      <div>
        <Breadcrumbs items={mockPath} />
        <Locations />
      </div>
    </div>
  );
};
