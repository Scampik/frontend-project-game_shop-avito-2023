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
  filterGamePage: (name = ':gameGenre') => `games/${name}`,
  gamePage: (name = ':gameName') => `/${name}`,
};

export default routes;
