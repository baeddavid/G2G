import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SearchPage from '../../pages/SearchPage/SearchPage';
import SavedPage from '../../pages/SavedPage/SavedPage';
import ProfilePage from '../../pages/ProfilePage/ProfilePage';
import MorePage from '../../pages/MorePage/MorePage';

const ViewScreen = (props) =>
  <div>
    <Switch>
      <Route exact path='/' render={(props) =>
        <SearchPage {...props} />
      } />
      <Route exact path='/saved' render={(props) =>
        <SavedPage {...props}/>
      } />
      <Route exact path='/profile' render={(props) =>
        <ProfilePage {...props}/>
      } />
      <Route exact path='/more' render={(props) =>
        <MorePage {...props}/>
      } />
    </Switch>
  </div>

export default ViewScreen;
