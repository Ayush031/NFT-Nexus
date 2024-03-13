import React from 'react'
import { NavLink } from 'react-router-dom'

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

            <div className='p-5 pl-20'>
                <div className='flex justify-between gap-24 '>
                    <div className='basis-1/2'>
                        <div className='flex items-center justify-between basis-1/2 '>
                            <div className='flex gap-10'>
                                <span>Rank</span>
                                <span>Collection</span>
                            </div>
                            <div className='flex gap-14'>
                                <span>Floor Price</span>
                                <span>Volume</span>
                            </div>
                        </div>
                        <div className='basis-1/2 flex list-none justify-betweenpt-1'>
                            <div className='flex basis-1/2 items-center gap-10 text-white text-xl font-semibold '>
                                <div>
                                    <li className='p-2' >1</li>
                                    <li className='p-2' >2</li>
                                    <li className='p-2' >3</li>
                                    <li className='p-2' >4</li>
                                    <li className='p-2' >5</li>
                                </div>
                                <div>
                                    <li className='p-2' >Iron Xsuite</li>
                                    <li className='p-2' >Captain Mythic</li>
                                    <li className='p-2' >Hulk</li>
                                    <li className='p-2' >Doctor Seek</li>
                                    <li className='p-2' > Lighting Hammer </li>
                                </div>
                            </div>
                            <div className='flex basis-1/2 justify-end gap-24 pr-3 '>
                                <div>
                                    <li className='p-2' >1</li>
                                    <li className='p-2' >2</li>
                                    <li className='p-2' >3</li>
                                    <li className='p-2' >4</li>
                                    <li className='p-2' >5</li>
                                </div>
                                <div>
                                    <li className='p-2' >1</li>
                                    <li className='p-2' >2</li>
                                    <li className='p-2' >3</li>
                                    <li className='p-2' >4</li>
                                    <li className='p-2' >5</li>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='basis-1/2'>
                        <div className='flex items-center justify-between basis-1/2 '>
                            <div className='flex gap-10'>
                                <span>Rank</span>
                                <span>Collection</span>
                            </div>
                            <div className='flex gap-14'>
                                <span>Floor Price</span>
                                <span>Volume</span>
                            </div>
                        </div>
                        <div className='basis-1/2 flex list-none justify-betweenpt-1'>
                            <div className='flex basis-1/2 items-center gap-10 text-white text-xl font-semibold '>
                                <div>
                                    <li className='p-2' >1</li>
                                    <li className='p-2' >2</li>
                                    <li className='p-2' >3</li>
                                    <li className='p-2' >4</li>
                                    <li className='p-2' >5</li>
                                </div>
                                <div>
                                    <li className='p-2' >Iron Xsuite</li>
                                    <li className='p-2' >Captain Mythic</li>
                                    <li className='p-2' >Hulk</li>
                                    <li className='p-2' >Doctor Seek</li>
                                    <li className='p-2' > Lighting Hammer </li>
                                </div>
                            </div>
                            <div className='flex basis-1/2 justify-end gap-24 pr-3 '>
                                <div>
                                    <li className='p-2' >1</li>
                                    <li className='p-2' >2</li>
                                    <li className='p-2' >3</li>
                                    <li className='p-2' >4</li>
                                    <li className='p-2' >5</li>
                                </div>
                                <div>
                                    <li className='p-2' >1</li>
                                    <li className='p-2' >2</li>
                                    <li className='p-2' >3</li>
                                    <li className='p-2' >4</li>
                                    <li className='p-2' >5</li>
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