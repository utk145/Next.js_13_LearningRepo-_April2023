import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='header'>
        <div className="container">
            <div className="logo">
                <Link href='/'>Learnr's Home</Link>
            </div>
            <div className="links">
                <Link href='/'>Home</Link>
                <Link href='/about'>About</Link>
                <Link href='/about/team'>Team</Link>
                <Link href='/code/repos'>Codes</Link>
            </div>
        </div>
            
    </header>
  )
}

export default Header

//  24:35