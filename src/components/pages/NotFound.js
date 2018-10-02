import React from 'react';
import {Link} from 'react-router-dom';

export default () => {
  return (
    <div className='error-page'>
      <h1 className="error-404">404</h1>
      <h2 className="subtitle-404">Page Not Found</h2>
      <p className="message-404">Sorry, that page does not exist</p>
      <Link to={process.env.PUBLIC_URL + '/'} className='error-btn'>Go Back</Link>
    </div>
  );
};
