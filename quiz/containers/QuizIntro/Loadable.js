/**
 *
 * Asynchronously loads the component for QuizIntro
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
