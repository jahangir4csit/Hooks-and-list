import React from 'react';

const ProductDetails = props =>{
    return(
        <div>
            <h3>{props.data.name}</h3>
            <p>Price: {props.data.price}</p>
            <p>Description: {props.data.description}</p>
            <p>Category: {props.data.category}</p>
            
        </div>
    )
}
export default ProductDetails;