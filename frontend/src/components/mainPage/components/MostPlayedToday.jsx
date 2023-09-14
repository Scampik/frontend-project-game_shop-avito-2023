import { useSelector } from 'react-redux';
import thumbnail from '../../../assets/register.jpg';
import {
  // actions as channelsActions,
  // selectors,
  personGamesSelector,
} from '../../../slices/gamesSlice.js';

const MostPlayedToday = () => {
  // const dispatch = useDispatch();
  // const { t } = useTranslation();
  const personGamesData = useSelector(personGamesSelector);
  console.log(personGamesData);

  return (
    <div className="col-md-4">
      <h2 className="h3">Most Played Today</h2>
      {personGamesData.map((game) => (
        <div key={game.id} className="game-card video-card" data-video-class="featuredvideo" data-video-src="/g/365/videoplayback.webm">
          <div className="card mb-4 grow shadow">
            <div className="image-wrapper">
              <img
                className="card-widget-top"
                width="100"
                height="100"
                src={thumbnail}
                alt="Naruto Online"
              />
              <div className="loader-wrapper">
                <div className="spinner-grow ftg-blue" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            </div>
            <span
              className="shadow badge badge-ftg py-2 px-2 float-right"
            >
              FREE
            </span>
            <a
              href="/naruto-online"
              className="stretched-link no-underline"
            >
              vdfdfd
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MostPlayedToday;
