
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectQuizContainer from './selectors';
import reducer from './reducer';
import saga from './saga';
import { getQuiz, answerQuestion, playAgain } from './actions';

import QuizIntro from '../QuizIntro';
import QuizQuestion from '../QuizQuestion';
import QuizResults from '../QuizResults';

export class QuizContainer extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  getQuiz = () => {
    this.props.getQuiz('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean');
  }

  answerQuestion = (answer, question) => {
    this.props.answerQuestion(answer, question);
  }

  playAgain = () => {
    this.props.playAgain();
    this.props.getQuiz('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean');
  }
  render() {
    const quizContainer = this.props.quizContainer;
    const quiz = quizContainer.quiz;
    const question = quizContainer.question || 0;
    const loaded = quizContainer.loaded;
    const inProgress = quizContainer.inProgress;
    const completed = quizContainer.completed;
    return (
      <div>
        <Helmet>
          <title>QuizContainer</title>
          <meta name="description" content="Description of QuizContainer" />
        </Helmet>
        {!loaded && <QuizIntro start={this.getQuiz} /> }
        { loaded && inProgress && !completed && <QuizQuestion quiz={quiz} question={question} answerQuestion={this.answerQuestion} />}
        { completed && <QuizResults quiz={quiz} playAgain={this.playAgain} /> }
      </div>
    );
  }
}

QuizContainer.propTypes = {
  answerQuestion: PropTypes.func.isRequired,
  getQuiz: PropTypes.func.isRequired,
  quizContainer: PropTypes.object.isRequired,
  playAgain: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  quizContainer: makeSelectQuizContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    answerQuestion: (answer, question) => dispatch(answerQuestion({ answer, question })),
    getQuiz: (url) => dispatch(getQuiz(url)),
    playAgain: () => dispatch(playAgain()),
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'quizContainer', reducer });
const withSaga = injectSaga({ key: 'quizContainer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(QuizContainer);
