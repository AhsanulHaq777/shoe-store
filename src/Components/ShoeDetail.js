import React from 'react';
import { useParams } from 'react-router-dom';
import Shoe from './../Shoe.json';

function ShoeDetail() {
    const { id } = useParams();
    const shoe = Shoe[id];
    if(!shoe){
        return <h2>Product not found!</h2>
    }
    return (
        <div>
            <h2>Detail of the selected shoe</h2>
            <div>
                <h4>{shoe.name}</h4>
                <img src={shoe.img} alt={shoe.name} />
            </div>
        </div>
    );
}
export default ShoeDetail;