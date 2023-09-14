const PageFooter = () => (
  <footer className="page-footer font-small deep-dark pt-3">
    <div className="container text-center text-md-left">
      <div className="row text-center text-md-left mt-3 pb-3">
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
          <p>
            <a href="/about">About Us</a>
          </p>
          <p>
            <a href="/api-doc">API</a>
          </p>
          <p>
            <a href="/contact">Contact Us</a>
            {' '}

          </p>
          {' '}
          <p> </p>
        </div>
        <hr className="w-100 clearfix d-md-none" />
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
          <p>
            {' '}
            <a href="/faq">Help/FAQ</a>
            {' '}
          </p>
          <p>
            {' '}
            <a href="/support">Support &amp; Bugs</a>
            {' '}
          </p>
          <p>
            {' '}
            <a href="/map">Sitemap</a>
            {' '}
          </p>
        </div>
        <hr className="w-100 clearfix d-md-none" />
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
          <p>
            {' '}
            <a href="/privacy-policy">Privacy Policy</a>
            {' '}
          </p>
          <p>
            {' '}
            <a href="/cookies-policy">Cookies Policy</a>
            {' '}
          </p>
          <p>
            {' '}
            <a href="/terms-of-use">Terms of Use</a>
            {' '}
          </p>
        </div>
        <div className="col-md-2 col-lg-3 col-xl-3 mx-auto mt-3">
          <img src="/assets/images/logo-footer.png" alt="FreeToGame" />
        </div>
      </div>
      <hr />
      <div className="row d-flex align-items-center">
        <div className="col-md-7 col-lg-8">
          <p className="text-center text-md-left small">
            © 2023 Digiwalls Media, all rights reserved.
            All trademarks are property of their respective owners.
          </p>
        </div>
        <div className="col-md-5 col-lg-4 ml-lg-0">
          <div className="text-center text-md-right">
            <ul className="list-unstyled list-inline">
              <li className="list-inline-item">
                <a href="1" aria-label="Facebook" target="_blank" className="btn-floating btn-sm rgba-white-slight mx-1" rel="noreferrer">
                  <i className="fab fa-facebook-f" />
                  {' '}

                </a>
              </li>
              <li className="list-inline-item">
                <a href="1" aria-label="Twitter" target="_blank" className="btn-floating btn-sm rgba-white-slight mx-1" rel="noreferrer">
                  <i className="fab fa-twitter" />
                  {' '}

                </a>
              </li>
              <li className="list-inline-item">
                <a
                  rel="nofollow noreferrer"
                  type=" application/rss+xml"
                  aria-label="RSS"
                  href="1"
                  target="_blank"
                  className="btn-floating btn-sm rgba-white-slight mx-1"
                >
                  <i className="fas fa-rss" />
                  {' '}

                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  </footer>
);

export default PageFooter;
