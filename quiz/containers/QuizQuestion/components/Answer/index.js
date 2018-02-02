/**
*
* Answer
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Button from '../Button';
import Span from './Span';

function Answer(props) {
  return (
    <div>
      <Button
        onClick={(evt) => {
          evt.stopPropagation();
          evt.preventDefault();
          return props.answer(true);
        }}
      >
        <FormattedMessage {...messages.true} />
      </Button>
      <Span>
        <FormattedMessage {...messages.or} />
      </Span>
      <Button
        onClick={(evt) => {
          evt.stopPropagation();
          evt.preventDefault();
          return props.answer(false);
        }}
      >
        <FormattedMessage {...messages.false} />
      </Button>
    </div>
  );
}

Answer.propTypes = {
  answer: PropTypes.string,
};

export default Answer;
