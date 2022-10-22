import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Claim from './Claim'
import ClaimList from './ClaimList';
import Header from './Header';
import Home from './Home';
import Footer from './Footer'
import ClaimEdit from './ClaimEdit';
import Test from './Test';
import ClaimTrack from './ClaimTrack';
import Pdf from './Pdf';

import Login from './Login'
import Logout from './Logout'

const Router = () => {
    return (
        <div>
            <BrowserRouter>

                <Header />
                
                <Routes>
                

                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/home' element={<Home />} />

                    <Route exact path='/claimlist' element={<ClaimList />} />
                    
                    <Route exact path='/claimedit/:id/:user' element={<ClaimEdit />} />
                    <Route exact path='/claimtrack/:id/:user' element={<ClaimTrack />} />
                    
                    <Route exact path='/pdf/:file' element={<Pdf />} />
                    <Route exact path='/test' element={<Test />} />

                    <Route exact path='/login' element={<Login />} />
                    <Route exact path='/logout' element={<Logout />} />

                    <Route exact path='/claim/:id' element={<Claim />} />
                    <Route exact path='*' element={<ClaimList />} />


                </Routes>

                <Footer />      
            
            </BrowserRouter>          
        </div>
    );
}

export default Router;
