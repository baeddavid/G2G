import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SearchPage from '../../pages/SearchPage/SearchPage';
import SavedPage from '../../pages/SavedPage/SavedPage';
import ProfilePage from '../../pages/ProfilePage/ProfilePage';
import MorePage from '../../pages/MorePage/MorePage';
// import { CreateBathroomPage } from '../../pages/CreateBathroomPage/CreateBathroomPage';
import LoadingPage from '../../pages/LoadingPage/LoadingPage';
import ShowBathroomPage from '../../pages/ShowBathroomPage/ShowBathroomPage';
import AccessDeniedPage from '../../pages/AccessDeniedPage/AccessDeniedPage';
import styles from './ViewScreen.module.css';

export const ViewScreen = (parentProps) => {

  const { user } = parentProps;

  

  return (
    <div className={styles.ViewScreen}>
      <Switch>
        <Route exact path='/' render={(props) => { 
           return parentProps.location ? <SearchPage {...props} {...parentProps} /> : <LoadingPage/> 
        }
        } />
        <Route exact path='/saved' render={(props) =>
          user.userId !== 'guest' ?
          <SavedPage {...props}/> :
          <AccessDeniedPage />
        } />
        <Route exact path='/profile' render={(props) =>
          user.userId !== 'guest' ?
          <ProfilePage {...props} setUser={parentProps.setUser} /> :
          <AccessDeniedPage />
        } />
        <Route exact path='/more' render={(props) =>
          user.userId !== 'guest' ?
          <MorePage {...props}/> :
          <AccessDeniedPage />
        } />
        <Route
          exact path="/bathroom/:id"
          render={(props) => <ShowBathroomPage {...props} location={parentProps.location} newBathroomId={parentProps.newBathroomId} user={parentProps.user}/>  
        } />
      </Switch>
    </div>
  )
}
