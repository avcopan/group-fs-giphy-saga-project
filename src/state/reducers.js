import { combineReducers } from 'redux';

export function favoritesReducer(state = [], action) {
  if (action.type === 'SET_FAVORITES') {
    return action.payload;
  }
  return state;
}

export function categoriesReducer(state = [], action) {
  if (action.type === 'SET_CATEGORIES') {
    return action.payload;
  }
  return state;
}

const rootReducer = combineReducers({
  favorites: favoritesReducer,
  categories: categoriesReducer,
});

export default rootReducer;
