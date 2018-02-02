
import { fromJS } from 'immutable';
import quizContainerReducer from '../reducer';

describe('quizContainerReducer', () => {
  it('returns the initial state', () => {
    expect(quizContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
