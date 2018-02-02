/**
*
* Item
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import he from 'he';
import Wrapper from './Wrapper';
import UserAnswer from './UserAnswer';
import Question from './Question';

function Item(props) {
  const question = he.unescape(props.question);
  const correctAnswer = props.correct_answer === 'True';
  const isCorrect = correctAnswer === props.answer;
  return (
    <div>
      <Wrapper correct={isCorrect}>
        <UserAnswer>
          <div>{correctAnswer ? 'T' : 'F'}</div>
        </UserAnswer>
        <Question>
          <div>{question}</div>
        </Question>
      </Wrapper>
    </div>
  );
}

Item.propTypes = {
  correct_answer: PropTypes.string,
  answer: PropTypes.boolean,
  question: PropTypes.string,
};

export default Item;
