import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Bridge from './Bridge';
import Claim from './Claim'

const Router = () => {
    return (
        <div>
            <BrowserRouter>
            
                <Routes>

                    <Route exact path='/' element={<Bridge />} />

                    <Route exact path='/claim/:id' element={<Claim />} />

                </Routes>
            
            </BrowserRouter>
            
        </div>
    );
}

export default Router;