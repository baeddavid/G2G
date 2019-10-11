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
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const GET_USER = gql`
  query getUser($userId: ID!) {
    getUser(userId: $userId) {
      name
      email
      bookmarks {
        id
      }
      bathrooms {
        id
      }
    }
  }
`

export const ViewScreen = (parentProps) => {

  const { user } = parentProps;
  if(user.userId !== 'guest') {
    return(
      <Query query={GET_USER} variables={ {userId: user.userId} }>

        {({ loading, error, data}) => {

          if(loading) return <LoadingPage />;
          if(error) return 'errorasd';

          return (
            <div className={styles.ViewScreen}>
              <Switch>
                <Route exact path='/' render={(props) => { 
                  return parentProps.mapCenter ? <SearchPage {...props} {...parentProps} name={data.getUser.name}/> : <LoadingPage/> 
                }
                } />
                <Route exact path='/saved' render={(props) =>
                  user.userId !== 'guest' ?
                  <SavedPage {...props}/> :
                  <AccessDeniedPage />
                } />
                <Route exact path='/profile' render={(props) =>
                  user.userId !== 'guest' ?
                  <ProfilePage {...props} setUser={parentProps.setUser} name={data.getUser.name}/> :
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
        }}
      </Query>
    )
  } else {
    return(
      <div className={styles.ViewScreen}>
        <Switch>
          <Route exact path='/' render={(props) => { return parentProps.mapCenter ? <SearchPage {...props} {...parentProps}/> : <LoadingPage/> } } />
          <Route exact path='/saved' render={(props) => <AccessDeniedPage />} />
          <Route exact path='/profile' render={(props) => <AccessDeniedPage />} />
          <Route exact path='/more' render={(props) => <AccessDeniedPage />} />
          <Route
            exact path="/bathroom/:id"
            render={(props) => <ShowBathroomPage {...props} location={parentProps.location} newBathroomId={parentProps.newBathroomId} user={parentProps.user}/>  
          } />
        </Switch>
      </div>
    )
  }
}
