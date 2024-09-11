import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='grid grid-cols-3'>
        <p className='text-center pt-2'>Book My CHESS</p>
        <div className='grid grid-cols-3 p-3 gap-14 bg-white rounded-b-[24px] text-black'>
            <Link href={'/'}>
            Home
            </Link>
            <Link href={'/book'}>
            Book Court
            </Link>
            <Link href={'/about'}>
            About
            </Link>
        </div>
        <div className='text-center pt-2'>
            Login
        </div>
    </div>
  )
}

export default Header