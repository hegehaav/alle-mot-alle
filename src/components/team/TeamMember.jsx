import React from 'react';

const TeamMember = ({ img }) => {
    return (
        <div className='team-member--container'>
            {img
                ? <img alt='team member' className='team-member--img' src={img} />
                : <p>?</p>}
        </div>
    );
};

export default TeamMember;
