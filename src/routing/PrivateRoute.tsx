/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */

import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Routes from '../globals/Routes';
import authStore from '../store/authStore';

const PrivateRoute = ({ component: Component,exact }: any) => {
  return <Route exact={exact} 
            render={(props) => (
                authStore.currentUser!=null
              ? <Component />
              : <Redirect to={Routes.login} />)}
          />
        
};

export default PrivateRoute;
