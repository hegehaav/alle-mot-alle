import React from 'react';
import FeaturedMatch from './components/featuredMatch/FeaturedMatch';
import { matches } from './constants.js';

import './App.css';

const App = () => (
    <main className='main--container center'>
        <div className='title--container'>
            <h1 className='title'>BEKK MOT BEKK</h1>
        </div>
        <FeaturedMatch match={matches[1]} />
    </main>
);

export default App;
