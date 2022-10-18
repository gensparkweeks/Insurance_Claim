import React from 'react';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" >Insurance App - Claim module</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="mynavbar">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                        <a className="nav-link" >Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" >Link</a>
                    </li>
                </ul>
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
