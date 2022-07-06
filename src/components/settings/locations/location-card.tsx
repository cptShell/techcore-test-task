import { Card } from 'antd';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { deleteCard, setAsDefult } from '../../../store/location/action';
import { LocationCardData } from '../../../types/types';
import { CardDropdown } from './card-dropdown';
import styles from './style.module.scss';

type Props = {
  item: LocationCardData;
  index: number;
};

export const LocationCard: FC<Props> = ({ item, index }) => {
  const dispatch = useDispatch();
  const { isDefault, name, users } = item;
  const badgesMaxCount = 7;
  const badgeList = users.slice(0, badgesMaxCount);
  const userListPostfix = Math.max(users.length - badgesMaxCount, 0);

  const handleSetDefault = () => {
    dispatch(setAsDefult(index));
  };

  const handleDelete = () => {
    dispatch(deleteCard(index));
  };

  return (
    <Card
      bodyStyle={{
        padding: '20px',
        height: '100%',
      }}
      style={{ borderRadius: '12px' }}
      className={styles['location-card']}
    >
      <div className={styles['card-body']}>
        <div className={styles['card-heading']}>
          <h3 className={styles['card-title']}>{name}</h3>
          {isDefault && <span className={styles['default']}>default</span>}
        </div>
        <div className={styles['card-options']}>
          <span className={styles['option-title']}>Holidays</span>
          <span className={styles['option-description']}>View Holidays</span>
          <span className={styles['option-title']}>Leave Polices</span>
          <span className={styles['option-description']}>View Leave Policies</span>
        </div>
        <div className={styles['user-list']}>
          {badgeList.map(({ name, color }) => {
            const abbreviature = name.slice(0, 2).toUpperCase();

            return (
              <span key={name} style={{ background: color }} className={styles['user-item']}>
                {abbreviature}
              </span>
            );
          })}
          {userListPostfix !== 0 && <span className={styles['user-postfix']}>+{userListPostfix}</span>}
        </div>
      </div>
      <CardDropdown handleSetDefault={handleSetDefault} handleDelete={handleDelete} locationName={item.name} />
    </Card>
  );
};
