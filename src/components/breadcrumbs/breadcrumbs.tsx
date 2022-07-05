import { Breadcrumb } from 'antd';
import { FC } from 'react';
import { BreadcrumbItem } from '../../types/types';
import styles from './style.module.scss';

type Props = {
  items: Array<BreadcrumbItem>;
};

export const Breadcrumbs: FC<Props> = ({ items }) => {
  return (
    <Breadcrumb separator=">">
      {items.map(({ label, Icon }) => (
        <Breadcrumb.Item className={styles['bread-crumb-item']} key={label}>
          {Icon && <Icon />}
          {label}
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};
