import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SearchPage from '../../pages/SearchPage/SearchPage';
import SavedPage from '../../pages/SavedPage/SavedPage';
import ProfilePage from '../../pages/ProfilePage/ProfilePage';
import MorePage from '../../pages/MorePage/MorePage';
// import { CreateBathroomPage } from '../../pages/CreateBathroomPage/CreateBathroomPage';
import ShowBathroomPage from '../../pages/ShowBathroomPage/ShowBathroomPage'

export const ViewScreen = (parentProps) => {

  return (
    <div>
      <Switch>
        <Route exact path='/' render={(props) =>
          <SearchPage {...props}
          {...parentProps}
          />
        } />
        <Route exact path='/saved' render={(props) =>
          <SavedPage {...props}/>
        } />
        <Route exact path='/profile' render={(props) =>
          <ProfilePage {...props} setUser={parentProps.setUser} />
        } />
        <Route exact path='/more' render={(props) =>
          <MorePage {...props}/>
        } />
        <Route
          exact path="/bathroom/:id"
          render={(props) => <ShowBathroomPage {...props} location={parentProps.location} newBathroomId={parentProps.newBathroomId} user={parentProps.user}/>  
        } />
      </Switch>
    </div>
  )
}
