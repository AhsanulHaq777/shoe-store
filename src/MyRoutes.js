import React from 'react';
import {Routes, Route} from 'react-router';
import Home from './Components/Home';
import NavBar from './Components/Navbar';
import Shoes from './Components/Shoes';
import About from './Components/About';
import ShoeDetail from './Components/ShoeDetail';
import NotFound from './Components/NotFound';
import WomenShoes from './Components/WomenShoes';
import WomenShoeDetail from './Components/WomenShoeDetail';

function MyRouteConfig() {
    return(
        <div>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route exact path="/shoes" element={<Shoes />}></Route>
                <Route path="/shoes/:id" element={<ShoeDetail />}></Route>
                <Route path="/womenshoe" element={<WomenShoes />}></Route>
                <Route path="/womenshoe/:id" element={<WomenShoeDetail />}></Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </div>
    );
}
export default MyRouteConfig;