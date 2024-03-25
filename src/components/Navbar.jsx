import React from 'react'
import logo from '../assets/tlogo.png'
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <>
            <nav className='w-[100%] flex items-center h-[12%] justify-evenly pt-2  '>
                <div className='basis-1/6 h-[100%]'>
                    <img src={logo} alt="Logo" width={100} />
                </div>
                <div className=' text-gray-200 flex basis-1/3 h-12 bg-gray-600 rounded-2xl pt-3 justify-center '> Search </div>
                <div className='flex justify-evenly list-none basis-1/3'>
                    <NavLink to="/" className="btn btn-outline btn-info" >Home</NavLink>
                    <NavLink to="/marketplace" className="btn btn-outline btn-info" >MarketPlace</NavLink>
                    <NavLink to="/merchandise" className="btn btn-outline btn-info" >Merchandise</NavLink>
                    <NavLink to="/community" className="btn btn-outline btn-info" >Community</NavLink>
                </div>
            </nav>
        </>
    )
}

export default Navbar