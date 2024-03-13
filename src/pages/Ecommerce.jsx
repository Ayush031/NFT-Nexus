import React from 'react'
import BrandCarousel from '../components/BrandCarousel.jsx';

import TrendingMerch from '../components/TrendingMerch.jsx';
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

import thm1 from '../assets/Merch/thm1.webp'
import thm2 from '../assets/Merch/thm2.jpg'
import thm3 from '../assets/Merch/thm3.jpg'
import thm4 from '../assets/Merch/thm1.avif'
import thm5 from '../assets/Merch/thm2.webp'

import b1 from '../assets/Brands/b1.webp'
import b2 from '../assets/Brands/b2.webp'
import b3 from '../assets/Brands/b3.webp'
import b4 from '../assets/Brands/b4.webp'
import b5 from '../assets/Brands/b5.webp'
import b6 from '../assets/Brands/b6.webp'

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
        { img: thm1, name: "Tony Stark" },
        { img: thm2, name: "Scarlett Johnson" },
        { img: thm3, name: "Spider Man" },
        { img: thm4, name: "Captain America" },
        { img: thm5, name: "Hulk" },
    ]

    const brands = [
        b1, b2, b3, b4, b5, b6
    ]

    return (
        <>
            <div className='pl-10 pr-10'>
                {/* <TrendingMerch /> */}
                <FeaturedThemes /> 
                <FeaturedAvengers avengers={avengers} />
                {/* <BrandCarousel brands={brands}  /> */}
                <FeaturedProducts products={products} />
            </div>
        </>
    )
}

export default Ecommerce