"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false);
    useEffect(() => {
        const handleIsSticky = () => window.scrollY >= 50 ? setIsSticky(true) : setIsSticky(false);
        window.addEventListener('scroll', handleIsSticky);
    }, [isSticky])

    console.log(isSticky,'sititiitis')

  return (
    <div className={`grid grid-cols-3 h-14 top-0 left-0 fixed z-20 w-full text-medium ${isSticky?'bg-white bg-opacity-80 text-black':'text-white'}`}>
    <p className='text-center pt-2 text-semibold'>Book My CHESS</p>
    <div className={`p-3 rounded-b-[24px] text-center text-medium ${isSticky?'bg-black text-white bg-opacity-80':'bg-white text-black bg-opacity-80'}`}>
        <Link className='text-semibold hover:text-bold hover:underline hover:underline-offset-2 hover:transition-colors' href={'/book'}>
        Book Now
        </Link>
    </div>
    <div className='text-center pt-2 text-semibold'>
        Sign in
    </div>
</div>

  )
}

export default Navbar