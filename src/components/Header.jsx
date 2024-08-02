
import React from "react";
import '../css/Navbar.css'
 export function CustomNavbar({links}) {
    
 
    return (
        <nav className="navbar">
          <div className="navbar-container">
            <div className="navbar-brand">
              <a href="#">WebSiteName</a>
            </div>
            <ul className="navbar-nav">
             
              {links.map((element, index) => (
                <li className="nav-item" key={index}><a href="#">{element}</a></li>
              ))}
            </ul>
            <form className="navbar-form">
              <input type="text" placeholder="Search" className="navbar-input"/>
              <button type="submit" className="navbar-button">Search</button>
            </form>
          </div>
        </nav>
      );
    }

export default CustomNavbar;
