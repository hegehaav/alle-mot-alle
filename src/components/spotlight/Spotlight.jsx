import React from 'react';
import './spotlight.scss'

const Spotlight = () => {
    const numberOfSpotlights = 100
    let spotlights = []
    for (let i = 0; i < numberOfSpotlights; i++) {
        spotlights.push(<div key={i} className="spotlight"></div>)
    }

    return (
        <>
            {spotlights}
        </>
    );
}

export default Spotlight;