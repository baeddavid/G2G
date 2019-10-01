import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SearchPage from '../../pages/SearchPage/SearchPage';
import SavedPage from '../../pages/SavedPage/SavedPage';
import ProfilePage from '../../pages/ProfilePage/ProfilePage';
import MorePage from '../../pages/MorePage/MorePage';

const ViewScreen = (props) =>
  <div>
    <Switch>
      <Route exact path='/' render={() =>
        <SearchPage {...props} />
      } />
      <Route exact path='/saved' render={() =>
        <SavedPage {...props}/>
      } />
      <Route exact path='/profile' render={() =>
        <ProfilePage {...props}/>
      } />
      <Route exact path='/more' render={() =>
        <MorePage {...props}/>
      } />
    </Switch>
  </div>

export default ViewScreen;
