
import '../App.css';
import React from "react";
import { NavLink } from 'react-router-dom';
import { SideBarData } from './SideBarData';

import 'bootstrap/dist/css/bootstrap.min.css';

//id={window.location.pathname == val.link ? "active": ""}
//onClick={() => {window.location.pathname = val.link}}
function Sidebar(){
    return(
        <div className="Sidebar">
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
    )
}

export default Sidebar;