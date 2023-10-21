import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import routes from '../../../routes';
import { useAuth } from '../../../hooks/index.js';

const StartSection = () => {
  const auth = useAuth();
  const { t } = useTranslation();

  return (
    auth.user
      ? <></>
      : (
        <section className="text-center d-flex align-items-center bg-body-secondary h-25">
          <div className="container mb-n2 m-2">
            <h1 className="jumbotron-heading fs-1 m-2">
              {t('mainPage.start.title1')}
              {' '}
              <span className="text-warning">{t('mainPage.start.title2')}</span>
              {' '}
              {t('mainPage.start.title3')}
            </h1>
            <p className="lead text-muted">
              {t('mainPage.start.loot')}
            </p>
            <p>
              <Link to={routes.signUpPage()} className="btn btn-primary m-2">
                <strong>{t('mainPage.start.get')}</strong>
                {' '}
                <span className="small">{t('mainPage.start.free')}</span>
              </Link>
              <Link
                className="btn btn-outline-secondary btn-md ml-0"
                to="/games"
                role="button"
              >
                {t('mainPage.start.browse')}
              </Link>
              {' '}
            </p>
            {' '}
          </div>
          {' '}
        </section>
      )
  );
};

export default StartSection;
