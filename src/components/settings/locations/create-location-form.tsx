import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Checkbox, Form, Input, Tooltip, Select as SelectUI } from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import { Select } from '../../input/input';
import { useAppSelector } from '../../../hook/use-app-selector';
import { LocationCardData, User } from '../../../types/types';
import { addCard } from '../../../store/location/action';
import { formButtonStyles } from '../../../helpers/helpers';
import { ReactComponent as Info } from '../../../assets/icons/info.svg';
import { ReactComponent as Warning } from '../../../assets/icons/warning.svg';
import styles from './style.module.scss';

type Props = {
  onCancel: () => void;
};

export const CreateLocationForm: FC<Props> = ({ onCancel }) => {
  const dispatch = useDispatch();
  const [countryName, setCountryName] = useState('');
  const [users, setUsers] = useState<Array<User>>([]);
  const [isDefault, setIsDefault] = useState(false);

  const { allExistedUsers } = useAppSelector((state) => ({
    allExistedUsers: state.location.cards.reduce((users, card) => users.concat(card.users), [] as Array<User>),
  }));

  const onFinish = () => {
    const payload: LocationCardData = {
      users,
      name: countryName,
      isDefault,
    };
    dispatch(addCard(payload));
    onCancel();
  };

  return (
    <Form className={styles['form']} title="Form" onFinish={onFinish}>
      <FormItem name="name" rules={[{ required: true }]}>
        <Input placeholder="Location Name" onChange={(e) => setCountryName(e.currentTarget.value)} />
      </FormItem>
      <FormItem name="workweek" rules={[{ required: true }]}>
        <div className={styles['week-container']}>
          <h3 className={styles['form-item-title']}>
            Workweek<span>*</span>
          </h3>
          <Checkbox.Group style={{ display: 'grid' }} className={styles['week-grid']}>
            {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day, index) => {
              return (
                <Checkbox key={day} style={{ marginLeft: 0 }} value={index}>
                  {day}
                </Checkbox>
              );
            })}
          </Checkbox.Group>
        </div>
      </FormItem>
      <div className={styles['select-container']}>
        <Select
          title="Leave Quote Reset Based On"
          required={false}
          name="basedOn"
          options={[
            { label: 'Accounting Year', value: 'Accounting Year' },
            { label: 'User Employment Date', value: 'User Employment Date' },
          ]}
        />
        <Tooltip
          style={{ position: 'absolute' }}
          title="This setting will determine if your leave balance will be reset based on the accounting year (company's fiscal year) or based on the employee's start date. Besides quotas, your roll-over policy will also be affected according to this setting."
        >
          <Info />
        </Tooltip>
      </div>
      <div className={styles['select-container']}>
        <Select
          title="Fiscal Year Start"
          required={false}
          name="fiscalMonth"
          options={[
            { label: 'December', value: 'December' },
            { label: 'January', value: 'January' },
            { label: 'February', value: 'February' },
            { label: 'March', value: 'March' },
            { label: 'April', value: 'April' },
            { label: 'May', value: 'May' },
            { label: 'June', value: 'June' },
            { label: 'July', value: 'July' },
            { label: 'August', value: 'August' },
            { label: 'September', value: 'September' },
            { label: 'October', value: 'October' },
            { label: 'November', value: 'November' },
          ]}
          width={'125px'}
        />
        <Input
          style={{ width: '80px', marginRight: 'auto' }}
          defaultValue={1}
          min={1}
          max={31}
          type={'number'}
          name="fiscalDay"
        />
      </div>
      <div className={styles['checkbox-container']}>
        <div className={styles['checkbox-label']}>
          <Checkbox name="NoBroughtForwardExpiryDate" onChange={(e) => setIsDefault(e.target.checked)} />
          <span>No Brought Forward Expiry Date</span>
        </div>
        <Tooltip title="Each year, the user's rolled over leaves will expire on the date you set. The quotas for each leave type are configured through the Leave Types section for this location and each can be set individually to allow or not allow roll overs.">
          <Info />
        </Tooltip>
      </div>
      <Select
        title="Fiscal Year Start"
        required={false}
        name="fiscalMonth"
        options={[
          { label: 'Sunday', value: 'Sunday' },
          { label: 'Monday', value: 'Monday' },
        ]}
        width={'145px'}
      />
      <div className={styles['select-container']}>
        <Select
          title="Time Zone"
          required={true}
          name="timeZone"
          options={[
            { label: '(GMT+02:00) Vilnus', value: '(GMT+02:00) Vilnus' },
            { label: '(GMT+03:00) Khartoum', value: '(GMT+03:00) Khartoum' },
            { label: '(GMT+03:00) Nairobi', value: '(GMT+03:00) Nairobi' },
            { label: '(GMT+03:00) Sayowa', value: '(GMT+03:00) Sayowa' },
            { label: '(GMT+03:00) Baghdad', value: '(GMT+03:00) Baghdad' },
            { label: '(GMT+03:00) Qatar', value: '(GMT+03:00) Qatar' },
            { label: '(GMT+03:00) Riyadh', value: '(GMT+03:00) Riyadh' },
            { label: '(GMT+03:00) Minsk', value: '(GMT+03:00) Minsk' },
          ]}
        />
        <Tooltip title="This default time zone is used throughout the system. For example for accurately displaying leave information in the calendar and for the system events listed in the Logs.">
          <Info />
        </Tooltip>
      </div>
      <div className={styles['users-container']}>
        <FormItem name="users" rules={[{ required: true }]}>
          <SelectUI
            style={{ width: '100%' }}
            placeholder="Add Users"
            mode="multiple"
            options={allExistedUsers.map(({ name }, index) => {
              return {
                value: String(index),
                label: name,
              };
            })}
            onChange={(userIndexList: Array<number>) => {
              const users = userIndexList.map((index) => allExistedUsers[index]);
              setUsers(users);
            }}
          />
        </FormItem>
        <div className={styles['warning-container']}>
          <Warning />
          <span>
            Adding or removing a user might impact the user's configuration and leave information (e.g. the initial
            brought forward days).
          </span>
        </div>
      </div>
      <div className={styles['checkbox-container']}>
        <div className={styles['checkbox-label']}>
          <Checkbox name="isDefault" onChange={(e) => setIsDefault(e.target.checked)} />
          <span>Make This Location Default</span>
        </div>
        <Tooltip title="Each year, the user's rolled over leaves will expire on the date you set. The quotas for each leave type are configured through the Leave Types section for this location and each can be set individually to allow or not allow roll overs.">
          <Info />
        </Tooltip>
      </div>
      <span className={styles['accept-message']}>
        Once you've created a Location, assign a <span>Leave Policy</span> to the Location, in order to enable Users to
        request Leave. To assign a Leave Policy, go to Location &gt Leave Policies &gt Assign Leave Policy.
      </span>

      <div className={styles['submit-panel']}>
        <Button
          style={{ ...formButtonStyles, background: 'var(--grey)' }}
          className={styles['cancel-button']}
          onClick={onCancel}
          type="ghost"
        >
          <span>Cancel</span>
        </Button>
        <Button
          htmlType="submit"
          style={{ ...formButtonStyles, background: 'var(--blue-100)' }}
          className={styles['submit-button']}
          type="primary"
        >
          <span>Create</span>
        </Button>
      </div>
    </Form>
  );
};
