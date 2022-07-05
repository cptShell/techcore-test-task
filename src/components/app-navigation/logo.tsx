import { FC } from 'react';
import logo from '../../assets/icons/logo.svg';
import styles from './style.module.scss';

export const Logo: FC = () => {
  return (
    <div className={styles['logo-container']}>
      <img src={logo} alt="logo" />
    </div>
  );
};
