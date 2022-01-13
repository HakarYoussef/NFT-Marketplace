import React from 'react';
import './styles/LoadingSpinnerStyles.css';

function LoadingSpinner() {
  return (
    <div className="spinnerWrapper">
      <div className="spinner">
        <div className="bounce1"></div>
        <div className="bounce2"></div>
        <div className="bounce3"></div>
      </div>
    </div>
  );
}

export default LoadingSpinner;
