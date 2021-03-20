import React from 'react';
import Match from './Match';
import './tournament.scss';
import { matches, semifinale2, finale } from '../../utils/constants';

const Tournament = ({ scrollRef }) => {
    const tournamentMatches = matches.filter(
        (match) =>
            match.teams.filter((team) => team.name !== 'Jobi og Unni').length >
            1
    );

    return (
        <section ref={scrollRef} className='tournament--container'>
            <h1>Turnering</h1>
            <section className='tournament'>
                {tournamentMatches.map((match, index) => (
                    <Match
                        key={index + 1}
                        matchIndex={index + 1}
                        match={match}
                    />
                ))}
                <Match matchIndex={6} match={semifinale2} />
                <Match matchIndex={7} match={finale} />
            </section>
        </section>
    );
};

export default Tournament;
