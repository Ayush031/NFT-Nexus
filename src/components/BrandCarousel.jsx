import React from 'react'
import { Carousel } from "@material-tailwind/react";

const BrandsCarousel = ({ brands }) => {
    return (
        <>
            <div className="text-5xl text-center m-5 font-bold text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-orange-500">Featured Brands (auto carousel)</div>
            <div className="">
                {brands.map((brand) => (
                    <Carousel transition={{ duration: 2 }} className="rounded-xl">
                        <img src={brand} className='h-full w-full object-cover' />
                    </Carousel>
                ))}
            </div>
        </>
    );
};




export default BrandsCarousel;
