import { Button } from 'antd';
import { FC } from 'react';
import { ReactComponent as Warning } from '../../../assets/icons/warning.svg';
import styles from './style.module.scss';

type Props = {
  handleDelete: () => void;
  locationName: string;
};

export const DeleteLocation: FC<Props> = ({ handleDelete, locationName }) => {
  return (
    <div className={styles['delete-container']}>
      <div className={styles['delete-wrapper']}>
        <span className={styles['delete-title']}>Are you sure want to delete “{locationName}” Location? </span>
        <div className={styles['delete-description']}>
          <Warning />
          <span>
            Deleting a location might impact the users' configuration and leave information (e.g. the initial brought
            forward days).
          </span>
        </div>
      </div>
      <div className={styles['delete-panel']}>
        <Button type="primary" danger onClick={handleDelete}>
          Yes, Delete
        </Button>
      </div>
    </div>
  );
};
