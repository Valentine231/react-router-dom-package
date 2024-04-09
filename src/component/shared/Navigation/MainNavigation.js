 import React,{ useState } from "react";
import {Link} from "react-router-dom"; 

import MainHeader from "./MainHeader";
import NavLInks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import Backdrop from "../UlElement/Backdrop";
 import './MainNavigation.css';



 const MainNavigation = props => {
     const [drawerisopen,setdrawerisopen]=useState(false);

     const opendrawerHandler = () => {
        setdrawerisopen(true);
     }

     const closeDrawerHandler = () => {
        setdrawerisopen(false);
     }

    return (
        <React.Fragment>
    {drawerisopen && <Backdrop onClick={closeDrawerHandler} />}
        
        <SideDrawer show={drawerisopen} onClick={closeDrawerHandler}>
        <nav className="main-navigation__ drawer-nav">
          <NavLInks/> 
        </nav>
    </SideDrawer> 
    
    
    <MainHeader>
        <button className="main-navigation__menu-btn" onClick={opendrawerHandler}>

            <span/> 
            <span/> 
            <span/>
            
            </button>
            <h1 className="main-navigation__title">
              <Link to='/User'>Yourplaces</Link> 
            </h1>
            <nav className="main-navigation__header-nav">
                <NavLInks/>
            </nav>
    </MainHeader>
    </React.Fragment>
    );
 };

 export default MainNavigation;