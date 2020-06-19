export const b64DecodeUnicode = (str) => decodeURIComponent(
    atob(str)
      .split('')
      .map((c) => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
      .join('')
  );

export const parseJwt = (token) => {
  try {
    const base64EncodedCredentials = token
      .replace(/-/g, '+')
      .replace(/_/g, '/')
      .split('.');
    return {
      header: JSON.parse(atob(base64EncodedCredentials[0])),
      payload: JSON.parse(b64DecodeUnicode(base64EncodedCredentials[1])),
    };
  } catch (error) {
    return null;
  }
};

export const isAccessTokenAvailable = (token) => !!(token || localStorage.getItem('accessToken'));

export const isAccessTokenValid = (token) => {
  const {
    payload: { exp },
  } = parseJwt(token);
  return exp >= new Date().getTime() / 1000;
};
