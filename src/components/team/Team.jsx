import React from 'react';
import TeamMember from './TeamMember';
import './team.scss';

const Team = ({ members, isFlying }) => {
    return (
        <div className='team--container'>
            <div className={`team ${isFlying ? "team__flying" : ""}`}>
                <div className='team-member--one'>
                    <TeamMember isFlying={isFlying} img={members[0].img} />
                </div>
                <div className='team-member--two'>
                    <TeamMember isFlying={isFlying} img={members[1].img} />
                </div>
            </div>
        </div>
    );
};

export default Team;
