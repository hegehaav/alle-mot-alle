import React from 'react';
import Match from './components/match/Match';
import { matches } from './constants.js';

import './App.css';

const App = () => (
    <main className='main--container center'>
        <div className='title--container'>
            <h1 className='title'>ALLE MOT ALLE</h1>
        </div>
        <Match match={matches[0]} />
    </main>
);

export default App;
