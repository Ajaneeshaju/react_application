import React from 'react'
import './Banner.css'
import { Carousel } from 'react-bootstrap'
import img3 from './images/right-arrow.png'
import img4 from './images/bread2.png'
import img5 from './images/left-arrow.png'
import img6 from './images/wishlist.png'
import img7 from './images/compare.png'
import Button from '@restart/ui/esm/Button'

function Banner() {
    return (
        <div>
            <div className="row" >
                <div className="col-4">
                    <a href='click'>Home</a>
                    <a href='click'>   Groceries</a>
                    <a href='click'>   Bread and Baked Goods</a>

                </div>
                <div className="col-4">
                    <p >The Essential Baking Company Sunny Seeded White</p>

                </div>

            </div>

            <div className="row">
                <div className="col-6 ">
                    <img src={img5} alt="" className="arrow" />

                    <img src={img4} alt="" className="bread" />
                    <img src={img3} alt="" className="arrow" />
                   

                </div>
                <div className="col-6">
                    <h3 className="quote">The Essential Baking Company Sunny Seeded White - Sunny Seeded White - Case of 6 - 14 oz.</h3>
                    <div className="fav">
                        <h6 className="sold">Sold by:<span>Essential Baking Company</span></h6>
                        <img src={img6} alt="" className="wishlist " />
                        <h6 className="sold">Add to Favorites</h6>
                        <img src={img7} alt="" className="compare " />


                    </div>
                    <hr />
                    <div className="num">
                        <h6>SKU#: 1553759</h6>
                        <h6>UPC: 813305011998</h6>
                    </div>
                    <hr />

                    <div className="case">
                        <h6>Case Quantity</h6><Button className="button1">case of 6</Button>
                        <Button className="button2">case of 6</Button>

                    </div>
                    <div className="size">
                        <h6>Size</h6>                        <Button className="button3">12 OZ</Button>
                        <Button className="button1">14 0z</Button>

                    </div>
                    <hr />
                    <div className="price">
                        <h3 >$40.05</h3><p>Sale Price</p>
                        <h4 className="sale-price"><strike>$49.14</strike></h4><p className="sale-price">Wholesale Price</p>
                    </div>

                    <div className="qty">
                        <p>Qty</p>
                        <Button className="button6">-</Button>
                        <Button className="button5">1</Button>
                        <Button>+</Button>
                        <Button className="button7">Add to Cart</Button>
                        <p className="shopping">Add to Shopping List</p>
                    </div>
                    <hr />
                    <div className="policy">
                        <p className="policy">Essential Baking Company Policies:</p><a href="">Shipping</a>                    <a href="">Returns</a>

                    </div>


                </div>

            </div>




        </div>
    )
}

export default Banner