import { uniqueNamesGenerator, names, animals, colors } from 'unique-names-generator';
import { User } from '../../types/types';

export const getRandomUser = (): User => {
  const name = uniqueNamesGenerator({
    dictionaries: [names, animals], // colors can be omitted here as not used
    style: 'capital',
  });
  const color = uniqueNamesGenerator({
    dictionaries: [colors],
  });

  return {
    name,
    color,
  };
};
