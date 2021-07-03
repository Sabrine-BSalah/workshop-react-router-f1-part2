import React, { useState } from 'react'
import { listProducts } from '../Data'

import ProductCard from './ProductCard'

const Products = () => {

    const [products, setProducts] = useState(listProducts);
    // console.log(listProducts)

    return (
        <div className="productsContent">
            <h2>This is the Page Products</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum harum nobis deleniti possimus,
                suscipit, ipsam eligendi aut ipsa consectetur excepturi eaque? Repudiandae dolor saepe,
                quaerat adipisci praesentium ut vel sunt aliquam esse hic, natus unde. Sequi deserunt
                aperiam maxime illum facere, accusantium aliquam magni architecto temporibus nihil.
                Reiciendis saepe perspiciatis rerum modi voluptatem doloribus soluta exercitationem
                assumenda corrupti ea? Dolores, eligendi. Doloribus sequi, corporis mollitia illo
                deserunt quaerat quia est quos. Voluptatibus ea dicta neque. Repellendus numquam
                voluptatibus modi consequatur expedita! Excepturi, ipsum. Deserunt corporis, magni,
                aspernatur atque corrupti ipsa veritatis ducimus architecto voluptatibus repudiandae
                ipsam consectetur officia suscipit consequatur.</p>

            <hr />
            <div className="listProducts">
                {
                    products.map(product =>
                        <ProductCard key={product.id} product={product} />
                    )
                }
            </div>
        </div>
    )
}

export default Products
