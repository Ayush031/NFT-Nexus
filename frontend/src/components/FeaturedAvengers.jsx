import React from 'react'

function FeaturedAvengers({avengers}) {
  return (
    <>
      <div className="text-5xl text-center m-5 font-bold text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-orange-500">Featured Avengers</div>
      <div className='flex justify-center gap-10 mb-20 mt-14'>
        {avengers.map(avg => (
          <div className='text-center' >
            <div>
              <img src={avg.img} className='h-40 rounded-3xl mb-3' />
            </div>
            <p className='text-white text-lg'>{avg.name}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default FeaturedAvengers