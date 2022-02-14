/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */

import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Routes from '../globals/Routes';
import authStore from '../store/authStore';

const PublicRoute = ({ component: Component, restricted, exact }: any) => {

  return <Route exact={exact} 
            render={(props) => (
                authStore.currentUser!=null && restricted
              ? <Redirect to={Routes.dashboard} />
              : <Component />)}
          />
        
};

export default PublicRoute;