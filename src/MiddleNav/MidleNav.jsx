import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function MidleNav(props) {
    const location = useLocation;
    return (<>
        <div>
            <nav className="nav-mdl">
                <Link className={`list-a ${location.pathname === '/' ? 'active' : ''}`} to={'/'}>All</Link>
                <Link className={`list-a ${location.pathname === '/' ? 'active' : ''}`} to={'/fullstack'}>Full Stack Development</Link>
                <Link className={`list-a ${location.pathname === '/' ? 'active' : ''}`} to={'/datascience'}>Data Science</Link>
                <Link className={`list-a ${location.pathname === '/' ? 'active' : ''}`} to={'/cyber'}>Cyber Security</Link>
                <Link className={`list-a ${location.pathname === '/' ? 'active' : ''}`} to={'/career'}>Career</Link>
            </nav>
        </div>
    </>
    );
}

export default MidleNav;