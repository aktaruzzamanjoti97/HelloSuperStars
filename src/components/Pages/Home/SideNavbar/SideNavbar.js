import React from 'react'
import "../../../CSS/SideNavbar.css";
import { SidebarData} from './SidebarData';

function SideNavbar () {
          return ( 
                    <div className="Sidebar" style={{ background: "#343434",marginTop:"50px",borderRadius:"5px"}}>
                              <ul className="SidebarList">
                              {SidebarData.map((val, key) => {
                                        return(
                                                  <li key={key} className="row"
                                                  // id={window.location.pathname=val.link ? 'active' : ''}
                                                  onClick={() => {window.location.pathname = val.link;}} >
                                                  {""}
                                                  <div id="icon" style={{ color:"#F0E25E" }}>{val.icon}</div> <div id="title" style={{ color:"#F0E25E" }}>{val.title}</div>
                                                  </li>
                                        );
                              })}
                              </ul>
                    </div>
          )
}

export default SideNavbar;
