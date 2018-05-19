import React from 'react';

const Banner = ({ appName, token, declaration }) => {
  if (token) {
    return null;
  }
  return (
    <div className="banner">
      <div className="container">
        <h1 className="logo-font">
          {appName}
        </h1>
        <p>{declaration}</p>
      </div>
    </div>
  );
};

export default Banner;
