import React from "react";

function Product(props) {
    return(
        <div className="indivProd">
            <h4>{props.product.name}</h4>
            {props.product.price.toLocaleString("en-US", { style: "currency", currency: "USD" })} - {props.product.description}
        </div>
    )
}

export default Product;