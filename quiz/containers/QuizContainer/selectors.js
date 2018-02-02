import { createSelector } from 'reselect';

const selectQuizContainerDomain = (state) => state.get('quizContainer');

const makeSelectQuizContainer = () => createSelector(
  selectQuizContainerDomain,
  (substate) => substate.toJS()
);

export default makeSelectQuizContainer;
export {
  selectQuizContainerDomain,
};
