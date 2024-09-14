import React from 'react'

const Header = () => {
  return (

    <div>
      <div className='overflow-hidden'>
        <iframe className='w-full h-screen scale-[400%] sm:scale-[250%] md:scale-[200%] lg:scale-150   relative' width={"100%"} height={"100%"} src="https://www.youtube.com/embed/0mvwoxMdFkM?autoplay=1&mute=1&loop=1&playlist=0mvwoxMdFkM&loop=1&controls=0&modestbranding=1&rel=0&vq=hd1080" allowFullScreen ></iframe>
      </div>
      <div className='absolute mt-[-70vh] w-full  flex justify-center'>
        <div className='bg-black bg-opacity-60 relative md:w-[70vw] lg:w-[40vw] md:top-[10%] lg:top-[20%] top-10 w-[90vw] justify-center py-5 px-3 md:px-12 text-center'>
          <h2 className='text-white font-medium text-xl md:text-3xl lg:text-4xl mt-[10px] md:mt-[20px]'>Your Hub</h2>
          <h2 className='text-white font-medium text-xl md:text-3xl lg:text-4xl mt-[10px] md:mt-[20px]'>For Booking Chess Events & Tournaments</h2>
          <button className='bg-[#d4bb59] text-regular rounded-md hover:bg-white hover:text-black hover:transition-colors bg-opacity-60 mt-[25px] text-white text-sm md:text-[20px] px-[20px] py-[10px]'>Book Now</button>
        </div>
      </div>
    </div>
  )
}

export default Header