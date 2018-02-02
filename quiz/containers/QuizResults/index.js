/**
 *
 * QuizResults
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import messages from './messages';
import Answers from './components/Answers';
import Section from './components/Section';
import Footer from './components/Footer';
import Item from './components/Item';
import Header from './components/Header';
import Span from './components/Span';
import Button from './components/Button';
export default class QuizResults extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      numCorrect: 0,
    };
  }
  componentWillMount() {
    const quiz = this.props.quiz;
    const total = quiz.length;
    let numCorrect = 0;
    quiz.forEach((item) => {
      const correctAnswer = item.correct_answer === 'True';
      if (correctAnswer === item.answer) numCorrect += 1;
    });

    this.setState({
      total,
      numCorrect,
    });
  }

  render() {
    const quiz = this.props.quiz;
    return (
      <div>
        <Section>
          <Header>
            <Span>
              <FormattedMessage {...messages.header} />
            </Span>
            <div>
              <Span>
                {this.state.numCorrect}
              </Span>
              <Span>
                <Span>
                  /
                </Span>
                {this.state.total}
              </Span>
            </div>
          </Header>
          <Answers>
            {quiz.map((question) => <Item {...question} key={question.question} />)}
          </Answers>
          <Footer>
            <Button onClick={this.props.playAgain}>
              <FormattedMessage {...messages.playAgain} />
            </Button>
          </Footer>
        </Section>
      </div>
    );
  }
}

QuizResults.propTypes = {
  playAgain: PropTypes.func,
  quiz: PropTypes.array,
};
