import { SettingsNavigation } from './settings-navigation';
import { Locations } from './locations/locations';
import { Breadcrumbs } from '../breadcrumbs/breadcrumbs';
import { mockPath } from '../../mock/mock';
import styles from './style.module.scss';

export const Settings = () => {
  return (
    <div className={styles['settings']}>
      <SettingsNavigation />
      <div className={styles['content-container']}>
        <Breadcrumbs items={mockPath} />
        <Locations />
      </div>
    </div>
  );
};
