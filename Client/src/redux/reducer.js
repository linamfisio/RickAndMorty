import { ADD_FAVORITE, FIlTER_FAVORITE, ORDER_CARDS, REMOVE_FAVORITE } from "./actions-type";

let initialState = { myFavorites: [], allCharacter: [], filtered: [] };

export default function rootReducer(state = initialState, action) {
  switch (action.type) {

    // FORMA ANTES DE EXPRESS
    // case ADD_FAVORITE:
    //   return {
    //     ...state,
    //     myFavorites: [...state.myFavorites, action.payload],
    //   };

    case ADD_FAVORITE:
      if(!state.myFavorites.some(card => card.id === action.payload.id)){
        return {
          ...state,
          myFavorites: action.payload,
          allCharacters: action.payload,
        }
      }; break;
    // FORMA ANTES DE EXPRESS
    // case REMOVE_FAVORITE:
    //   return {
    //     ...state,
    //     myFavorites: state.myFavorites.filter((item) => item.id !== action.payload)
    //   };

    case REMOVE_FAVORITE:
      return { ...state, myFavorites: action.payload }

    case FIlTER_FAVORITE:
      if(!state.myFavorites.some(card => card.id === action.payload.id)){
        return {
          ...state,
          filtered: state.myFavorites.filter(
            (element) => element.gender === action.payload || action.payload === 'All'
          )
        }
      }; break;
    case ORDER_CARDS:
      let favoritesOrd = [...state.filtered]
      if(!state.myFavorites.some(card => card.id === action.payload.id)){
      return {
        ...state,
        filtered:
          action.payload === "A"
            ? favoritesOrd.sort((a, b) => a.id - b.id)
            : favoritesOrd.sort((a, b) => b.id - a.id)
      }
    }; break;
    default:
      return state
  }
}