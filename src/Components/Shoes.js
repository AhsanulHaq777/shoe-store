import React from 'react';
import Shoe from './../Shoe.json';
import {Link} from 'react-router-dom';

function Shoes() {
    return(
        <div>
            <h2>Here are some Shoes Brands</h2>
            <div>
                {Object.entries(Shoe).map(([shoekey, {name, img}])=>{
                    return(
                    <Link key={shoekey} to={`/shoes/${shoekey}`}>
                        <h4>{name}</h4>
                        <img src={img} alt={name} height={150} />
                    </Link>
                    )
                })}
            </div>
        </div>
    );
}
export default Shoes;