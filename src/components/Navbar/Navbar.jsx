import React from 'react';
import "../../App.css"


const Navbar = (props) => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-2 p-2">Fake Store</div>
                    <div className="col-md-10 menu-container d-flex">
                        <li className='menu me-2 p-2'>Men clothing</li>
                        <li className='menu me-2 p-2'>Women clothing</li>
                        <li className='menu me-2 p-2'>Electronics</li>
                        <li className='menu me-2 p-2'>Jewelery</li>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Navbar;