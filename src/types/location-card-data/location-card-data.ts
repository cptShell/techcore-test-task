import { User } from '../user/user';

export type LocationCardData = {
  isDefault: boolean;
  name: string;
  users: Array<User>;
};
