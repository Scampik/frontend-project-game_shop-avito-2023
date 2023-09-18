import { useSelector } from 'react-redux';
import { Windows } from 'react-bootstrap-icons';
import Badge from 'react-bootstrap/Badge';

import {
  // actions as channelsActions,
  // selectors,
  resentlyGamesSelector,
} from '../../../slices/gamesSlice.js';

const ResentlyAdded = () => {
  const personGamesData = useSelector(resentlyGamesSelector);
  console.log(personGamesData);

  return (
    <div className="col-md-8">
      <h2 className="h3 text-muted">Recently Added</h2>
      {personGamesData.map((game) => (
        <div
          key={game.id}
          className="game-card card grow mb-3 shadow h-md-250 video-card bg-body-secondary"
          data-video-src="/g/564/videoplayback.webm"
        >
          <div className="card-body  d-flex row">
            <div className="row">
              <div className="col-3 align-self-center mt-n2">
                <div className="card">
                  <div className="image-wrapper">
                    <img className="card-img-top" src={game.thumbnail} alt="Synced" />
                  </div>
                </div>
              </div>
              <div className="col-7 col-sm-6 col-lg-7 align-self-center justify-content-center position-static">
                <a href="/synced" className="stretched-link text-decoration-none text-muted">
                  <h4 className="card-title text-truncate mt-n2 mb-1">{game.title}</h4>
                </a>
                <div className="text-truncate text-muted mb-1">{game.short_description}</div>
                <Badge className="m-1">{game.genre}</Badge>
              </div>
              <div className="col-1 align-self-center text-center justify-content-center d-none d-sm-block">
                <h5>
                  { game.platform === 'PC (Windows)' ? <Windows /> : null}
                </h5>
              </div>
              <div className="col-1 justify-content-center text-center align-self-center">
                <Badge className="badge bg-primary py-2 px-2 mb-2">FREE</Badge>
              </div>
            </div>
          </div>
        </div>
      ))}

    </div>
  );
};

export default ResentlyAdded;
