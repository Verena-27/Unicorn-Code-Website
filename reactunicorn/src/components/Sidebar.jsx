
import '../App.css';
import React from "react";
import { SideBarData } from './SideBarData';

function Sidebar(){
    return(
        <div className="Sidebar">
            <ul className="SidebarList">
            {SideBarData.map((val, key)=>{
                    return(
                        <li 
                        key={key} 
                        className="row" 
                        id={window.location.pathname == val.link ? "active": ""}
                        onClick={() => {window.location.pathname = val.link}}>
                            <div>{val.title}</div>
                        </li>
                    )
                })}
             </ul>
        
        </div>
    )
}

export default Sidebar;