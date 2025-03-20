import React from 'react';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className='bg-[#FFA725]'>
            <div className=" container w-full h-15 mx-auto">
                <header className='w-auto text-2xl text-[#FFF5E4] flex justify-between '>
                    <div className="logo mt-2">
                        <NavLink to="/" className="hover:text-[#6A9C89]  text-3xl ml-4 font-bold">Logo</NavLink>
                    </div>
                <nav>
                    <ul className='flex items-center gap-2.5 capitalize font-bold'>
                        <li  className='mr-6 mt-2 hover:bg-[#6A9C89] rounded-2xl px-1 py-1 hover:text-amber-50 transition-all  '>
                            <NavLink to="/"><button>Home</button></NavLink>
                        </li>
                    </ul>
                </nav>
                </header>
              
            </div>
        </div>
    );
}

export default Navbar;
