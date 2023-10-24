import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import Badge from 'react-bootstrap/Badge';
import routes from '../../../routes.js';

const TopGames = ({ games }) => {
  const { t } = useTranslation();

  return (
    <div className="row mt-4 mb-2">
      {games.map((game) => (
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
export default TopGames;
