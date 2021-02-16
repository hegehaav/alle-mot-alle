import React from 'react';
import Team from '../team/Team';
import './match.css';
import Countdown from 'react-countdown';

const Match = ({ match }) => {
    return (
        <div className='match--container'>
            <div className='team--one'>
                <Team members={match.teams[0].members} isFlying={false} />
            </div>
            <div className='match-divider'>
                <div className='line'></div>
                <p className='match-divider--text'>MOT</p>
                <div className='line'></div>
            </div>

            <div className='team--two'>
                <Team members={match.teams[1].members} isFlying={false} />
            </div>
        </div>
    );
};

export default Match;
