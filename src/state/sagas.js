import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";

function* getFavoritesSaga() {
  try {
    const response = yield axios.get("/api/favorite");
    const favoriteGifs = yield response.data;
    yield put({ type: "SET_FAVORITES", payload: favoriteGifs });
  } catch (error) {
    console.error(error);
  }
}

function* addFavoriteSaga(action) {
  try {
    yield axios.post("/api/favorite", action.payload);
    yield put({ type: "GET_FAVORITES" });
  } catch (error) {
    console.error(error);
  }
}

function* removeFavoriteSaga(action) {
  try {
    yield axios.delete(`/api/favorite/${action.payload}`);
    yield put({ type: "GET_FAVORITES" });
  } catch (error) {
    console.error(error);
  }
}

export default function* rootSaga() {
  yield takeEvery("GET_FAVORITES", getFavoritesSaga);
  yield takeEvery("ADD_FAVORITE", addFavoriteSaga);
  yield takeEvery("REMOVE_FAVORITE", removeFavoriteSaga);
}
