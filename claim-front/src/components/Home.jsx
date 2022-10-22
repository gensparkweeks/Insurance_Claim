import React from 'react';
import { useParams} from 'react-router-dom';

const Home = () => {

    const {auth} = useParams()

    console.log(auth)

    if (auth === 0){
        localStorage.setItem('auth', false); 
        console.log('paso auth')
    }
    

    return (
        <div className='home'>
            <h1 className='homeh1'>Welcome to the Insurance App</h1>
        </div>
    );
}

export default Home;
