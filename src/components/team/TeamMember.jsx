import React from 'react';

const TeamMember = ({ img, isFlying }) => {


    return (
        <div className={`team-member--container ${isFlying ? "" : "team-member__danicng"}`}>
            {img
                ? <img alt='team member' className='team-member--img' src={img} />
                : <p>?</p>}
        </div>
    );
};

export default TeamMember;
