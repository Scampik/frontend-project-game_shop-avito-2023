const PersonalRecommendation = () => (
  <div className="row mb-4">
    <div className="game-card video-card col-md-4" data-video-src="/g/2/videoplayback.webm">
      <div className="card mb-4 grow shadow">
        <div className="image-wrapper">
          <img
            className="card-img-top"
            width="356"
            height="201"
            src="/g/2/thumbnail.jpg"
            alt="World of Tanks - If you like blowing up tanks, with a quick and intense game style you will love this game!"
          />
          <div className="loader-wrapper">
            <div className="spinner-grow ftg-blue" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </div>
        <div className="card-body">
          <span className="badge badge-ftg py-2 px-2 float-right">FREE</span>
          <a href="/world-of-tanks" className="stretched-link no-underline">
            <h4 className="card-title text-truncate">World of Tanks</h4>

          </a>
          <div className="d-flex justify-content-between align-items-center" />
        </div>
      </div>
    </div>
  </div>
);

export default PersonalRecommendation;
