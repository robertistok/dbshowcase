import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import GroupContainer from './containers/GroupContainer';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={GroupContainer} />
  </Route>
)
