/* eslint-disable no-unused-vars */
import React from 'react';
import orelImage from './orel_image.png';

const OrelDamtiPage = () => {
    console.log('Rendering OrelDamtiPage');
    return (
        <div>
            <h1>Orel Damti Page</h1>
            <img src={orelImage} alt="Orel Damti" />
        </div>
    );
};

export default OrelDamtiPage;