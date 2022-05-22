import React from 'react'
import './Navbar.css'
import img1 from './images/tik.png'
import img2 from './images/falr-trade.png'
import img16 from './images/user.png'
import img17 from './images/shipping-fast.png'
import img18 from './images/wishlist.png'
import img19 from './images/shopping-cart.png'
import Button from '@restart/ui/esm/Button'


function Navbar() {
  return (
    <div className='main'>
      <div className='color'>
        <h6><img src={img1} alt="" />   Free shipping for orders above $150</h6>
        <h6><img src={img1} alt="" />2 day Delivery</h6>
        <h6><img src={img1} alt="" />Exciting Offers</h6>

      </div>

      <div className="nav">
        <img className='icon' src={img2} alt="" />

        <input className="search" type="text" placeholder="search here" /> <Button className="search_icon">search</Button>
<img src={img16} alt="" className="user_icon"/>
<img src={img17} alt="" className="user_icon"/>
<img src={img18} alt="" className="user_icon"/>
<img src={img19} alt="" className="user_icon"/>



      </div>

      <div className="options" >
        <h6 className="header">Beverages</h6>
        <h6 className="header">Bulk</h6>
        <h6 className="header">Groceries</h6>
        <h6 className="header">Health & Beauty</h6>
        <h6 className="header">Household</h6>
        <h6 className="header">Vitamins & Supplements</h6>
        <h6 className="header">Brands</h6>



      </div>


    </div>



  )
}

export default Navbar
