import Button from '@restart/ui/esm/Button'
import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className="container">
            <div className="align">
                <div className="row">

                    <div className="col-3">
                        <h6>ABOUT</h6>
                        <p>About Company</p>
                        <p>Become a Supplier</p>
                        <p>Careers</p>
                        <p>Sitemap</p>

                    </div>
                    <div className="col-3">
                        <h6>SHOP</h6>
                        <p> Bulk   </p>
                        <p>Health and Beauty </p>
                        <p>Groceries</p>
                        <p>Household</p>
                        <p> Vitamins and Supplements</p>
                    </div>

                    <div className="col-3">
                        <h6>CUSTOMER CARE </h6>
                        <p> FAQs  </p>
                        <p>Shipping and Delivery</p>
                        <p> Claims and Returns</p>
                        <p> Contact Us</p>
                        <p>Create New Account</p>
                    </div>

                    <div className="col-3">
                        <h6>SIGN UP FOR EMAIL  </h6>
                        <p>Be the first to hear about promotions, new products, trends, and more.</p>
                        <input className="text" type="text" placeholder="Email Address"/><Button className="btn btn-warning">SUBSCRIBE</Button>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default Footer