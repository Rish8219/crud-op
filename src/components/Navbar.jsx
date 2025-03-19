import React from 'react';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className='bg-black'>
            <div className="container">
                <header className='w-full text-2xl text-amber-50 flex justify-between '>
                    <div className="logo">
                        <NavLink to="/home" className="text-3xl font-bold">Logo</NavLink>
                    </div>
                <nav>
                    <ul className='flex items-center gap-2.5 capitalize'>
                        <li  className='hover:text-amber-500 transition-all'>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li className='hover:text-amber-500 transition-all'>
                            <NavLink to="/student/create/:id">create</NavLink>
                        </li>
                        <li className='hover:text-amber-500 transition-all'>
                            <NavLink to="/student/edit/:id">edit</NavLink>
                        </li>
                        <li className='hover:text-amber-500 transition-all'>
                            <NavLink></NavLink>
                        </li>
                    </ul>
                </nav>
                </header>
              
            </div>
        </div>
    );
}

export default Navbar;
