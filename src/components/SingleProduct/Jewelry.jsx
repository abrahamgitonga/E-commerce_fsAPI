import React, { useEffect, useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';
// import "../../App.css";


const ShopProducts = (props) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            <h2>Jewelry</h2>
            <div  className="row container">
                {
                    products.map(product => <SingleProduct
                        key={product.id}
                        product={product}
                    ></SingleProduct>)
                }
            </div>

        </div>
    );
};

export default ShopProducts;