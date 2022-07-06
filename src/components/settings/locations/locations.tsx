import { Button, Modal } from 'antd';
import { FC, useState } from 'react';
import { useAppSelector } from '../../../hook/use-app-selector';
import { CreateLocationForm } from './create-location-form';
import { LocationCard } from './location-card';
import styles from './style.module.scss';

export const Locations: FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { cards } = useAppSelector((state) => state.location);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className={styles['locations']}>
      <div className={styles['heading']}>
        <div className={styles['locations-title']}>
          <h2>Locations</h2>
          <span>Create new users or update the existng users. You can then set their permissons here too.</span>
        </div>
        <Button onClick={showModal} type="primary">
          <span style={{ color: 'white' }}>Create Location</span>
        </Button>
      </div>
      <div className={styles['cards']}>
        {cards.map((item, index) => (
          <LocationCard key={`${item.name}-${index}`} item={item} index={index} />
        ))}
      </div>
      <Modal footer={[]} title="Create Location" visible={isModalVisible} onOk={handleCancel} onCancel={handleCancel}>
        <CreateLocationForm onCancel={handleCancel} />
      </Modal>
    </div>
  );
};
