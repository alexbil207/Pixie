import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { logOut } from '../store/actions/user-actions';
import logo from '../assets/img/logo2.png';

export const AppHeader = () => {
    const [isNavOpen, setNavOpen] = useState(false);
    const { user } = useSelector(state => state.userModule)
    const dispatch = useDispatch();

    const onToggleNav = () => {
        setNavOpen({ isNavOpen: !isNavOpen });
    }


    const onLogOut = async () => {
        dispatch(logOut());
    }

    return (
        <>
            <header className="main-header">
                <div className="container flex space-between align-center">
                    <span><Link to="/"><img src={logo} className="logo" alt="Logo" /></Link></span>

                    <span>
                        <span className={"fas pointer hamburger-icn" + (isNavOpen ? ' active' : '')} onClick={() => onToggleNav()}></span>
                        <ul className={"clean-list navlinks-container" + (isNavOpen ? "" : " hider")}>
                            <li><NavLink to="/editor" activeClassName="active" onClick={() => onToggleNav()}>Editor</NavLink></li>
                            <li><NavLink to="/template" onClick={() => onToggleNav()}>Templates</NavLink></li>
                            {user &&
                                <>
                                    <li><NavLink to={`/profile/${user._id}`} onClick={() => onToggleNav()} className="intro-profile">Profile</NavLink></li>
                                    <li><NavLink to="/" activeClassName="" onClick={() => onLogOut()}>Logout</NavLink></li>
                                </>
                            }

                            {(!user) &&
                                <li><NavLink to="/profile/login" onClick={() => onToggleNav()}>Login</NavLink></li>}
                        </ul>
                    </span>
                </div>
            </header>
            <div className="pseudo-header"></div>
        </>
    );
}

