import clsx from 'clsx';
import { FC } from 'react';
import notification from '../../assets/icons/notification.svg';
import styles from './style.module.scss';

type User = {
  name: string;
  avatarSrc?: string;
  hasNotification: boolean;
};

const currentUser: User = {
  name: 'Zhenya',
  hasNotification: true,
};

export const Avatar = () => {
  return;
};

export const UserContainer: FC = () => {
  const { name, hasNotification } = currentUser;
  const abbreviature = name.slice(0, 2);

  return (
    <div className={styles['user-container']}>
      <div
        className={clsx(styles['notification'], {
          [styles['notification__active']]: hasNotification,
        })}
      >
        <img src={notification} alt="notification" />
      </div>
      <div className={styles['avatar']}>
        <span>{abbreviature}</span>
      </div>
    </div>
  );
};
