import React from 'react'

const Products = (props) =>{
    return(
        <div className="card product" key={props.productInfo.id}>
            <h3>{props.productInfo.name}</h3>
            <p>{props.productInfo.desc}</p>
            <p>{props.productInfo.price}</p>
            <p>{props.productInfo.category}</p>
            <button onClick={()=>(props.ProductSelect(props.productInfo))} className="btn_product_link">Details</button>
        </div>
    )
}

export default Products