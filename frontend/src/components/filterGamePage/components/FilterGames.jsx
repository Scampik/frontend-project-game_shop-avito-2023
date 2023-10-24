import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useLocation, Link } from 'react-router-dom';

import Badge from 'react-bootstrap/Badge';
import routes from '../../../routes.js';

import {
  selectors,
} from '../../../slices/gamesSlice.js';

const FilterGenryGames = () => {
  // const dispatch = useDispatch();
  const { state } = useLocation();
  const { t } = useTranslation();
  const [genre, setGenre] = useState(state);
  const allGames = useSelector(selectors.selectAll);

  const filteredData = allGames.filter((el) => el.genre.toUpperCase() === genre.toUpperCase());
  const copyFilteredData = [...filteredData];
  const topGame = copyFilteredData.sort((a, b) => b.id - a.id).slice(0, 3);
  console.log(state, 'genree', setGenre);
  console.log('DATA', filteredData, topGame);

  return (
    <div className="row mb-4">
      {filteredData.map((game) => (
        <div key={game.id} className="game-card video-card col-md-4" data-video-src="/g/2/videoplayback.webm">
          <div className="card mb-4 grow shadow bg-body-secondary">
            <div className="image-wrapper">
              <img
                style={{
                  width: '100%',
                  height: 'auto',
                  aspectRatio: 'attr(width) / attr(height)',
                }}
                className="card-img-top"
                width="356"
                height="201"
                src={game.thumbnail}
                alt="World of Tanks - If you like blowing up tanks, with a quick and intense game style you will love this game!"
              />

            </div>
            <div className="card-body d-flex justify-content-between align-items-center">
              <Link
                to={routes.gamePage(game.title)}
                state={game}
                className="text-decoration-none text-muted stretched-link text-truncate"
              >
                <h4 className="fs-5 p-2 text-truncate">{game.title}</h4>
                {}
              </Link>
              <Badge className="py-2 px-2 float-right ms-auto">{t('mainPage.free')}</Badge>
              <div className="d-flex justify-content-between align-items-center" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default FilterGenryGames;
