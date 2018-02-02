/**
*
* Question
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import he from 'he';
import QuestionBox from './QuestionBox';

function Question(props) {
  const question = he.unescape(props.question);
  return (
    <div>
      <QuestionBox>
        <div>{question}</div>
      </QuestionBox>
    </div>
  );
}
Question.propTypes = {
  question: PropTypes.string,
};

export default Question;
