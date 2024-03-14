import React from 'react'
import { Link } from 'react-router-dom'

import m1 from '../assets/Merch/thm2.webp'

import a1 from '../assets/a1.jpg'
import a2 from '../assets/a2.jpg'
import a3 from '../assets/a3.jpg'
import a4 from '../assets/a4.jpg'
import a5 from '../assets/a5.jpg'
import a6 from '../assets/a6.jpg'

function Community() {

    const bodyLeft = [
        {
            icon: "home_pin",
            name: "Home"
        },
        {
            icon: "explore",
            name: "Explore"
        },
        {
            icon: "school",
            name: "Your Campus"
        },
        {
            icon: "forum",
            name: "Discussion"
        },
        {
            icon: "query_stats",
            name: "Statistics"
        },
    ]

    const friends = [
        {
            name: "Ashika",
            time: "5 min ago",
            img: m1
        },
        {
            name: "Karan",
            time: "20 min ago",
            img: m1
        },
        {
            name: "Abhishek",
            time: "40 min ago",
            img: m1
        },
        {
            name: "Abhishrut",
            time: "1 hr ago",
            img: m1
        },
    ]

    return (
        <>
            <div className='h-[110%] flex p-10'>
                <div className='basis-1/4 flex flex-col gap-5 bg-gradient-to-l from-pink-600 to-orange-300 p-7 rounded-l-3xl '>
                    {bodyLeft.map(item => (
                        <Link to='' className='items-center flex gap-2 text-black border border-white p-2 rounded-xl'>
                            <span className=" material-symbols-outlined">{item.icon}</span>
                            <span>{item.name}</span>
                        </Link>
                    ))}
                </div>
                <div className='basis-1/2 bg-gradient-to-r from-pink-700 to-deep-purple-900 flex flex-col'>
                    <div className='bg-gray-900'>
                        <div className='basis-[100%] '>
                            <div className='text-3xl flex text-black bg-white rounded-b-3xl h-18 justify-center gap-10 p-5'>
                                <h1>Wallet</h1>
                                <h1>$7,116.34</h1>
                            </div>
                        </div>
                        <div className=' pt-5 pb-5 text-center text-3xl font-semibold text-transparent  bg-clip-text bg-gradient-to-r from-blue-700 to-pink-400 '>Your Communities</div>
                        <div className='flex gap-5 p-2'>
                            <div className=" border border-orange-500 card basis-1/2 h-1/3 bg-base-100 shadow-xl">
                                <figure><img src={a1} /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        Emotional Spidy
                                    </h2>
                                    <p>Let's Hear Together what Spiderman has to confess to the world!!</p>
                                    <div className="card-actions justify-end">
                                        <div className="badge badge-outline">Spiderman</div>
                                        <div className="badge badge-outline">Fantasy</div>
                                    </div>
                                </div>
                            </div>
                            <div className=" border border-orange-500 card basis-1/2 bg-base-100 shadow-xl">
                                <figure><img src={a3} /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        Hands-On by Tony
                                    </h2>
                                    <p>Wanna Learn How to make Iron Man Suite, Join Us!!</p>
                                    <div className="card-actions justify-end">
                                        <div className="badge badge-outline">Marvel</div>
                                        <div className="badge badge-outline">Iconic</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='basis-1/4 bg-gradient-to-l text-white from-cyan-800 to-deep-purple-900 rounded-r-3xl flex flex-col pl-6 pr-8'>
                    <div className='items-center flex flex-col justify-center gap-3 pt-10 pb-10'>
                        <img src={m1} className='h-32 rounded-full' />
                        <div className='text-center'>
                            <p>Ayush Kansal</p>
                            <p className='bg-gradient-to-r from-pink-700 to-deep-purple-900'>@nftnexus</p>
                        </div>
                    </div>
                    <div>
                        <div className='flex justify-between mb-4'>
                            <Link>Your Connections</Link>
                            <Link className='text-gray-400' >See All</Link>
                        </div>
                        <div>
                            {friends.map(friend => (
                                <Link className='flex justify-start gap-4 rounded-3xl border border-orange-500 mt-2 p-1 pl-8 items-center'>
                                    <div><img src={friend.img} className='rounded-full h-10' /></div>
                                    <div >
                                        <p>{friend.name}</p>
                                        <p className='text-gray-400' >{friend.time}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div>NFT of the Day</div>
                <div>Hulk Spear</div>
                <div>Thor Rage</div>
            </div>
            <p>Community Dashboard for Headquarters to manage the trending communities.</p>
            <li>Communities categorized on basis of NFTs</li>
            <li>Chat Section</li>
            <li>Trending Communities</li>

        </>
    )
}

export default Community