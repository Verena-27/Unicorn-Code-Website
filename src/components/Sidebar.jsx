
import '../App.css';
import React from "react";
import { NavLink } from 'react-router-dom';
import { SideBarData } from './SideBarData';
import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//id={window.location.pathname == val.link ? "active": ""}
//onClick={() => {window.location.pathname = val.link}}
function Sidebar(){
    const [isOpen, setIsOpen] = useState(true);
    const togglesidebar = () => {
        setIsOpen(!isOpen);
    }
    return(
        <div>
        {/* hamburger menu */}
        <button className={`hamburger ${isOpen ? "open" : "closed"}`} onClick={togglesidebar}>
            <div className='line'></div>
            <div className='line'></div>
            <div className='line'></div>
        </button>
            {/* sidebar */}
            <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
                <ul className="SidebarList">
                {SideBarData.map((val, key)=>{
                        return(
                            <li 
                            key={key} 
                            className="row" >
                                <NavLink to={val.link}>{val.title}</NavLink>
                            </li>
                        )
                    })}
                </ul>
            
            </div>
            {/* Overlay */}
            <div className={`overlay ${isOpen ? "visible" : ""}`} onClick={togglesidebar}>
            </div>
        </div>
    )
}

export default Sidebar;