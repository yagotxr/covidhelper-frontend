import React, { Component } from 'react';
import { Redirect, Location } from 'react-router-dom';
import {
  isAccessTokenAvailable,
  isAccessTokenValid
} from '../../utils/authentication';

type Props = {
  /** URL location */
  location?: Location
};

class AuthRedirectHandler extends Component<Props> {
  getUrlParameter = (name) => {
    const {
      location: { search }
    } = this.props;

    let parameterToFind = name;

    // eslint-disable-next-line no-useless-escape
    parameterToFind = parameterToFind
      .replace(/[[]/, '\\[')
      .replace(/[\]]/, '\\]');
    const regex = new RegExp(`[?&]${parameterToFind}=([^&#]*)`);

    const results = regex.exec(search);
    return results === null
      ? ''
      : decodeURIComponent(results[1].replace(/\+/g, ' '));
  };

  renderRedirectToLoginPage = (error = '') => {
    const { location } = this.props;
    return (
      <Redirect
        to={{
          pathname: '/login',
          state: {
            from: location,
            error
          }
        }}
      />
    );
  };

  renderAuthenticatedRoute = () => {
    const { location } = this.props;

    return (
      <Redirect
        to={{
          pathname: '/',
          state: { from: location }
        }}
      />
    );
  };

  render() {
    const token = this.getUrlParameter('token');
    const error = this.getUrlParameter('error');
    if (isAccessTokenAvailable(token) && isAccessTokenValid(token)) {
      localStorage.setItem('accessToken', token);
      localStorage.getItem('token');
      return this.renderAuthenticatedRoute();
    }

    return this.renderRedirectToLoginPage(error);
  }
}

AuthRedirectHandler.defaultProps = {
  location: {
    search: ''
  }
};

export default AuthRedirectHandler;
