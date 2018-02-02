import {
  ANSWER_QUESTION,
  DEFAULT_ACTION,
  GET_QUIZ,
  PLAY_AGAIN,
  QUIZ_LOADED,
  QUIZ_LOADED_ERROR,
} from './constants';

export function answerQuestion(data) {
  return {
    type: ANSWER_QUESTION,
    payload: data,
  };
}

export function getQuiz(data) {
  return {
    type: GET_QUIZ,
    payload: data,
  };
}

export function playAgain() {
  return {
    type: PLAY_AGAIN,
  };
}

export function quizLoaded(data) {
  return {
    type: QUIZ_LOADED,
    payload: data,
  };
}

export function quizLoadedError(data) {
  return {
    type: QUIZ_LOADED_ERROR,
    payload: data,
  };
}

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
