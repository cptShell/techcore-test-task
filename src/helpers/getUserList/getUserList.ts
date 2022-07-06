import { User } from '../../types/types';
import { getRandomUser } from '../getRandomUser/getRandomUser';

export const getUserList = (): Array<User> => {
  const randomCount = Math.floor(Math.random() * 100);

  return new Array(randomCount).fill(null).map(getRandomUser);
};
