import React from 'react';
import { getScore, getDate } from '../../utils/common';
const Match = ({ match, matchIndex }) => {
    const teams = match.teams.map(team => team.name);
    const formattedDate = (Object.prototype.toString.call(match.date)) === "[object Date]" ? getDate(match.date) : match.date;
    return (
        <div className={`match match--${matchIndex}`}>
            {formattedDate && <div>{formattedDate}</div>}
            <div className="tournament--team">
                <div className="name">{teams[0]}</div>
                <div className="score">{getScore(match.score, 0) ?? "-"}</div>
            </div>
            <div className="tournament--team">
                <div className="name">{teams[1]}</div>
                <div className="score">{getScore(match.score, 1) ?? "-"} </div>
            </div>
        </div>
    )
}

export default Match;