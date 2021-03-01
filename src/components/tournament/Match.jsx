import React from 'react';
import { getScore } from '../../utils/common';
const Match = ({ match, matchIndex }) => {
    const teams = match.teams.map(team => team.name)
    return (
        <div className={`match match--${matchIndex}`}>
            <div className="tournament--team">
                <div className="name">{teams[0]}</div>
                <div className="score">{getScore(match, 0) ?? "-"}</div>
            </div>
            <div className="tournament--team">
                <div className="name">{teams[1]}</div>
                <div className="score">{getScore(match, 1) ?? "-"} </div>
            </div>
        </div>
    )
}

export default Match;