import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {

    return (
        
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href='http://localhost:3000/home'><h3>INSURANCE - Claims</h3></a>
                {/* <!-- MENU --> */}
                <nav id="menu">
                    <ul className="list-inline">
                        <li>
                            <NavLink to="/home" className= {({ isActive }) => (isActive ? 'active' : 'inactive')}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/claimlist" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Claims</NavLink>
                        </li>
                        <li>
                            {/* <NavLink to="" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>About</NavLink> */}
                            
                        </li>
                    </ul>
                </nav>

                {/* <div className="collapse navbar-collapse" id="mynavbar">
                    
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-primary" type="submit">Search</button>
                    </form>
                            
                </div> */}
            </div>
           
        </nav> 

            
    );
}

export default Header;
