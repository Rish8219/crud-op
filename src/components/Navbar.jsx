import React from 'react';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className='bg-[#FFA725]'>
            <div className="container  w-screen mx-auto">
                <header className='w-auto text-2xl text-[#FFF5E4] flex justify-between '>
                    <div className="logo">
                        <NavLink to="/home" className="hover:text-[#6A9C89] text-3xl font-bold">Logo</NavLink>
                    </div>
                <nav>
                    <ul className='flex items-center gap-2.5 capitalize font-bold'>
                        <li  className='hover:text-[#6A9C89] transition-all  '>
                            <NavLink to="/">Home</NavLink>
                        </li>
                    </ul>
                </nav>
                </header>
              
            </div>
        </div>
    );
}

export default Navbar;
