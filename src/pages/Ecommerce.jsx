import React from 'react'

import FeaturedThemes from '../components/FeaturedThemes.jsx'
import FeaturedAvengers from '../components/FeaturedAvengers.jsx'
import FeaturedProducts from '../components/FeaturedProducts.jsx';

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

import b1 from '../assets/Brands/b1.webp'
import b2 from '../assets/Brands/b2.webp'
import b3 from '../assets/Brands/b3.webp'
import b4 from '../assets/Brands/b4.webp'
import b5 from '../assets/Brands/b5.webp'
import b6 from '../assets/Brands/b6.webp'

import a3 from '../assets/a3.jpg'
import a8 from '../assets/a8.jpg'
import a10 from '../assets/a10.jpg'
import a12 from '../assets/a12.jpg'
import a13 from '../assets/a13.jpg'



function Ecommerce() {
    const products = [
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

    const avengers = [
        { img: a8, name: "Hawkeye" },
        { img: a13, name: "Black Widow" },
        { img: a3, name: "Iron Man" },
        { img: a12, name: "Captain America" },
        { img: a10, name: "Hulk" },
    ]

    return (
        <>
        
            <div className='p-10'>
                <FeaturedThemes /> 
                <FeaturedAvengers avengers={avengers} />
                <FeaturedProducts products={products} />
            </div>
        </>
    )
}

export default Ecommerce