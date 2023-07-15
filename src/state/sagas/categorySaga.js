import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* getCategoriesSaga() {
  try {
    const response = yield axios.get('/api/category');
    const categories = yield response.data;
    console.log(categories);
    yield put({ type: 'SET_CATEGORIES', payload: categories });
  } catch (error) {
    console.error(error);
  }
}

export default function* categorySaga() {
  yield takeEvery('GET_CATEGORIES', getCategoriesSaga);
}
