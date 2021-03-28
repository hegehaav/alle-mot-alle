import React from 'react';
import './menu.scss';

const Menu = ({ scrollTo, featuredMatchRef, scoreboardRef, tournamentRef }) => (
    <section className='menu'>
        <div className='title--container'>
            <h1 className='title'>BEKK MOT BEKK</h1>
        </div>
        <div className='menu--container'>
            <div className='menu-flower--container'>
                <div className='menu--flower'>
                    <div
                        onClick={() => scrollTo(featuredMatchRef)}
                        className='menu--petal p1'
                    >
                        <span>
                            <p>Neste kamp</p>
                        </span>
                    </div>
                    <div
                        onClick={() => scrollTo(scoreboardRef)}
                        className='menu--petal p3'
                    >
                        <span>
                            <p>Resultater</p>
                        </span>
                    </div>
                    <div
                        onClick={() => scrollTo(tournamentRef)}
                        className='menu--petal p5'
                    >
                        <span>
                            <p>Turnering</p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Menu;
