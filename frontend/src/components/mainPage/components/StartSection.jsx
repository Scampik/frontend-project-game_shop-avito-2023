import { Link } from 'react-router-dom';

import routes from '../../../routes';

const StartSection = () => (
  <section className="text-center d-flex align-items-center bg-body h-25">
    <div className="container mb-n2 ">
      <h1 className="jumbotron-heading fs-1">
        Discover the best
        <span className="ftg-blue">free-to-play</span>
        {' '}
        games!
      </h1>
      <p className="lead text-muted">
        {'Track what you\'ve played and search for what to play next! Plus get free premium loot!'}
      </p>
      <p>
        <Link to={routes.loginPage()} className="btn btn-primary m-2">
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
);

export default StartSection;
