import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useLocation, Link } from 'react-router-dom';

import Badge from 'react-bootstrap/Badge';
import routes from '../../../routes.js';

import {
  selectors,
} from '../../../slices/gamesSlice.js';

const PersonalRecommendation = () => {
  const { state } = useLocation();
  const { t } = useTranslation();
  const [genre, setGenre] = useState(state);
  const allGames = useSelector(selectors.selectAll);
  console.log(setGenre);
  const filteredData = allGames.filter((el) => el.genre.toUpperCase() === genre.toUpperCase());
  const topGame = filteredData.sort((a, b) => b.id - a.id).slice(0, 3);

  return (
    <div className="row mt-4 mb-2">
      {topGame.map((game) => (
        <div key={game.id} className="game-card video-card col-md-4">
          <div className="card mb-4 grow shadow bg-body-secondary">
            <div className="">
              <img
                className="card-img-top"
                width="200"
                height="250"
                src={game.thumbnail}
                alt="Naruto Online"
              />
            </div>
            <Badge
              style={{
                position: 'absolute',
                bottom: '8px',
                right: '16px',
              }}
              className="shadow py-2 px-2 float-right"
            >
              {t('mainPage.free')}
            </Badge>
            <Link
              to={routes.gamePage(game.title)}
              state={game}
              className="stretched-link no-underline"
            >
              {}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};
export default PersonalRecommendation;

// <div className="loader-wrapper">
//   <div className="spinner-grow ftg-blue" role="status">
//     <span className="sr-only">Loading...</span>
//   </div>
// </div>;
