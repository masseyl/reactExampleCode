/*
 * QuizIntro Messages
 *
 * This contains all the text for the QuizIntro component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.containers.QuizIntro.header',
    defaultMessage: 'Welcome to the Trivia Challenge',
  },
  instruction: {
    id: 'app.containers.QuizIntro.instruction',
    defaultMessage: 'You will be presented with 10 True or False questions.',
  },
  challenge: {
    id: 'app.containers.QuizIntro.challenge',
    defaultMessage: 'Can you score 100%?',
  },
  begin: {
    id: 'app.containers.QuizIntro.begin',
    defaultMessage: 'BEGIN',
  },

});
