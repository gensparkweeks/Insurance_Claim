import React from 'react';
import { NavLink , useNavigate} from 'react-router-dom';

const Header = () => {

    const navigate = useNavigate()

    const onLogout = () => {
        localStorage.setItem('auth', false)
        navigate('/home')
    }

    const onLogin = () => {
        navigate('/login')
    }




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
                            <NavLink to="/claim/1" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Claim1</NavLink>
                        </li>
                        <li>
                            <NavLink to="/claimedit/1" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>ClaimEdit</NavLink>
                        </li>
                    </ul>
                </nav>

                {/* <div className="collapse navbar-collapse" id="mynavbar"> */}
                <nav id="menu">
                    <ul className="list-inline">
                        <li>
                            {/* {
                                !localStorage.getItem('auth')  ? */}
                                    <button onClick={onLogout} className="btn btn-primary">Logout</button>   
                                {/* : */}
                                    <button onClick={onLogin} className="btn btn-primary">Login</button>
                            {/* } */}
                            
                        </li>
                        
                    </ul>
                </nav>
                   
                {/* </div> */}
            </div>
           
        </nav> 

            
    );
}

export default Header;
