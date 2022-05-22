import React from 'react'
import './Header.css'
import img8 from './images/gluten-free.png'
import img9 from './images/vegan.png'
import img10 from './images/non.png'
import img11 from './images/falr-trade.png'
import img12 from './images/organic.png'
import img13 from './images/image15.png'
import img14 from './images/image16.png'
import img15 from './images/image17.png'
import { Card, Button } from 'react-bootstrap'



function Header() {
    return (
        <div className="container">
            <h5 className="description">Product Description</h5>
            <hr />
            <p className="about">The Essential Baking Company Sunny Seeded White Bread gives your sandwich a robust natural taste packed with rich sunflower and flax seed flavor. Made with all-natural ingredients, this delicious bread works well for a signature blt or club sandwich. Prepared to deliver a nourishing and satisfying experience, this scrumptious white bread elevates a simple sandwich into a gourmet masterpiece. Each bag holds 14 oz. of sunny seeded white bread.</p>

            <h5 className="details">Product Details</h5>
            <hr />

            <div className="row">
                <div className="col-4">
                    <p className="ingrident">Ingredients</p>
                    <p className="about">Bamboo Fiber, Calcium Sulfate, Egg, Egg white, Enzyme, Filtered water, Granulated sugar, Green pea protein, High Oleic Safflower Oil, Invert sugar, Modified Cellulose, Orange Citrus Fiber, Pear Juice Concentrate, Rice Flour, Salt, Sunflower Seeds, Tapioca Starch, Vegetable Glycerin, White & Sweet Rice, Whole Egg, Xanthan Gum, Yeast.</p>
                </div>
                <div className="col-3">
                    <p>Additional Information</p>

                    <ul className="about">
                        <li> UPC: 813305011998</li>
                        <li> Dairy Free</li>
                        <li> Kosher</li>
                    </ul>
                </div>
                <div className="col-3">
                    <p></p>
                    <ul className="about">
                        <li>  Brand Name: Essential Baking Company</li>
                        <li>   Gluten Free</li>
                        <li>  Pack: 6</li>

                    </ul>
                </div>
                <div className="col-2">
                    <p></p>
                    <ul className="about">
                        <li>   Organic </li>
                        <li> Wheat Free </li>
                        <li>  Selling Unit: Case</li>

                    </ul>
                </div>



            </div>

            <div className="img8">
                <img src={img8} alt=""></img>
                <img src={img9} alt=""></img>
                <img src={img10} alt=""></img>
                <img src={img11} alt=""></img>
                <img src={img12} alt=""></img>




            </div>
            <hr />

            <h5 className="name">More from Essential Baking Company</h5>

            <div className="carde">
                <div className="carde1">
                    <Card style={{ width: '15rem' }}>
                        <Card.Img variant="top" src={img13} />
                        <Card.Body>
                            <Card.Text>
                                Essential Baking Company - Bread Loaf Ancient Grain
                            </Card.Text>
                            <Button className="add btn btn-success">Add to Cart</Button>
                        </Card.Body>
                    </Card>

                </div>
                <div className="carde1">
                    <Card style={{ width: '15rem' }}>
                        <Card.Img variant="top" src={img14} className="img_size" />
                        <Card.Body>
                            <Card.Text>
                                Essential Baking Company - Loaf - Brown Rice                            </Card.Text>
                            <Button className="add btn btn-success">Add to Cart</Button>
                        </Card.Body>
                    </Card>

                </div>
                <div className="carde1">
                    <Card style={{ width: '15rem' }}>
                        <Card.Img variant="top" src={img15} className="img_size" />
                        <Card.Body>
                            <Card.Text>
                                Essential Baking Company - Loaf - White Rice - 16 oz                            </Card.Text>
                            <Button className="add btn btn-success">Add to Cart</Button>
                        </Card.Body>
                    </Card>

                </div>
                <div className="carde1">
                    <Card style={{ width: '15rem' }} >
                        <Card.Img variant="top" src={img14} className="img_size" />
                        <Card.Body>
                            <Card.Text>
                                Essential Baking Company - Rye - Whole
                            </Card.Text>
                            <Button className="add btn btn-success">Add to Cart</Button>
                        </Card.Body>
                    </Card>

                </div>

 </div>


        </div>


    )
}

export default Header