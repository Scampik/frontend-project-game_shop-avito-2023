// import { useTranslation } from 'react-i18next';
import { Button } from 'react-bootstrap';
import { useLocation, Link } from 'react-router-dom';
import routes from '../../routes';
// import CircleChart from './components/chart.jsx';
// import logo from '../../assets/logo.jpg';

const GamePage = () => {
//   const { t } = useTranslation();
  const { state } = useLocation();
  // const { game } = props.location.state;
  console.log('develop', state);

  const notSignedIn = () => console.log('develop');

  return (
    <>
      <div className="container py-4 bg-gradient rounded mt-2">
        <div className="row">
          <div className="col-md-4">
            <div className="sidebar control-box">
              <div className="card shadow mb-3 rounded">
                <img
                  className="img2 card-img-top progressive replace"
                  width="331"
                  height="201"
                  src={state.thumbnail}
                  alt={state.title}
                />
              </div>
              <div className="d-flex justify-content-start mb-4">
                <div className="p-3 bg-body-secondary rounded">
                  <span className="">FREE</span>
                </div>
                <div className="w-100">
                  <Button
                    type="button"
                    name="playnow"
                    className="p-3 w-100"
                    href="/open/asda-global"
                    rel="nofollow"
                    target="_blank"
                  >
                    <strong>PLAY NOW</strong>
                    <i className="fas fa-sign-out-alt" />
                  </Button>
                </div>
              </div>
              <div className="rate-section btn-group btn-block mb-3 text-center shadow-sm rounded">
                <Button
                  className="likeButton col-3 py-2 btn-dark2"
                  onClick={notSignedIn}
                >
                  <div className="text-success">
                    <i className="far fa-smile fa-lg text-sucess" />
                  </div>
                  <div className="count mb-n2 text-muted">0</div>
                  <span className="title small">LIKE</span>
                </Button>
                <Button
                  className="neutralButton col-3 py-2 btn-dark2 "
                  onClick={notSignedIn}
                >
                  <div className="">
                    <i className="far fa-meh fa-lg text-secondary" />
                  </div>
                  <div className="count mb-n2 text-muted">0</div>
                  <span className="title small">MEH</span>
                </Button>
                <Button
                  className="dislikeButton col-3 py-2 btn-dark2 "
                  onClick={notSignedIn}
                >
                  <div className="">
                    <i className="far fa-frown fa-lg text-danger" />
                  </div>
                  <div className="count mb-n2 text-muted">0</div>
                  <span className="title small">DISLIKE</span>
                </Button>
                <Button
                  href="#"
                  className="add col-3 py-2 btn-dark2 "
                  data-toggle="dropdown"
                >
                  <div className="">
                    <i className="far fa-plus-square fa-lg text-info" />
                  </div>
                  <div className="count mb-n2 text-muted">0</div>
                  <span className="chevron" data-feather="chevron-down" />
                  <span className="title small">ADD</span>
                </Button>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <span className="small">
              <Link className="text-decoration-none" to={routes.mainPage()}>
                Home
              </Link>
              {' '}
              &gt;
              {' '}
              <Link className="text-decoration-none" to={routes.mainPage()}>
                Free Games
              </Link>
              {' '}
              &gt;
              {' '}
              <span className="text-muted">{state.title}</span>
            </span>
            <h1>{state.title}</h1>
            <div className="row py-3">
              <div className="col-md-7">
                <div className="statRightHolder mb-2">
                  <ul className="statsLeft2">
                    <li>
                      <span className="blue">
                        <i className="fas fa-crown mr-2" />
                      </span>
                      <span>Very Positive</span>
                    </li>
                    <li>
                      <span className="mr-2">0</span>
                      {' '}
                      <span>Member Ratings</span>
                    </li>
                    <li>
                      <span className="yellow">
                        <i className="far fa-user mr-2" />
                        {' '}
                        {state.id}
                      </span>
                      {' '}
                      Members have this game in their library!
                    </li>
                    <li>
                      <span className="red">
                        <i className="far fa-comment-alt mr-2" />
                        {' '}
                        0
                      </span>
                      {' '}
                      Reviews
                    </li>
                    <li>
                      {' '}
                      <span>
                        <i className="fas fa-long-arrow-alt-down" />
                        {' '}
                        58%
                      </span>
                      <span className="ml-1">Popularity</span>
                      {' '}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

// <div id="submitReview" className="anchor mt-3">
// <span className="float-right">
//   <div className="rating">
//     <Button
//       className="likeButton btn btn-sm"
//       onClick={notSignedIn()}
//     >
//       <div>tyt logo</div>
//       <span className="text ml-1">0</span>
//     </Button>
//     <Button
//       className="neutralButton btn btn-sm"
//       onClick={notSignedIn()}
//     >
//       <div>tyt logo</div>
//       {' '}
//       <span className="text ml-1">0</span>
//     </Button>
//     <Button
//       className="dislikeButton btn btn-sm"
//       onClick="notSignedIn()"
//     >
//       <div>tyt logo</div>
//       {' '}
//       <span className="text ml-1">0</span>
//     </Button>
//   </div>
// </span>
// <h2 className="d-flex flex-row mr-2 h4">
//   What do you think about Asda Global?
//   {' '}
// </h2>
// <hr className="mt-2 mb-3" />
// <div id="submitReview" className="reviewSection">
//   <div className="header">
//     <div className="media">
//       <div>tyt img</div>
//       <div className="media-body user">
//         <div className="input-group mb-3">
//           <textarea
//             name="commentText"
//             className="md-textarea deep-dark form-control mt-0"
//             rows="2"
//             placeholder="Write a review for Asda Global! Share your thoughts with our community."
//           />
//           <Button
//             className="btn btn-outline-dark"
//             onClick={notSignedIn()}
//           >
//             <span className="text ml-1">
//               <i className="fas fa-paper-plane" />
//             </span>
//           </Button>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
// <h2 className="mt-4 h3">About Asda Global</h2>
// <hr className="mt-2 mb-3" />
// <div id="summary">
//   <p className="collapse text-justify" id="collapseSummary">
//     discription game
//   </p>
// </div>
// <hr />
// <h2 className="mt-5 h3">Additional Information</h2>
// <div className="text-muted mt-n2">
//   <i className="fas fa-info-circle mr-2" />
//   Please note this free-to-play game may or may not offer optional
//   in-game purchases.
// </div>
// </div>

export default GamePage;
