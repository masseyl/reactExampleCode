/**
 *
 * QuizQuestion
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import Header from './components/Header';
import Question from './components/Question/index';
import Counter from './components/Counter';
import Answer from './components/Answer';
import Section from './components/Section';
import Footer from './components/Footer';

export default class QuizQuestion extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  theAnswer = (answer) => {
    this.props.answerQuestion(answer, this.props.question);
  }

  render() {
    const idx = this.props.question;
    const question = this.props.quiz[idx];
    return (
      <div>
        <Section>
          <Header>
            <div>{question.category}</div>
          </Header>
          <Question question={question.question} />
          <Footer>
            <Counter x={idx + 1} y={this.props.quiz.length} />
            <Answer answer={this.theAnswer} />
          </Footer>
        </Section>
      </div>
    );
  }
}

QuizQuestion.propTypes = {
  question: PropTypes.object,
  quiz: PropTypes.shape({
    length: PropTypes.number,
  }),
  answerQuestion: PropTypes.func,
};
