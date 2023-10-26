import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { NavDropdown } from 'react-bootstrap';

import routes from '../../routes.js';

const FreeGameList = () => {
  const { t } = useTranslation();

  return (
    <>
      <NavDropdown title="Free Games" id="collapsible-nav-dropdown">
        <NavDropdown.Item
          as={Link}
          to={routes.filterGamePage('MMORPG')}
          state="MMORPG"
        >
          {t('MMORPG')}
        </NavDropdown.Item>
        <NavDropdown.Item
          as={Link}
          to={routes.filterGamePage('Shooter')}
          state="Shooter"
        >
          {t('Shooter')}
        </NavDropdown.Item>
        <NavDropdown.Item
          as={Link}
          to={routes.filterGamePage('MOBA')}
          state="MOBA"
        >
          {t('MOBA')}
        </NavDropdown.Item>
      </NavDropdown>
    </>
  );
};

export default FreeGameList;
