/*
*
* QuizContainer reducer
*
*/

import { fromJS } from 'immutable';
import {
  ANSWER_QUESTION,
  DEFAULT_ACTION,
  GET_QUIZ,
  PLAY_AGAIN,
  QUIZ_LOADED,
  QUIZ_LOADED_ERROR,
} from './constants';

const initialState = fromJS({
  completed: false,
  loading: false,
  loaded: false,
  quiz: fromJS([]),
  quizLength: 0,
  question: 0,
  result: null,
  inProgress: false,
});

function quizContainerReducer(state = initialState, action) {
  let answer;
  let question;
  let completed;

  switch (action.type) {
    case ANSWER_QUESTION:
      answer = action.payload.answer;
      question = action.payload.question;
      completed = false;
      if (question + 1 >= state.get('quizLength')) {
        completed = true;
        state.set('inProgress', false);
      }
      return state.setIn(['quiz', question, 'answer'], answer)
    .set('question', question + 1)
    .set('completed', completed);

    case GET_QUIZ:
      return state
    .set('loading', true);

    case PLAY_AGAIN:
      return state
    .set('question', 0)
    .set('quiz', fromJS([]))
    .set('quizLength', 0)
    .set('loading', false)
    .set('completed', false);

    case QUIZ_LOADED:
      return state
    .set('quiz', fromJS(action.payload.results))
    .set('quizLength', action.payload.results.length)
    .set('loading', false)
    .set('loaded', true)
    .set('inProgress', true);

    case QUIZ_LOADED_ERROR:
      return state;

    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default quizContainerReducer;
