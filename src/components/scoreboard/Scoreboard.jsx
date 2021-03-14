import React from 'react';

import { matches } from '../../utils/constants';
import { getScore } from '../../utils/common';
import './scoreboard.scss'

const Scoreboard = ({ scrollRef }) => {
    return (
        <section className="scoreboard--container" ref={scrollRef}>
            <h1>Resultater</h1>
            <table>
                <tbody>
                    <tr>
                        <th>Lag 1</th>
                        <th>Stilling</th>
                        <th>Lag 2</th>
                    </tr>
                    {matches.map(match => (
                        <tr key={match.id}>
                            <td>{match.teams[0].members[0].name} og {match.teams[0].members[1].name}</td>
                            <td>{getScore(match.score, 0) ?? ""} - {getScore(match.score, 1) ?? ""} </td>
                            <td>{match.teams[1].members[0].name} og {match.teams[1].members[1].name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}

export default Scoreboard