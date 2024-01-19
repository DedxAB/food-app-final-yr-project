import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='bg-red-600 text-white'>
      <div className='w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2'>
        <div className='logo-wrapper pl-4 flex items-center'>
          <h1 className=''>My Restro</h1>
        </div>
        <div className='wrapper-nav-menu flex items-center justify-between space-x-10'>
          <Link href='/'>
            <h1>Home</h1>
          </Link>
          <Link href='/contact'>
            <h1>Contact</h1>
          </Link>
          <Link href='/cart'>
            <h1>Cart</h1>
          </Link>
          <Link href='/signup'>
            <h1>Sign up</h1>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
