import React, { useRef } from 'react';

import Menu from './components/menu/Menu';
import FeaturedMatch from './components/featuredMatch/FeaturedMatch';
import Scoreboard from './components/scoreboard/Scoreboard';
import Tournament from './components/tournament/Tournament';

import { matches } from './utils/constants.js';

import './App.scss';
import ErrorBoundary from './components/error-boundary/ErrorBoundary';

const App = () => {
    const featuredMatchRef = useRef(null);
    const scoreboardRef = useRef(null);
    const tournamentRef = useRef(null);

    const featuredMatch = matches.find((match) => match.date > Date.now());

    const scrollToRef = (ref) => {
        if (ref.current !== null) {
            window.scrollTo({
                top: ref.current.offsetTop,
                behavior: 'smooth',
            });
        }
    };
    return (
        <main className='main--container center'>
            <ErrorBoundary>
                <Menu
                    scrollTo={scrollToRef}
                    featuredMatchRef={featuredMatchRef}
                    scoreboardRef={scoreboardRef}
                    tournamentRef={tournamentRef}
                />
                {featuredMatch && (
                    <FeaturedMatch
                        scrollRef={featuredMatchRef}
                        match={featuredMatch}
                    />
                )}
                <Scoreboard scrollRef={scoreboardRef} />
                <Tournament scrollRef={tournamentRef} />
            </ErrorBoundary>
        </main>
    );
};

export default App;
