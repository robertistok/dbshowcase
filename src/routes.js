import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import GroupsContainer from './containers/GroupsContainer';
import GroupDetailsContainer from './containers/GroupDetailsContainer';
import StudentDetailsContainer from './containers/StudentDetailsContainer';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={GroupsContainer} />
    <Route path='/group/:id' component={GroupDetailsContainer} />
    <Route path='/student/:id' component={StudentDetailsContainer} />
  </Route>
)
