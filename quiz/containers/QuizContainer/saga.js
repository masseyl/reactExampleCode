import { takeLatest, call, put } from 'redux-saga/effects';
import { quizLoaded, quizLoadedError } from './actions';
import { GET_QUIZ } from './constants';
import { request } from './api';

export function* getQuiz(action) {
  // Select username from store
  const requestURL = action.payload;
  const url = requestURL;
  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  };
  try {
    // Call our request helper (see 'utils/request')
    const quiz = yield call(request, url, options);
    if (quiz && quiz.json) {
      const json = yield quiz.json();
      yield put(quizLoaded(json));
    } else {
      yield put(quizLoadedError('No JSON'));
    }
  } catch (err) {
    yield put(quizLoadedError(err || 'Loading error'));
  }
}
// Individual exports for testing
export default function* defaultSaga() {
  yield takeLatest(GET_QUIZ, getQuiz);
}
