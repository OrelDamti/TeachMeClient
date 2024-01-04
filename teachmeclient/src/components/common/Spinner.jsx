/* eslint-disable no-unused-vars */
import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import './Spinner.css'; // Create a CSS file for styling

const LoadingSpinner = () => (
    <div className="loading-spinner-container">
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    </div>
);

export default LoadingSpinner;