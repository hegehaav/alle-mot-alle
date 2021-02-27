import React, { useRef } from 'react';

import Menu from './components/menu/Menu';
import FeaturedMatch from './components/featuredMatch/FeaturedMatch';
import { matches } from './utils/constants.js';

import './App.scss';

const App = () => {
    const featuredMatchRef = useRef(null)
    const scrollToRef = (ref) => {
        if (ref !== null) {
            window.scrollTo({
                top: ref.current.offsetTop,
                behavior: "smooth",
            });
        }
    }

    return (
        <main className='main--container center'>
            <div className='title--container'>
                <h1 className='title'>BEKK MOT BEKK</h1>
            </div>
            <Menu scrollTo={scrollToRef} featuredMatchRef={featuredMatchRef} />
            <FeaturedMatch scrollRef={featuredMatchRef} match={matches.find(match => match.date > Date.now())} />
        </main>
    );
}

export default App;
