import React from 'react'
import { Product } from './Product.jsx'

function FeaturedProducts({ products }) {
    return (
        <>
            <div className="text-5xl text-center m-5 font-bold text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-orange-500" >Featured Products</div>
            <div className='flex flex-wrap gap-8 justify-center'>
                {products.map(prd => (
                    <Product image={prd.img} name={prd.name} price={prd.price} />
                ))}
            </div>
        </>
    )
}

export default FeaturedProducts