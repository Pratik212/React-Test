import React, { useState } from 'react';
import {Link, NavLink} from 'react-router-dom';
import { SidebarMenu } from './SidebarMenu';
import './Sidebar.css'
import { IconContext } from 'react-icons';
import Header from "../header/Header";

function Sidebar() {


    return (
        <>
            <IconContext.Provider value={{ color: '#000000', size: '25px' }}>
                <Header/>
                <nav className= 'nav-menu'>
                    {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
                    <ul className="nav-menu-items" >
                        {SidebarMenu.map((item, index) => {
                            return (
                                <li
                                    key={index}
                                    className={item.cName}

                                >
                                    <NavLink  to={item.path}>
                                        {item.icon}
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
