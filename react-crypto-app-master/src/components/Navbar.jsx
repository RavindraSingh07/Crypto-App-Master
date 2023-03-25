import React from 'react'
import Logo from '../logo.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className='bg-black'>
            <div className='flex justify-around items-center'>
                <Link to="/">
                    <img src={Logo} alt="logo" className='w-32' />
                </Link>
                <Link to="/">
                    <h1 className='text-[#FF9900] text-xl font-bold'>Market</h1>
                </Link>
                <Link to="/news">
                    <h1 className='text-[#FF9900] text-xl font-bold'>News</h1>
                </Link>
            </div>

        </div>
    )
}

export default Navbar