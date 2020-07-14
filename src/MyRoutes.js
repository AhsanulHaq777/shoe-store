import React from 'react';
import {Routes, Route} from 'react-router';
import Home from './Components/Home';
import NavBar from './Components/Navbar';
import Shoes from './Components/Shoes';

function MyRouteConfig() {
    return(
        <div>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/shoes" element={<Shoes />}></Route>
            </Routes>
        </div>
    );
}
export default MyRouteConfig;