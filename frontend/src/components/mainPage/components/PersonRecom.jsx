import { useSelector } from 'react-redux';

import {
  // actions as channelsActions,
  // selectors,
  personGamesSelector,
} from '../../../slices/gamesSlice.js';

const PersonalRecommendation = () => {
  // const dispatch = useDispatch();
  // const { t } = useTranslation();
  const personGamesData = useSelector(personGamesSelector);
  // console.log(personGamesData);s

  return (
    <div className="row mb-4">
      {personGamesData.map((game) => (
        <div key={game.id} className="game-card video-card col-md-4" data-video-src="/g/2/videoplayback.webm">
          <div className="card mb-4 grow shadow">
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
            <div className="card-body">
              <a
                href={game.freetogame_profile_url}
                className="d-flex"
              >
                <h4 className="fs-5 p-2 w-100 card-title text-truncate">{game.title}</h4>
                <span className="btn btn-primary p-2 flex-shrink-1 py-2 px-2 float-right d-flex">FREE</span>
              </a>
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
