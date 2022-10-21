import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href='http://localhost:3000/home'><h2>INSURANCE - Claims</h2></a>
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
                            <NavLink to="/claim/1" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Claim1</NavLink>
                        </li>
                        <li>
                            <NavLink to="/claimedit/1" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>ClaimEdit</NavLink>
                        </li>
                    </ul>
                </nav>

                <div className="collapse navbar-collapse" id="mynavbar">
                    <form className="d-flex">
                        <input className="form-control me-2" type="text" placeholder="Search" />
                        <button className="btn btn-primary" type="button">Search</button>
                    </form>
                </div>
            </div>
           
        </nav> 

            
    );
}

export default Header;
