import React from "react";

function Product(props) {

    function giveDetails(e) {
        e.preventDefault();
        alert(props.product.description)
    }

    return(
        <div className="indivProd">
            <h4>{props.product.name}</h4>
            <button onClick={giveDetails}>
                {props.product.price.toLocaleString("en-US", { style: "currency", currency: "USD" })}
            </button>
        </div>
    )
}

export default Product;