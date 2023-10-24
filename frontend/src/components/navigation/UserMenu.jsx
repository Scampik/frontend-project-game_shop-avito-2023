import { useTranslation } from 'react-i18next';

import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/index.js';
import routes from '../../routes.js';

const UserMenu = () => {
  const auth = useAuth();
  const { t } = useTranslation();

  const handleInDevelopment = () => {
    console.log('в разработке');
  };

  return (
    <Dropdown align="end" as="li">
      <Dropdown.Toggle
        as={Button}
        className="d-flex p-0 px-lg-2 align-items-center nav-link"
        variant="link"
      >
        <div className="logo-height">
          {auth.user.username}
        </div>
        <span className="visually-hidden">{t('profileActions.header')}</span>
      </Dropdown.Toggle>
      <Dropdown.Menu as="ul">
        <Dropdown.Header as="li">{auth.user.username}</Dropdown.Header>
        <li>
          <Dropdown.Item as={Button} onClick={handleInDevelopment}>
            {t('develop')}
          </Dropdown.Item>
        </li>
        <li>
          <Dropdown.Item as={Link} to={routes.privatePage()}>
            {t('profileSetting.inventory')}
          </Dropdown.Item>
        </li>
        <Dropdown.Divider />
        <li>
          <Dropdown.Item as={Link} to={routes.privatePage()}>
            {t('profileSetting.setting')}
          </Dropdown.Item>
        </li>
        <Dropdown.Divider />
        <li>
          <Dropdown.Item as={Button} onClick={auth.logOut}>
            {t('profileSetting.logout')}
          </Dropdown.Item>
        </li>
      </Dropdown.Menu>
    </Dropdown>
  );
};
export default UserMenu;
