import React from 'react';
import { useNavigate} from 'react-router-dom';
import login from '../statics/images/login.png'
import logout from '../statics/images/logout.png'
import home from '../statics/images/homep1.png'
import homeleft from '../statics/images/homeleft.png'

const Home = () => {

    const auth = localStorage.getItem('auth')
    const name = localStorage.getItem('name')

    const navigate = useNavigate();
        
    const onLogout = () => {
        localStorage.setItem('auth', false)
        navigate('/home')
    }

    const onLogin = () => {
        navigate('/login')
    }

    return (
        <>
           <div className='row mt-1'>
                <div className='col-10'></div>
                <div className='col-1'>
                {
                     auth === 'true' &&  <span>{name}</span>
                }
                </div>
                <div className='col-1'>
                    {/* {
                        auth === 'true' ?
                            
                            <button onClick={onLogout} className="btn btn-secondary">Logout</button>
                        : 
                            <button onClick={onLogin} className="btn btn-secondary">Login</button>
                    } */}

                    {
                        auth === 'true' ?
                            <img onClick={() => onLogout()} src={logout} className="img-thumbnail cursor" width={35} alt="Create" />
                        : 
                        <   img onClick={() => onLogin()} src={login} className="img-thumbnail cursor" width={35} alt="Create" />
                    }
                </div>
            </div>

            <div className='home'>  
                <img src={home} className="img-thumbnail mw-100 h-100 img-home" alt="Home" />  
                <div className='col-2'>.</div>           
            </div>
        </>
    );
}

export default Home;
