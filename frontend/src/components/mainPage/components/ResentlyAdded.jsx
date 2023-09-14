const ResentlyAdded = () => (
  <div className="row mb-4">
    <div className="col-md-8">
      <h2 className="h3">Recently Added</h2>
      <div
        className="game-card card grow mb-3 shadow h-md-250 video-card"
        data-video-src="/g/564/videoplayback.webm"
      >
        <div className="card-body">
          <div className="row">
            <div className="col-3 align-self-center mt-n2">
              <div className="card">
                <div className="image-wrapper">
                  <img className="card-img-top" src="/g/564/thumbnail.jpg" alt="Synced" />
                  <div className="loader-wrapper">
                    <div className="spinner-grow ftg-blue" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-7 col-sm-6 col-lg-7 align-self-center justify-content-center position-static">
              <a href="/synced" className="stretched-link no-underline">
                <h4 className="card-title text-truncate mt-n2 mb-1">Synced</h4>
              </a>
              <div className="text-truncate text-muted mb-1">A free-to-play co-op sci-fi shooter.</div>
              <span className="badge badge-secondary text-dark mr-2">Shooter</span>
              <span className="badge text-dark badge-secondary mr-2">Sci-Fi</span>
            </div>
            <div className="col-1 align-self-center text-center text-muted justify-content-center d-none d-sm-block">
              <h5>
                <i className="fab fa-windows" />
              </h5>
            </div>
            <div className="col-1 justify-content-center text-center align-self-center">
              <span className="badge badge-ftg py-2 px-2 mb-2">FREE</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ResentlyAdded;
