import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return(
        <div className="row navbar">
            <div className="col-sm-12 text-sm-end">
                <NavLink className="navlinks" activeClassName exact = "true" to="/"> Home </NavLink>
                
                <NavLink className="navlinks" activeClassName to="/event-handlers"> contact </NavLink>
              
                <NavLink className="navlinks" activeClassName to="/form-validation"> About us </NavLink>
              
                <NavLink className="navlinks" activeClassName to="/class-based-life-cycle-hooks"> cB Lch </NavLink>
              
            </div>
        </div>
    );
}

export default Navigation;