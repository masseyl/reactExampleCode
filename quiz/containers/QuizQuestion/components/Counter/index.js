/**
*
* Counter
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Span from './Span';

function Counter(props) {
  return (
    <div>
      <Span>
        {props.x}
      </Span>
      <Span>
        <FormattedMessage {...messages.of} />
      </Span>
      <Span>
        {props.y}
      </Span>
    </div>
  );
}

Counter.propTypes = {
  x: PropTypes.integer,
  y: PropTypes.integer,
};

export default Counter;
