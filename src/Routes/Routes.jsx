import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import APropos from '../pages/APropos';
import Error from '../pages/Error';

function RoutesAll() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route exact path="/home" element={<Home />} />
                <Route exact path="/apropos" element={<APropos />} />
                <Route exact path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    )
}
export default RoutesAll;

