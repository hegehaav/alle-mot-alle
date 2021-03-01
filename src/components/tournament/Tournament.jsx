import React from 'react';
import Match from './Match';
import './tournament.scss';
import { matches } from '../../utils/constants';


const placeHolderMatch = {
    id: 0,
    teams: [
        {
            id: 0,
            name: 'Vinner',
            members: [
                { name: 'tba' },
                { name: 'tba' },
            ],
        },
        {
            id: 0,
            name: 'Vinner',
            members: [
                { name: 'tbd' },
                { name: 'tbd' },
            ],
        },
    ],
    date: undefined,
    score: undefined
}

const Tournament = ({ scrollRef }) => {
    const tournamentMatches = matches.filter(match =>
        match.teams.filter(team => team.name !== "Jobi og Unni").length > 1
    )

    return (
        <section ref={scrollRef} className="tournament--container">
            <h1>
                Turnering
            </h1>
            <section className="tournament">
                {tournamentMatches.map((match, index) =>
                    <Match
                        key={index + 1}
                        matchIndex={index + 1}
                        match={match}
                    />
                )}
                <Match
                    matchIndex={5}
                    match={placeHolderMatch}
                />
                <Match
                    matchIndex={6}
                    match={placeHolderMatch}
                />
                <Match
                    matchIndex={7}
                    match={placeHolderMatch}
                />
            </section>
        </section>
    )
}

export default Tournament; 