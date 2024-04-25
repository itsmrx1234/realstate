import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header className='bg-slate-200'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to="/">
        <h1 className='font-bold text-xl flex'>
          <span className='text-slate-500'>Sahand</span>
          <span className='text-slate-500 ml-1'>Estate</span>
        </h1>
        </Link>
        <form className='flex items-center'>
          <input
            type='text'
            placeholder='Search..'
            className='bg-transparent border-none focus:outline-none px-3 py-1 rounded-lg text-black`-100 w-24 sm:w-64'
          />
          <button className='ml-2'>
            <FaSearch className='text-slate-500' />
          </button>
        </form>
        <ul className='flex gap-4 items-center'>
            <Link to="/"><li className='hidden sm:inline text-slate-700 hover:underline'>Home</li></Link>
            <Link to="/About"><li className=' text-slate-700 hover:underline'>About</li></Link>
            <Link to="/Sign-in"><li className=' text-slate-700 hover:underline'>Sign-in</li></Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
