import { Button, Dropdown, Menu, Modal } from 'antd';
import { FC, useState } from 'react';
import { ReactComponent as Edit } from '../../../assets/icons/edit.svg';
import { ReactComponent as Star } from '../../../assets/icons/star.svg';
import { ReactComponent as Delete } from '../../../assets/icons/delete.svg';
import { ReactComponent as More } from '../../../assets/icons/more.svg';
import styles from './style.module.scss';
import { DeleteLocation } from './delete-location-form';

type Props = {
  handleSetDefault: () => void;
  handleDelete: () => void;
  locationName: string;
};

export const CardDropdown: FC<Props> = ({ handleSetDefault, handleDelete, locationName }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: 'Edit',
          icon: <Edit />,
        },
        {
          key: '2',
          label: 'Set as default',
          icon: <Star />,
          onClick: handleSetDefault,
        },
        {
          key: '3',
          label: 'Delete',
          icon: <Delete />,
          onClick: handleOpen,
        },
      ]}
    />
  );

  return (
    <div className={styles['dropdown-container']}>
      <Dropdown overlay={menu} placement="bottomRight">
        <Button type="text">
          <div className={styles['dropdown-icon']}>
            <More />
          </div>
        </Button>
      </Dropdown>
      <Modal width={420} footer={[]} title="Delete Location" visible={isOpen} onOk={handleClose} onCancel={handleClose}>
        <DeleteLocation
          handleDelete={() => {
            handleDelete();
            handleClose();
          }}
          locationName={locationName}
        />
      </Modal>
    </div>
  );
};
