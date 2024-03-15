import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import diamond from '../assets/tdiamond.png'

function Section1() {
    const markets = [{ Name: "Top Gainers" }, { Name: "Top Decliners" }, { Name: "New Markets" }, { Name: "Top by Market Cap" }]
    const [stocks, setStocks] = useState([]);
    useEffect(() => {
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&sparkline=true')
            .then(response => response.json())
            .then(data => {
                const slicedData = data.slice(0, 10);
                const stocksData = slicedData.map(stock => ({
                    name: stock.name,
                    symbol: stock.symbol,
                    price: stock.current_price,
                    imgUrl: stock.image,
                    rank: stock.market_cap_rank
                }));
                setStocks(stocksData);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <>
            <div className='flex items-center justify-center gap-72 pt-10 h-[88%] w-[100%] ' >
                <div>
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
            <div className='pl-36' >
                <div className='flex-col justify-center items-center gap-5 '>
                    <h1 className='text-white text-6xl'>Markets</h1>
                    <Link to='https://finance.yahoo.com/crypto/' className='text-red-300 text-xl' >More Markets </Link>
                </div>
                <div className='flex justify-start gap-8 mt-8'>
                    {markets.map(market => (
                        <div
                            className='border rounded-3xl border-cyan-700 list-none text-center p-3 basis-1/6 cursor-pointer'                        >
                            {market.Name}
                        </div>
                    ))}
                </div>
                <div className='flex justify-betweeen mt-10 flex-wrap gap-5' >
                    {stocks.map((stock, index) => (
                        <div key={index} className='basis-1/5 bg-cyan-50 flex flex-col justify-center text-center items-center gap-5 rounded-3xl  h-60 text-black'>
                            <img src={stock.imgUrl} alt={stock.name} className='h-20' />
                            <div>
                                <p>{stock.name}</p>
                                <p>{stock.symbol}</p>
                                <p>${stock.price}</p>
                                <p>Market Rank: {stock.rank}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Section1