import React, { useState } from 'react';
import {Link, NavLink} from 'react-router-dom';
import { SidebarMenu } from './SidebarMenu';
import './Sidebar.css'
import { IconContext } from 'react-icons';
import logo from "../../../../img/nature.jpg";
import * as FaIcons from "react-icons/fa";

function Sidebar(props) {
    const [sidebar, setSidebar] = useState(true);
    const showSidebar = () => {
        props.sidebarActiveStatus(!sidebar)
        setSidebar(!sidebar);
    }

    return (
        <>
            <IconContext.Provider value={{ color: '#000000', size: '25px' }}>
                <nav className="navbar navbar-light" style={{backgroundColor: '#324AB3', zIndex: 99999999}}>
                    <Link className="navbar-brand" to="#">
                        <img
                            src={logo}
                            width= "100"
                            height="50"
                            className="d-inline-block align-top"
                            alt=""
                            loading="lazy"
                        />
                    </Link>
                    <form className="form-inline">
                        <Link to="#" className="menu-bars">
                            <FaIcons.FaBars onClick={showSidebar} />
                        </Link>
                    </form>
                </nav>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
                    <ul className="nav-menu-items">
                        {SidebarMenu.map((item, index) => {
                            return (
                                <li
                                    key={index}
                                    className={item.cName}
                                >
                                    <NavLink activeClassName="active-tab" to={item.path}>
                                        <span>{item.title}</span>
                                    </NavLink>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    );

}

export default Sidebar;
