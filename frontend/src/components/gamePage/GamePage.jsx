/* eslint-disable no-unused-vars */
// import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import {
  Button, Carousel, Card,
} from 'react-bootstrap';
import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

import { actions as modalActions } from '../../slices/modalSlice.js';
import routes from '../../routes';

const GamePage = () => {
//   const { t } = useTranslation();
  const { state } = useLocation();
  const dispatch = useDispatch();

  const handleInDevelopment = () => {
    dispatch(modalActions.openModal({ type: 'purchase' }));
  };

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // });

  return (
    <>
      <div className="container py-4 mt-2">
        <div className="row justify-content-center">
          <div className="col-md-9">
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
            <h1>
              {state.title}
              {`(${state.genre})`}
            </h1>
          </div>
          <div className="col-md-6">
            <div className="sidebar control-box">
              <div className="card shadow mb-3 rounded">
                <Carousel>
                  {[state.thumbnail, state.thumbnail, state.thumbnail].map((image, index) => (
                    <Carousel.Item
                      // eslint-disable-next-line react/no-array-index-key
                      key={index}
                    >
                      <Card>
                        <Card.Img
                          variant="top"
                          src={image}
                        />
                      </Card>
                    </Carousel.Item>
                  ))}
                </Carousel>
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
                    onClick={() => handleInDevelopment()}
                    // href={state.game_url}
                    // rel="nofollow"
                    // target="_blank"
                  >
                    <strong>In Cart</strong>
                    <i className="fas fa-sign-out-alt" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="row">
              <img src={state.thumbnail} alt="imgGame" className="rounded" />
              <div className="mt-2">
                <p>
                  {state.short_description}
                </p>
              </div>
              <div className="">
                <div id="userReviews" className="user_reviews">
                  <div className="">
                    <div className="text-secondary small">Недавние обзоры:</div>
                    <div className="summary column">
                      <span className="game_review_summary positive">Очень положительные</span>
                      <span className="responsive_hidden">
                        (2,222)
                      </span>
                    </div>
                  </div>
                  <div className="user_reviews_summary_row">
                    <div className="text-secondary small">Все обзоры:</div>
                    <div className="summary column">
                      <span className="game_review_summary positive" itemProp="description">Очень положительные</span>
                      <span className="responsive_hidden">
                        (122,222)
                      </span>
                    </div>
                  </div>
                </div>
                <div className="release_date">
                  <div className="text-secondary small">Дата выхода:</div>
                  <div className="date">23 фев. 2023</div>
                </div>
                <div className="1">
                  <div className="text-secondary small d-flex flex-row ">
                    Разработчик:
                    {' '}
                    <div className="summary column" id="developers_list">
                      <a href="*">{state.developer}</a>
                      {' '}
                    </div>
                  </div>
                </div>
                <div className="dev_row">
                  <div className="text-secondary small d-flex flex-row">
                    Издатель:
                    <div className="summary column">
                      <a href="*">{state.developer}</a>
                      {' '}
                    </div>
                  </div>
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
