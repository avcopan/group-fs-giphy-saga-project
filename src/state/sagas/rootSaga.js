import { all } from 'redux-saga/effects';
import favoriteSaga from './favoriteSaga';
import categorySaga from './categorySaga';

export default function* rootSaga() {
  yield all([favoriteSaga(), categorySaga()]);
}
