import {
  CHANGE_NUMBER_OF_PAIRS,
  SHUFFLE,
  LIMIT_CARDS,
  DUPLICATE_CARDS,
  RESET_CARDS,
  START_GAME,
  FLIP_ALL_CARDS,
  FLIP_CARD,
  CHANGE_WIDTH,
  RESET_GAME,
} from "../constants/action-types";
import { HYDRATE } from "next-redux-wrapper";
import { flipCard } from "../actions";

const clone = require("rfdc")();

const initialState = {
  width: 127,
  numberOfPairs: 6,
  numberOfFoundPairs: 0,
  numberOfAttempts: 0,
  isLoading: true,
  clickCounter: 0,
  matching: false,
  matchingCard: null,
  cards: [
    {
      src: "/images/pair-1.jpg",
      isActive: false,
    },
    {
      src: "/images/pair-2.jpg",
      isActive: false,
    },
    {
      src: "/images/pair-3.jpg",
      isActive: false,
    },
    {
      src: "/images/pair-4.jpg",
      isActive: false,
    },
    {
      src: "/images/pair-5.jpg",
      isActive: false,
    },
    {
      src: "/images/pair-6.jpg",
      isActive: false,
    },
    {
      src: "/images/pair-7.jpg",
      isActive: false,
    },
    {
      src: "/images/pair-8.jpg",
      isActive: false,
    },
    {
      src: "/images/pair-9.jpg",
      isActive: false,
    },
    {
      src: "/images/pair-10.jpg",
      isActive: false,
    },
    {
      src: "/images/pair-11.jpg",
      isActive: false,
    },
    {
      src: "/images/pair-12.jpg",
      isActive: false,
    },
    {
      src: "/images/pair-13.jpg",
      isActive: false,
    },
    {
      src: "/images/pair-14.jpg",
      isActive: false,
    },
    {
      src: "/images/pair-15.jpg",
      isActive: false,
    },
    {
      src: "/images/pair-16.jpg",
      isActive: false,
    },
    {
      src: "/images/pair-17.jpg",
      isActive: false,
    },
    {
      src: "/images/pair-18.jpg",
      isActive: false,
    },
    {
      src: "/images/pair-19.jpg",
      isActive: false,
    },
    {
      src: "/images/pair-20.jpg",
      isActive: false,
    },
    {
      src: "/images/pair-21.jpg",
      isActive: false,
    },
  ],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
      break;
    case CHANGE_NUMBER_OF_PAIRS:
      let numberOfPairs = action.payload;
      return Object.assign({}, state, {
        numberOfPairs,
      });
      break;
    case CHANGE_WIDTH:
      let width = action.payload;
      return Object.assign({}, state, {
        width,
      });
      break;
    case RESET_GAME:
      {
        let numberOfPairs = state.numberOfPairs;
        return Object.assign({}, initialState, { numberOfPairs });
      }
      break;
    case START_GAME:
      return Object.assign({}, state, { isPlaying: true });
      break;
    case RESET_CARDS:
      let initialCards = initialState.cards;

      return Object.assign({}, state, { cards: initialCards });
      break;
    case SHUFFLE:
      let array = state.cards;
      let len = array.length - 1;
      for (let i = len; i > 0; i--) {
        const j = Math.floor(Math.random() * i);
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      return Object.assign({}, state, { cards: [...array] });
      break;
    case LIMIT_CARDS:
      let limitedCards = state.cards;

      limitedCards.splice(state.numberOfPairs);

      return Object.assign({}, state, { cards: [...limitedCards] });
      break;
    case DUPLICATE_CARDS:
      let duplicatedCards1 = clone(state.cards);
      let duplicatedCards2 = clone(state.cards);

      let newDuplicatedCards = [...duplicatedCards1, ...duplicatedCards2];
      newDuplicatedCards.forEach((el, index) => {
        el.index = index;
        el.isActive = true;
        el.match = false;
      });

      return Object.assign({}, state, {
        cards: newDuplicatedCards,
      });
      break;
    case FLIP_ALL_CARDS:
      let flipedCards = state.cards;
      flipedCards.forEach((el, index) => {
        if (el.match === false) {
          el.isActive = false;
        } else if (el.match === true) {
          el.timed = false;
        }
      });
      return Object.assign({}, state, {
        cards: [...flipedCards],
        matching: false,
        isPlaying: true,
      });
    case FLIP_CARD:
      let flippedCardIndex = state.cards.findIndex(
        (el) => el.index === action.payload
      );

      let numberOfFoundPairs = state.numberOfFoundPairs;

      let allCards = clone(state.cards);
      // flip first card and remember it
      if (state.clickCounter === 0) {
        let newCounter = state.clickCounter;
        newCounter++;

        let allCards = clone(state.cards);

        allCards.forEach((el) => {
          if (el.index === action.payload) {
            el.isActive = true;
          }
        });

        let firstFlippedCard = allCards[flippedCardIndex];
        return Object.assign({}, state, {
          cards: [...allCards],
          clickCounter: newCounter,
          matchingCard: firstFlippedCard,
        });
      } else if (state.clickCounter === 1) {
        let newCounter = 0;
        let numberOfAttempts = state.numberOfAttempts;
        numberOfAttempts++;

        // flip Second Card
        allCards.forEach((el) => {
          if (el.index === action.payload) {
            el.isActive = true;
          }
        });

        // does the two cards match ?
        if (state.matchingCard.src === allCards[flippedCardIndex].src) {
          allCards.forEach((el) => {
            if (el.src === state.matchingCard.src) {
              el.match = true;
              el.isActive = false;
              el.timed = true;
            }
          });

          numberOfFoundPairs++;
        }

        return Object.assign({}, state, {
          cards: [...allCards],
          clickCounter: newCounter,
          matching: true,
          matchingCard: initialState.matchingCard,
          numberOfFoundPairs,
          numberOfAttempts,
          isPlaying: false,
        });
      }

      // flip second card and change match:true for both

      break;
    default:
      return state;
  }
}

export default rootReducer;
