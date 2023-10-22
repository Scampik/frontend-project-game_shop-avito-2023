import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import Badge from 'react-bootstrap/Badge';

import routes from '../../../routes.js';
import {
  mostPlayedGamesSelector,
} from '../../../slices/gamesSlice.js';

const MostPlayedToday = () => {
  // const dispatch = useDispatch();
  const { t } = useTranslation();
  const mostPlayedGamesData = useSelector(mostPlayedGamesSelector);
  // console.log(mostPlayedGamesData);

  return (
    <div className="col-md-4">
      <h2 className="h3">{t('mainPage.most.title')}</h2>
      {mostPlayedGamesData.map((game) => (
        <div key={game.id} className="" data-video-class="featuredvideo" data-video-src="/g/365/videoplayback.webm">
          <div className="card mb-4 grow shadow">
            <div className="image-wrapper">
              <img
                style={{
                  width: '100%',
                  height: 'auto',
                  aspectRatio: 'attr(width) / attr(height)',
                }}
                className="card-widget-top"
                width="356"
                height="201"
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

export default MostPlayedToday;
