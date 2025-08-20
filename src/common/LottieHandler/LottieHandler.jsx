import React from 'react';
import Lottie from 'lottie-react';

import { Link } from 'react-router-dom';

const LottieHandler = ({ loadAnimation, isError = false }) => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 text-center">
      <Lottie 
        animationData={loadAnimation} 
        className="w-50" 
        style={isError ? { maxHeight: '300px'} : {}} 
      />

      {isError && (
        <>
          <p className="text-danger h4 mt-3">This Page Not Found</p>
          <Link to="/" className="btn btn-outline-primary mt-2">
            What About Go To The Home Page
          </Link>
        </>
      )}
    </div>
  );
};

export default LottieHandler;
