import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import Badge from 'react-bootstrap/Badge';
import routes from '../../../routes.js';

import {
  personGamesSelector,
} from '../../../slices/gamesSlice.js';

const PersonalRecommendation = () => {
  // const dispatch = useDispatch();
  const { t } = useTranslation();
  const personGamesData = useSelector(personGamesSelector);
  // console.log(personGamesData);s

  return (
    <div className="row mb-4">
      {personGamesData.map((game) => (
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
export default PersonalRecommendation;

// <div className="loader-wrapper">
//   <div className="spinner-grow ftg-blue" role="status">
//     <span className="sr-only">Loading...</span>
//   </div>
// </div>;
