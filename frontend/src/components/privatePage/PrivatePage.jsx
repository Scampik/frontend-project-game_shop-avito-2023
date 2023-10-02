// import axios from 'axios';
import React, { useEffect, useState } from 'react';

// import routes from '../../routes.js';

const PrivatePage = () => {
  const [content, setContent] = useState('');
  useEffect(() => {
    // const fetchContent = async () => {
    //   const { data } = await axios.get(routes.dataPath(), { headers: getAuthHeader() });
    //   setContent(data);
    // };

    // fetchContent();
    setContent('Inventory here');
  }, []);

  return content && (
    <div className="container-fluid p-lg-5">
      <div className="row justify-content-center align-content-center">
        <div className="col-12 col-md-8 col-xxl-6">
          <div className="card shadow-sm">
            <div className="card-body row p-5">
              <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                <p>{content}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivatePage;
