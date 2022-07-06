import { createReducer } from '@reduxjs/toolkit';
import { locationCardsData } from '../../mock/mock';
import { LocationCardData } from '../../types/types';
import { addCard, deleteCard, setAsDefult } from './action';

type State = {
  cards: Array<LocationCardData>;
};

const initialState: State = {
  cards: locationCardsData,
};

export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(addCard, (state, action) => {
    if (action.payload.isDefault) {
      state.cards.forEach((card) => {
        card.isDefault = false;
      });
    }
    state.cards.push(action.payload);
  });

  builder.addCase(deleteCard, (state, action) => {
    const targetCard = state.cards[action.payload];

    state.cards = state.cards.filter((_, index) => index !== action.payload);

    if (targetCard.isDefault && state.cards.length) {
      state.cards[0].isDefault = true;
    }
  });

  builder.addCase(setAsDefult, (state, action) => {
    state.cards.forEach((card, index) => {
      card.isDefault = action.payload === index;
    });
  });
});
