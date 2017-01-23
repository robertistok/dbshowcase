import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import GroupsContainer from './containers/GroupsContainer';
import GroupDetailsContainer from './containers/GroupDetailsContainer';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={GroupsContainer} />
    <Route path="/group/:id" component={GroupDetailsContainer} />
  </Route>
)
