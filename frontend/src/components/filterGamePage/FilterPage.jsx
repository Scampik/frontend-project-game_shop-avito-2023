import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

import SpinnerElement from 'react-bootstrap/Spinner';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';

import TopGames from './components/TopGames.jsx';
import FilterGenryGames from './components/FilterGames.jsx';
import routes from '../../routes.js';
import { selectors, actions as gamesActions } from '../../slices/gamesSlice.js';
import { actions as modalActions } from '../../slices/modalSlice.js';

const FilterPage = () => {
  const { state } = useLocation();
  const { t } = useTranslation();
  const allGames = useSelector(selectors.selectAll);
  const dispatch = useDispatch();
  const [genre, setGenre] = useState(state);
  const [sort, setSort] = useState('Relevance');
  const [fetching, setFetching] = useState(true);
  const [platform, setPlatform] = useState('PC (Windows)');
  const navigate = useNavigate();

  const handleInDevelopment = () => {
    dispatch(modalActions.openModal({ type: 'inDevelopment' }));
  };

  useEffect(() => {
    setGenre(state);
  }, [state]);

  const filteredData = allGames
    .filter((el) => el.genre.toUpperCase() === genre.toUpperCase())
    .filter((el) => (platform === 'All Platforms'
      ? el.platform.toUpperCase() : el.platform.toUpperCase().includes(platform.toUpperCase())));

  const allGenreData = allGames.map((el) => el.genre);
  const allGenre = [...new Set(allGenreData)];

  const copyFilteredData = [...filteredData];
  const topListGames = copyFilteredData.sort((a, b) => b.id - a.id).slice(0, 3);

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
              Top Free
              {' '}
              {genre}
              {' '}
              Games for PC and Browser In 2023!
            </h2>
            <p className="a2">
              <i className="fas fa-question-circle mr-1" />
              {filteredData.length}
              {' '}
              free-to-play
              {' '}
              {genre}
              {' '}
              games found in our games list!
            </p>
            <TopGames games={topListGames} />
            <div className="row pt-3 ">
              <div className="col-auto col-sm-3">
                <Dropdown>
                  <span className="mr-1 text-muted">Platform:</span>
                  {' '}
                  <Dropdown.Toggle variant="primary" id="dropdown-basic">
                    {platform}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => setPlatform('PC (Windows)')}>PC (Windows)</Dropdown.Item>
                    <Dropdown.Item onClick={() => setPlatform('Web Browser')}>Web Browser</Dropdown.Item>
                    <Dropdown.Item onClick={() => setPlatform('All Platforms')}>All Platforms</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className="col-auto col-sm-3">
                <Dropdown>
                  <span className="mr-2 text-muted">Genre:</span>
                  {' '}
                  <Dropdown.Toggle variant="primary" id="dropdown-basic">
                    {genre}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {allGenre.map((eachGenre, index) => (
                      <Dropdown.Item
                        // eslint-disable-next-line react/no-array-index-key
                        key={index}
                        onClick={() => setGenre(eachGenre)}
                      >
                        {eachGenre}
                      </Dropdown.Item>
                    ))}
                    <Dropdown.Item onClick={() => setPlatform('All genre')}>All genre</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className="col-auto col-sm-3">
                <Dropdown>
                  <span className="mr-1 text-muted">Sort by:</span>
                  {' '}
                  <Dropdown.Toggle variant="primary" id="dropdown-basic">
                    {sort}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => setSort('Relevance')}>Relevance</Dropdown.Item>
                    <Dropdown.Item onClick={() => setSort('Popularity')}>Popularity</Dropdown.Item>
                    <Dropdown.Item onClick={() => setSort('Release date')}>Release date</Dropdown.Item>
                    <Dropdown.Item onClick={() => setSort('Alphabetical')}>Alphabetical</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className="col-auto d-flex flex-row-reverse col-sm-3">
                <Button onClick={handleInDevelopment}>Advansed filter</Button>
              </div>
            </div>
            <hr />
            <h3>
              All games in genre
              {' '}
              {genre}
            </h3>
            <FilterGenryGames games={filteredData} />
          </div>
        </div>
      </div>
    );
};

export default FilterPage;
