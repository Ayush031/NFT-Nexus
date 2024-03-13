import React from 'react'
import { Product } from '../components/Product'

import m1 from '../assets/Merch/m1.jpg'
import m2 from '../assets/Merch/m2.jpg'
import m3 from '../assets/Merch/m3.jpg'
import m4 from '../assets/Merch/m4.jpg'
import m5 from '../assets/Merch/m5.jpg'
import m6 from '../assets/Merch/m6.jpg'
import m7 from '../assets/Merch/m7.jpg'
import m8 from '../assets/Merch/m8.jpg'
import m9 from '../assets/Merch/m9.jpg'
import m10 from '../assets/Merch/m10.jpg'
import m11 from '../assets/Merch/m11.jpg'
import m12 from '../assets/Merch/m12.jpg'
import m13 from '../assets/Merch/m13.jpg'
import m14 from '../assets/Merch/m14.jpg'

function Ecommerce() {
    const product = [
        {
            img: m1,
            name: "Infinity Mint",
            price: 799,
        },
        {
            img: m2,
            name: "Asgardian Tokens",
            price: 899,
        },
        {
            img: m3,
            name: "Stark Ledger",
            price: 599,
        },
        {
            img: m4,
            name: "NFTvengers Unite",
            price: 1449,
        },
        {
            img: m5,
            name: "Captain Crypto",
            price: 1299,
        },
        {
            img: m6,
            name: "Hulk Hodl",
            price: 1249,
        },
        {
            img: m7,
            name: "Thor's Blockchain Hammer",
            price: 1569,
        },
        {
            img: m8,
            name: "Widow's Web3",
            price: 1369,
        },
        {
            img: m9,
            name: "Vision's Vault",
            price: 1789,
        },
        {
            img: m10,
            name: "Quantum Collectibles",
            price: 1899,
        },
        {
            img: m11,
            name: "Hawkeye's Holders",
            price: 1999,
        },
        {
            img: m12,
            name: "Loki's Loot",
            price: 2299,
        },
        {
            img: m13,
            name: "Ant-Man's Assets",
            price: 2899,
        },
        {
            img: m14,
            name: "Guardians of the Gallery",
            price: 3999,
        }
    ]    

    return (
        <>
            <div className='h-[88%] pl-10 pr-10'>
                <div>                    
                    <div className="text-5xl text-center m-5 font-bold text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-orange-500" >Trending Merch</div>
                </div>
                <div>
                    <p>Featured Themes</p>
                </div>
                <div>
                    <p>featured Categories</p>
                    <div>Iron Man</div>
                    <div>Scarlett Johnson</div>
                    <div>Doctor Strange</div>
                    <div>Captain America</div>
                    <div>Hulk</div>
                </div>
                <div>
                    <p>Featured Brands (auto carousel)</p>
                </div>
                <div>
                    <div className="text-5xl text-center m-5 font-bold text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-orange-500" >Featured Products</div>                    

                    <div className='flex flex-wrap gap-8 justify-center'>
                        {product.map(prd => (
                            < Product image={prd.img} name={prd.name} price={prd.price} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Ecommerce