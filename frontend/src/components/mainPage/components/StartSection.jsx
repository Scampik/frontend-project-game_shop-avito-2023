import { Link } from 'react-router-dom';

import routes from '../../../routes';
import { useAuth } from '../../../hooks/index.js';

const StartSection = () => {
  const auth = useAuth();
  return (
    auth.user
      ? <></>
      : (
        <section className="text-center d-flex align-items-center bg-body-secondary h-25">
          <div className="container mb-n2 m-2">
            <h1 className="jumbotron-heading fs-1 m-2">
              Discover the best
              {' '}
              <span className="text-warning">free-to-play</span>
              {' '}
              games!
            </h1>
            <p className="lead text-muted">
              {'Track what you\'ve played and search for what to play next! Plus get free premium loot!'}
            </p>
            <p>
              <Link to={routes.signUpPage()} className="btn btn-primary m-2">
                <strong>GET STARTED</strong>
                {' '}
                <span className="small">{'It\'s free'}</span>
              </Link>
              <Link
                className="btn btn-outline-secondary btn-md ml-0"
                to="/games"
                role="button"
              >
                Browse Games
              </Link>
              {' '}
            </p>
            {' '}
          </div>
          {' '}
        </section>
      )
  );
};

export default StartSection;
