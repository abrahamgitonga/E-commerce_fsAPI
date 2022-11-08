import React from 'react';
import ReactModal from '../Modal/Modal';

const SingleProduct = (props) => {
    
    
    return (
        <div className='col-md-4'>
            <div className="card p-3 border">
                <h3 >{props.product.title.slice(0, 11)} </h3>
                <img className='w-50 m-auto' src={props.product.image} alt="" />
                <div className="d-flex justify-content-around">
                 
                    <button className='btn btn-danger'>Delete</button>
                    
                    <ReactModal product={props.product}></ReactModal>
                </div>
            </div>

        </div>
    );
};

export default SingleProduct;