import React from 'react'
import { NavLink } from 'react-router-dom'
import diamond from '../assets/tdiamond.png'
import bg from '../assets/tbg.png'

function Section1() {
    return (
        <>
            <div className='flex justify-center gap-72 pt-10 h-[88%] w-[100%] ' >
                <div className=''>
                    <div>
                        <p className="font-bold text-transparent text-6xl bg-clip-text text-white" >
                            <span className="text-8xl font-bold text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-orange-600">Discover</span>
                            <br />Collect, and<br />sell NFTs.
                        </p>
                        <p className='mt-5' >Explore on the world best largest NFT marketplace.</p>
                    </div>
                    <NavLink to="/marketplace" className="btn btn-outline btn-info mt-10 " >Explore</NavLink>
                </div>
                <div className='flex justify-between basis-1/4 ' >
                    <div className='animate-moveUpDown'>
                        <img src={diamond} width={200} className="" />
                    </div>
                    <div className='text-xl flex flex-col gap-4 mt-5'>
                        <p className='  text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-orange-600' >26K+ <br /> <span className='text-white text-sm' > Artwork</span></p>
                        <p className='  text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-orange-600' >18K <br /> <span className='text-white text-sm' > Auction</span></p>
                        <p className='  text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-orange-600' >8K <br /> <span className='text-white text-sm' > Artist</span></p>
                    </div>
                </div>
            </div >

        </>
    )
}

export default Section1