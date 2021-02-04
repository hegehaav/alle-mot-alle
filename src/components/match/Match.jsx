import React from 'react';
import Team from '../team/Team';
import './match.css';
import Countdown from 'react-countdown';

const Match = ({ teams }) => {
    return (
        <div className='match--container'>
            <Countdown
                className='match-countdown'
                date={new Date('2021-02-15')}
            />
            <div className='team--one'>
                <Team members={teams[0].members} />
            </div>
            <div className='match-divider'>
                <div className='line'></div>
                <p className='match-divider--text'>MOT</p>
                <div className='line'></div>
            </div>

            <div className='team--two'>
                <Team members={teams[1].members} />
            </div>
        </div>
    );
};

export default Match;
