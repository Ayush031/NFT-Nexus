import React from 'react'
import comm from '../assets/community.jpg'
function Community() {
    return (
        <>
            <p>Community Dashboard for Headquarters to manage the trending communities.</p>
            <li>Communities categorized on basis of NFTs</li>
            <li>Chat Section</li>
            <li>Trending Communities</li>
            <div>
             <img src={comm} className='' />
            </div>
        </>
    )
}

export default Community