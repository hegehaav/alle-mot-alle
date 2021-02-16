import React from 'react';
import Match from './components/match/Match';
import Spotlight from './components/spotlight/Spotlight';
import { matches } from './constants.js';

import './App.css';
import jingle from "./assets/jingle.mp3";

const App = () => {

    return (
        <main className='main--container center'>
            <audio src={jingle} autoPlay />
            <Spotlight />
            <div className='title--container'>
                <h1 className='title'>BEKK MOT BEKK</h1>
            </div>
            <Match match={matches[0]} />
        </main>
    );
}

export default App;
