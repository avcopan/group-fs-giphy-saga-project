import { combineReducers } from 'redux';

export function favoritesReducer(state = [], action) {
  if (action.type === 'SET_FAVORITES') {
    return action.payload;
  }
  return state;
}

const rootReducer = combineReducers({
  favorites: favoritesReducer,
});

export default rootReducer;