import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import SpinnerElement from 'react-bootstrap/Spinner';

import StartSection from './components/UnSignSection.jsx';
import PersonalRecommendation from './components/PersonRecom.jsx';
import ResentlyAdded from './components/ResentlyAdded.jsx';
import MostPlayedToday from './components/MostPlayedToday.jsx';
import routes from '../../routes.js';
import { actions as gamesActions } from '../../slices/gamesSlice.js';

const MainPage = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [fetching, setFetching] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    let didMount = true; // eslint-disable-line
    const options = {
      method: 'GET',
      url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
      headers: {
        'X-RapidAPI-Key': '6b23c650d4msh7013d8cc534aa90p15a432jsnf5e624574b2f',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
      },
    };

    const fetchData = async () => {
      try {
        const res = await axios.request(options);
        if (didMount) setFetching(false);
        dispatch(gamesActions.addGames(res.data));
      } catch (err) {
        if (!err.isAxiosError) {
          toast.error(t('errors.unknown'));
          return;
        }

        if (err.response?.status === 401) {
          navigate(routes.mainPage());
        } else {
          toast.error(t('errors.network'));
        }
      }
    };

    fetchData();

    return () => { didMount = false; };
  }, [dispatch, t, navigate]);

  return fetching
    ? (
      <div className="d-flex justify-content-center h-100 align-items-center">
        <SpinnerElement animation="border" variant="info" />
      </div>
    )
    : (
      <div>
        <StartSection />
        <div className="content py-5">
          <div className="container">
            <h2>
              <i className="fas fa-robot mr-2 h3" />
              {t('mainPage.person.recomend')}
            </h2>
            <p className="a2">
              <i className="fas fa-question-circle mr-1" />
              {t('mainPage.person.recomendMsg')}
            </p>
            <PersonalRecommendation />
            <div className="row mb-4">
              <ResentlyAdded />
              <MostPlayedToday />
            </div>

          </div>
        </div>
      </div>
    );
};

export default MainPage;
