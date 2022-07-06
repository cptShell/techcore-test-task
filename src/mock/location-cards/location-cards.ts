import { getUserList } from '../../helpers/helpers';
import { LocationCardData } from '../../types/types';

export const locationCardsData: Array<LocationCardData> = [
  {
    name: 'Australia',
    isDefault: true,
    users: getUserList(),
  },
  {
    name: 'Belarus',
    isDefault: false,
    users: getUserList(),
  },
  {
    name: 'USA',
    isDefault: false,
    users: getUserList(),
  },
];
