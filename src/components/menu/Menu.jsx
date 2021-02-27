import React from 'react';
import './menu.scss'
import MenuCard from './MenuCard';

const Menu = ({ scrollTo, featuredMatchRef }) => (
    <section className="menu">
        <div className="menu--container">
            <div className="menu--flower">
                <div onClick={() => scrollTo(featuredMatchRef)} className="menu--petal p1"><span><p>Neste kamp</p></span></div>
                <div className="menu--petal p3"><span><p>Resultater</p></span></div>
                <MenuCard index={5} text="Kampoppsett" />
            </div>
        </div>
    </section>
)

export default Menu; 