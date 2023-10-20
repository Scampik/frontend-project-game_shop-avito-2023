import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';

import routes from '../../routes.js';

const AuthButtons = () => {
  const { t } = useTranslation();

  return (
    <>
      <Nav.Item as="li">
        <Button as={Link} to={routes.loginPage()} variant="primary">
          {t('authButtons.logIn')}
        </Button>
      </Nav.Item>
      <Nav.Item as="li">
        <Button
          as={Link}
          to={routes.signUpPage()}
          variant="outline-primary"
        >
          {t('authButtons.signUp')}
        </Button>
      </Nav.Item>
    </>
  );
};

export default AuthButtons;
