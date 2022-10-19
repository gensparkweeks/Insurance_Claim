import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Claim from './Claim'
import ClaimList from './ClaimList';
import Header from './Header';
import Home from './Home';
import Footer from './Footer'
import ClaimEdit from './ClaimEdit';

const Router = () => {
    return (
        <div>
            <BrowserRouter>

                <Header />
                
                <Routes>

                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/home' element={<Home />} />
                    <Route exact path='/claimlist' element={<ClaimList />} />
                    
                    <Route exact path='/claimedit/:id' element={<ClaimEdit />} />
                    

                    <Route exact path='/claim/:id' element={<Claim />} />

                </Routes>

                <Footer />
                
            </BrowserRouter>
            
        </div>
    );
}

export default Router;
