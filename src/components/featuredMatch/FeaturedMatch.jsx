import React from 'react';
import Team from '../team/Team';
import './featuredMatch.scss';
import Countdown from 'react-countdown';

const FeaturedMatch = ({ scrollRef, match }) => {
    return (
        <section ref={scrollRef} className='match--container'>
            <h1 className="match--title">Neste kamp</h1>
            {match.date && <Countdown
                className='match-countdown'
                date={match.date}
            />}
            <div className='team--one'>
                <Team members={match.teams[0].members} />
            </div>
            <div className='match-divider'>
                <div className='line'></div>
                <p className='match-divider--text'>MOT</p>
                <div className='line'></div>
            </div>

            <div className='team--two'>
                <Team members={match.teams[1].members} />
            </div>
        </section>
    );
};

export default FeaturedMatch;
