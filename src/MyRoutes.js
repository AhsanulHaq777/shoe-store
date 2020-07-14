import React from 'react';
import {Routes, Route} from 'react-router';
import Home from './Components/Home';
import NavBar from './Components/Navbar';

function MyRouteConfig() {
    return(
        <div>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />}></Route>
            </Routes>
        </div>
    );
}
export default MyRouteConfig;