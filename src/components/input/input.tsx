import { Form, Select as UISelect } from 'antd';
import { FC } from 'react';
import styles from './style.module.scss';

const { Option } = UISelect;

type Props = {
  required: boolean;
  title: string;
  name: string;
  options: Array<{
    label: string;
    value: string;
  }>;
  width?: string;
  isMultiple?: boolean;
};

export const Select: FC<Props> = ({ required, title, name, options, width = '100%', isMultiple = false }) => {
  return (
    <Form.Item style={{ width, position: 'relative', marginBottom: 0 }}>
      <span className={styles['select-title']}>
        {title}
        {required && <span style={{ color: 'red' }}>*</span>}
      </span>
      <UISelect mode={isMultiple ? 'multiple' : undefined}>
        {options.map(({ label, value }) => (
          <Option key={value} value={value}>
            <span style={{ fontWeight: '400', fontSize: '13px' }}>{label}</span>
          </Option>
        ))}
      </UISelect>
    </Form.Item>
  );
};
