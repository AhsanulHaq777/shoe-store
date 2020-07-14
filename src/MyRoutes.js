import React from 'react';
import {Routes, Route} from 'react-router';

function MyRouteConfig() {
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home />}></Route>
            </Routes>
        </div>
    );
}
export default MyRouteConfig;