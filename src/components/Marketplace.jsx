import React from 'react'
import { NavLink } from 'react-router-dom'

import a1 from '../assets/a1.jpg'
import a3 from '../assets/a3.jpg'
import a4 from '../assets/a4.jpg'
import a2 from '../assets/a2.jpg'
import a5 from '../assets/a5.jpg'
import a6 from '../assets/a6.jpg'

function Marketplace() {
    return (
        <>
            <div className='flex justify-center gap-40 ' >
                <div className='flex border p-1 border-cyan-700 rounded-xl w-700'>
                    <div className='btn bg-cyan-700'>Trending</div>
                    <div className='text-center justify-center btn bg-none'>Top</div>
                </div>
                <div className=''>
                    <NavLink to="" className=" btn p-1 rounded-xl flex list-none  border border-cyan-700">
                        <li className='p-3'>1h</li>
                        <li className='p-3'>6h</li>
                        <li className='p-3 bg-cyan-700 rounded-xl'>24h</li>
                        <li className='p-3'>7d</li>
                    </NavLink>
                </div>
                <div className='basis-24 flex rounded-xl border border-cyan-700 justify-center items-center btn ' >
                    View All
                </div>
            </div>
            <hr className='mt-3 bg-gray-600 text-center w-full border-none h-1' />
            <div className='p-5 pt-0 pl-20'>
                <div className='flex justify-between gap-20 '>
                    <div className=' rounded-xl p-6 basis-1/2'>
                        <div className='flex items-center justify-between basis-1/2 '>
                            <div className='flex gap-10'>
                                <span>Rank</span>
                                <span>Collection</span>
                            </div>
                            <div className='flex gap-20 pr-4'>
                                <span>Floor Price</span>
                                <span>Volume</span>
                            </div>
                        </div>
                        <div className='basis-1/2 flex list-none justify-betweenpt-1' text-xl font-semibold text-white>
                            <div className='flex basis-1/2 items-center gap-10 text-white text-xl font-semibold '>
                                <div>
                                    <li className='p-2' >1</li>
                                    <li className='p-2' >2</li>
                                    <li className='p-2' >3</li>
                                    <li className='p-2' >4</li>
                                    <li className='p-2' >5</li>
                                </div>
                                <div className='text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-600' >
                                    <li className='p-2' >Iron Xsuite </li>
                                    <li className='p-2' >Captain Mythic</li>
                                    <li className='p-2' >Hulk</li>
                                    <li className='p-2' >Doctor Seek</li>
                                    <li className='p-2' > Lighting Hammer </li>
                                </div>
                            </div>
                            <div className='flex basis-1/2 justify-end gap-16 pr-1 items-center'>
                                <div className='text-xl font-semibold text-pink-200'  >
                                    <li className='p-2' >0.02 Eth</li>
                                    <li className='p-2' >0.20 Eth</li>
                                    <li className='p-2' >1.53 Eth</li>
                                    <li className='p-2' >3.94 Eth</li>
                                    <li className='p-2' >0.89 Eth</li>
                                </div>
                                <div className='text-xl font-semibold text-pink-200' >
                                    <li className='p-2' >17 Eth</li>
                                    <li className='p-2' >89 Eth</li>
                                    <li className='p-2' >51 Eth</li>
                                    <li className='p-2' >68 Eth</li>
                                    <li className='p-2' >79 Eth</li>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' rounded-xl p-6 basis-1/2'>
                        <div className='flex items-center justify-between basis-1/2 '>
                            <div className='flex gap-10'>
                                <span>Rank</span>
                                <span>Collection</span>
                            </div>
                            <div className='flex gap-20 pr-6'>
                                <span>Floor Price</span>
                                <span>Volume</span>
                            </div>
                        </div>
                        <div className='basis-1/2 flex list-none justify-between pt-1'>
                            <div className='flex basis-1/2 items-center gap-10 text-white text-xl font-semibold '>
                                <div>
                                    <li className='p-2' >6</li>
                                    <li className='p-2' >7</li>
                                    <li className='p-2' >8</li>
                                    <li className='p-2' >9</li>
                                    <li className='p-2' >10</li>
                                </div>
                                <div className='text-transparent  bg-clip-text bg-gradient-to-r from-orange-400 to-purple-600' >
                                    <li className='p-2' >Iron Xsuite</li>
                                    <li className='p-2' >Captain Mythic</li>
                                    <li className='p-2' >Hulk</li>
                                    <li className='p-2' >Doctor Seek</li>
                                    <li className='p-2' > Lighting Hammer </li>
                                </div>
                            </div>
                            <div className='flex basis-1/2 justify-end gap-16 pr-3 items-center'>
                                <div className='text-xl font-semibold text-pink-200' >
                                    <li className='p-2' >0.43 Eth</li>
                                    <li className='p-2' >1.70 Eth</li>
                                    <li className='p-2' >0.56 Eth</li>
                                    <li className='p-2' >4.19 Eth</li>
                                    <li className='p-2' >0.92 Eth</li>
                                </div>
                                <div className='text-xl font-semibold text-pink-200' >
                                    <li className='p-2' >82 Eth</li>
                                    <li className='p-2' >67 Eth</li>
                                    <li className='p-2' >18 Eth</li>
                                    <li className='p-2' >71 Eth</li>
                                    <li className='p-2' >95 Eth</li>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-8' >
                    <p className='text-white text-3xl' >Top Collections</p>
                    <div className='flex flex-wrap justify-between mt-5 '>
                        <div className="card w-96 bg-base-100 shadow-xl border border-cyan-700 ">
                            <figure className="px-10 pt-10">
                                <img src={a1} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">HiSpy!</h2>
                                <p>Spiderman in the rain</p>
                                <p>2.34 Eth</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="card w-96 bg-base-100 shadow-xl border border-cyan-700 ">
                            <figure className="px-10 pt-10">
                                <img src={a3} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Iron Xsuite!</h2>
                                <p>Attitude of Ironman Suite</p>
                                <p>4.50 Eth</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="card w-96 bg-base-100 shadow-xl border border-cyan-700 ">
                            <figure className="px-10 pt-10">
                                <img src={a4} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Emotional Loki</h2>
                                <p>Loki Revealing his humanity</p>
                                <p>1.50 Eth</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <div className=" mt-2  card w-96 bg-base-100 shadow-xl border border-cyan-700 ">
                            <figure className="px-10 pt-10">
                                <img src={a5} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Mighty Thor!</h2>
                                <p>Thor about to push his limits</p>
                                <p>6.34 Eth</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="mt-2 card w-96 bg-base-100 shadow-xl border border-cyan-700 ">
                            <figure className="px-10 pt-10">
                                <img src={a6} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Scarlet</h2>
                                <p>Makeup of Scarlet, Embrace it!</p>
                                <p>5.50 Eth</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="mt-2 card w-96 bg-base-100 shadow-xl border border-cyan-700 ">
                            <figure className="px-10 pt-10">
                                <img src={a2} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Super Spider</h2>
                                <p>Spider Revealing his Power</p>
                                <p>4.50 Eth</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Marketplace