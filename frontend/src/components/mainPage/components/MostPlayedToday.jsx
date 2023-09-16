import { useSelector } from 'react-redux';
// import thumbnail from '../../../assets/register.jpg';
import {
  // actions as channelsActions,
  // selectors,
  mostPlayedGamesSelector,
} from '../../../slices/gamesSlice.js';

const MostPlayedToday = () => {
  // const dispatch = useDispatch();
  // const { t } = useTranslation();
  const mostPlayedGamesData = useSelector(mostPlayedGamesSelector);
  console.log(mostPlayedGamesData);

  return (
    <div className="col-md-4">
      <h2 className="h3">Most Played Today</h2>
      {mostPlayedGamesData.map((game) => (
        <div key={game.id} className="" data-video-class="featuredvideo" data-video-src="/g/365/videoplayback.webm">
          <div className="card mb-4 grow shadow">
            <div className="image-wrapper">
              <img
                className="card-widget-top"
                width="356"
                height="201"
                src={game.thumbnail}
                alt="Naruto Online"
              />
            </div>
            <span
              style={{
                position: 'absolute',
                bottom: '8px',
                right: '16px',
              }}
              className="shadow btn btn-primary py-2 px-2 float-right"
            >
              FREE
            </span>
            <a
              href={game.freetogame_profile_url}
              className="stretched-link no-underline"
            >
              {}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MostPlayedToday;
