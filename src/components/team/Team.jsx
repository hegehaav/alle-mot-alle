import React from 'react';
import TeamMember from './TeamMember';
import './team.scss';

const Team = ({ members }) => {
    return (
        <div className='team--container'>
            <div className='team'>
                <div className='team-member--one'>
                    <TeamMember img={members[0].img} />
                </div>
                <div className='team-member--two'>
                    <TeamMember img={members[1].img} />
                </div>
            </div>
        </div>
    );
};

export default Team;
