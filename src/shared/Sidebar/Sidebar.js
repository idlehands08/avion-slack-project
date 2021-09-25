import React, { useState } from 'react';
import { NavLink, useHistory } from "react-router-dom";
import { VscTriangleRight, VscTriangleDown } from 'react-icons/vsc';
import { TiMessages, TiMessage } from 'react-icons/ti';
import { FaRegUser } from 'react-icons/fa';
import style from './Sidebar.scoped.css';


function Sidebar ({ routes }) {
    let history = useHistory()
    const [isToggled, setIsToggled] = useState(false);

    const NavHeader = () => {
        return (
            <header className="d-flex align-middle">
                Avion Slack
            </header>
        );
    }

    const handleToggling = () => {
        setIsToggled(!isToggled)
    }

    const showCloseIcon = () => {
        console.log('hovered')
    }

    const setHistory = () => {
        history.push(window.location.pathname)
    }

    return (
        <div>
            <nav>
                <NavHeader />
                <NavLink to="/" exact activeClassName={style.isActive} onClick={setHistory}>
                    <TiMessage /> Threads
                </NavLink>
                <NavLink to="/shared" exact activeClassName={style.isActive} onClick={setHistory}>
                    <TiMessages /> All DMs
                </NavLink>
                <div className="parent-navlink" onClick={handleToggling}>
                    <div className="d-flex align-middle parent-navlink-item">
                        { !isToggled ? 
                            <VscTriangleRight className="vsc-triangle" /> :
                            <VscTriangleDown className="vsc-triangle" />
                        }
                        Direct Messages
                    </div>
                    { isToggled &&
                        <div>
                            <NavLink 
                                onMouseEnter={showCloseIcon} 
                                to={`recipient/1`} 
                                exact activeClassName={style.isActive} 
                                className="children-item">
                                <FaRegUser /> Geoff
                            </NavLink>
                            <NavLink 
                                to={`recipient/2`} 
                                exact 
                                activeClassName={style.isActive} 
                                className="children-item">
                                <FaRegUser /> Sean
                            </NavLink>
                        </div>
                    }
                </div>
            </nav>
        </div>
    )
}

export default Sidebar;
