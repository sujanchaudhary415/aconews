import React from 'react';
import loadingGif from './loading.gif'; // Ensure you have this GIF in the `components` folder

const Spinner = () => {
    return (
        <div className="spinner-container">
            <img src={loadingGif} alt="loading" className="spinner" />
        </div>
    );
};

export default Spinner;
