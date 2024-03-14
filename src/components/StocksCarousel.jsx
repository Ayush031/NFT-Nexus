import React from 'react'
import m1 from '../assets/Merch/thm2.webp'

function StocksCarousel() {
    return (
        <>
            <div className='w-3/4 m-auto' >
                <div className="mt-20">
                    {
                        data.map((d) => (
                            <div className='bg-white h-[450px] text-black rounded-xl' >
                                <div className='rounded-t-xl bg-indigo-500 flex justify-center items-center' >
                                    <img src={m1} />
                                </div>

                                <div>
                                    <p>{d.name}</p>
                                    <p>{d.review}</p>
                                    <button>Read More</button>
                                </div>

                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default StocksCarousel