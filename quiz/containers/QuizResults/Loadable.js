/**
 *
 * Asynchronously loads the component for QuizResults
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
