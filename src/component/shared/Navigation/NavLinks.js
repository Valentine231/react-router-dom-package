 import React from "react";
 import {NavLink} from "react-router-dom";

 import './NavLinks.css';

  
 const NavLInks = props => {
     return(
     <ul className="nav-links">
        <li>
        <NavLink to='/User' exact='true'>ALL USER</NavLink>
        </li>

        <li>
        <NavLink to='/u1/place'>MY PLACES</NavLink>
        </li>

        <li>
        <NavLink to='/place/new'>ADD PLACE</NavLink>
        </li>

        <li>
        <NavLink to='/auth'>AUTHENTICATE</NavLink>
        </li>
     </ul>
     );
 };

 export default NavLInks;