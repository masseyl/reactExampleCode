/**
 *
 * QuizIntro
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import messages from './messages';
import Section from './components/Section';
import Title from './components/Title';
import Challenge from './components/Challenge';
import Instruction from './components/Instruction';
import Begin from './components/Begin';

export default function QuizIntro(props) {
  return (
    <div>
      <Section>
        <Title >
          <FormattedMessage {...messages.header} />
        </Title>
        <Instruction >
          <FormattedMessage {...messages.instruction} />
        </Instruction>
        <Challenge >
          <FormattedMessage {...messages.challenge} />
        </Challenge>
        <Begin onClick={props.start}>
          <FormattedMessage {...messages.begin} />
        </Begin>
      </Section>
    </div>
  );
}

QuizIntro.propTypes = {
  start: PropTypes.func.start,
};
