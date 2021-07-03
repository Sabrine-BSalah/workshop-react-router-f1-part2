import React, { useState, useEffect } from 'react'
import { listProducts } from '../Data'
import { Button } from 'react-bootstrap'

const Product = ({ location, match, history }) => {
    // console.log(location.state.description)
    // const { name, description, img } = location.state
    // console.log(typeof match.params.id)

    const [product, setProduct] = useState({});

    useEffect(() => {
        setProduct(listProducts.find(product => product.id === +match.params.id))
    }, [match.params.id]);

    return (
        <div className="productDetails">
            {/* Method 1 */}
            <h2>{product.name}</h2>
            <h3>{product.description}</h3>
            <img src={product.img} alt={product.name} className="productImg" />

            {/* Method 2 */}
            {/* <h2>{name}</h2>
            <h3>{description}</h3>
            <img src={img} alt={name} className="productImg" /> */}

            <Button variant="secondary" onClick={() => history.goBack()}>Go Back</Button>

        </div>
    )
}

export default Product
