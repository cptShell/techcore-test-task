import { createAction } from '@reduxjs/toolkit';
import { ActionType } from '../../enums/enums';
import { LocationCardData } from '../../types/types';

export const addCard = createAction<LocationCardData>(ActionType.ADD_CARD);
export const setAsDefult = createAction<number>(ActionType.SET_AS_DEFULT);
export const deleteCard = createAction<number>(ActionType.DELETE_CARD);
