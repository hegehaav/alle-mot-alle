import React from 'react';
import './menu.scss';

const MenuCard = ({ index, text, link }) => {
    return (
        <div className={`menu--petal p${index}`}>
            <span><p>{text}</p></span>
        </div>
    )
}

export default MenuCard; 