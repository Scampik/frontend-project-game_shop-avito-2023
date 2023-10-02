const apiPath = '/api/v1';

const routes = {
  loginPath: () => [apiPath, 'login'].join('/'),
  dataPath: () => [apiPath, 'data'].join('/'),
  signupPath: () => [apiPath, 'signup'].join('/'),
  loginPage: () => '/login',
  privatePage: () => '/private',
  signUpPage: () => '/signup',
  notFoundPage: () => '*',
  mainPage: () => '/',
};

export default routes;
