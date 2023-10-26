/* eslint-disable no-shadow */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import { actions as modalActions } from '../../../slices/modalSlice.js';
import routes from '../../../routes';
import { useAuth } from '../../../hooks/index.js';
import logo from '../../../assets/backgroundUnSign.jpg';

const StartSection = () => {
  const auth = useAuth();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [offsetX, setOffsetX] = useState(0);

  const handleMouseMove = (e) => {
    const container = e.currentTarget;
    const containerWidth = container.offsetWidth;
    const mouseX = e.pageX - container.getBoundingClientRect().left;
    const offsetX = mouseX - containerWidth / 2;
    setOffsetX(offsetX / 50); // movement speed
  };

  const handleMouseLeave = () => {
    // setOffsetX(0);
  };

  const handleInDevelopment = () => {
    dispatch(modalActions.openModal({ type: 'inDevelopment' }));
  };

  return (
    auth.user
      ? <></>
      : (
        <div
          className="container-fluid text-center d-flex align-items-center bg-body-secondary"
          style={{
            backgroundImage: `url(${logo})`,
            backgroundPositionX: offsetX,
            backgroundSize: 'cover',
            width: '100vw',
            height: '30vh',
            overflowX: 'visible',
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className="container text-light">
            <h1 className="fs-1 m-2">
              {t('mainPage.start.title1')}
              {' '}
              <span className="text-warning">{t('mainPage.start.title2')}</span>
              {' '}
              {t('mainPage.start.title3')}
            </h1>
            <p className="lead">
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
                to={routes.mainPage()}
                role="button"
                onClick={() => handleInDevelopment()}
              >
                {t('mainPage.start.browse')}
              </Link>
              {' '}
            </p>
            {' '}
          </div>
          {' '}
        </div>
      )
  );
};

export default StartSection;
