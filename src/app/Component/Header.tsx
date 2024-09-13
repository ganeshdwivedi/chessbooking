import React from 'react'

const Header = () => {
  return (
    
<div className='w-[133%] shadow-xl md:shadow-2xl z-10 shadow-black -left-[17%] h-[300px] md:h-[40vh] lg:h-[50vh] xl:h-[100vh] relative overflow-hidden'>
<iframe className='scale-125 h-[100%]' width={"100%"} height={"100%"} src="https://www.youtube.com/embed/0mvwoxMdFkM?autoplay=1&mute=1&loop=1&playlist=0mvwoxMdFkM&loop=1controls=0&modestbranding=1&rel=0&vq=hd1080" allowFullScreen>
</iframe>

<div className='absolute inset-0 w-full  md:h-[50vh] xl:h-[120vh]'>
    <div className='bg-black bg-opacity-60 relative md:w-[70vw] lg:w-[40vw] md:top-[10%] lg:top-[20%] top-10 left-[15%] w-[90vw] md:left-[32%] lg:left-[45%] py-5 px-3 md:px-12 text-center'>
        <h2 className='text-white font-medium text-xl md:text-3xl lg:text-4xl mt-[10px] md:mt-[20px] text-medium'>Your Hub</h2>
        <h2 className='text-white font-medium text-xl md:text-3xl lg:text-4xl mt-[10px] md:mt-[20px]'>For Booking Chess Events & Tournaments</h2>
        
        <button className='bg-[#d4bb59] text-regular rounded-md hover:bg-white hover:text-black hover:transition-colors bg-opacity-60 mt-[25px] text-white text-sm md:text-[20px] px-[20px] py-[10px]'>Book Now</button>
    </div>
</div>
</div>
  )
}

export default Header