import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import SpinnerElement from 'react-bootstrap/Spinner';

import TopGames from './components/TopGames.jsx';
import FilterGenryGames from './components/test.jsx';
import routes from '../../routes.js';
import { selectors, actions as gamesActions } from '../../slices/gamesSlice.js';

const FilterPage = () => {
  const { state } = useLocation();
  const { t } = useTranslation();
  const allGames = useSelector(selectors.selectAll);
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const [genre, setGenre] = useState(state);
  const [fetching, setFetching] = useState(true);
  const navigate = useNavigate();

  const filteredData = allGames.filter((el) => el.genre.toUpperCase() === genre.toUpperCase());
  const copyFilteredData = [...filteredData];
  const topListGames = copyFilteredData.sort((a, b) => b.id - a.id).slice(0, 3);
  // console.log(setGenre);
  // console.log('DATA', filteredData, topListGames);

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
        console.log(res);
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
        <div className="content py-5">
          <div className="container">
            <h2>
              <i className="fas fa-robot mr-2 h3" />
              Top Free Games for PC and Browser In 2023!
            </h2>
            <p className="a2">
              <i className="fas fa-question-circle mr-1" />
              168 free-to-play games found in our games list!
            </p>
            <TopGames games={topListGames} />
            <div className="row mb-4" />
            <FilterGenryGames games={filteredData} />
          </div>
        </div>
      </div>
    );
};

export default FilterPage;
