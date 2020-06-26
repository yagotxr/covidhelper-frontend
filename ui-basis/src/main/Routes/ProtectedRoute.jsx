import { Redirect, Route } from 'react-router-dom';
import React from 'react';
import { isAccessTokenAvailable } from '../utils/authentication';

export const ProtectedRoute = (props) => {
  const { component: Component } = props;
  return (
    <Route
      {...props}
      render={(renderProps) => {
        if (isAccessTokenAvailable()) {
          return <Component {...renderProps} />;
        }
        return <Redirect to={{ pathname: '/login' }} />;
      }}
    />
  );
};
