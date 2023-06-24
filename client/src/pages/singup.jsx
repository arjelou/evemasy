import React from 'react';
import {logo} from '../assets';
import { NavLink } from 'react-router-dom';

export default class signup extends React.Component {
  render(){
      return (
        <>
        <div className='flex absolute ml-20 mt-3'>
            <a href='/'>
                <img src={logo} />
            </a>
        </div>
        <div className='h-screen flex items-center justify-center'>
            <form className='bg-slate-300 p-7 rounded-sm w-[350px]'>
                <h2 className='font-poppins font-bold text-3xl mb-3'>
                    Signup
                </h2>
                <div className='mb-3 font-poppins font-normal text-md'>
                    <p>
                    Already have an account?
                    <span className='text-orange-400'>
                        <NavLink to='/login'>
                            Login
                        </NavLink>
                    </span>
                    </p>
                </div>
                <label className='block'>
                    <input type='text' placeholder='Full Name'
                    className='border border-slate-400 py-3 block mt-1 px-2 bg-slate-300 rounded-sm placeholder-slate-500 focus:outline-none focus:border-orange-600 font-poppins font-medium focus:right-1 sm:text-sm w-full'/>
                </label>
                <label className='block mt-3'>
                    <input type='email' placeholder='Email'
                    className='border border-slate-400 py-3 block mt-1 px-2 bg-slate-300 rounded-sm placeholder-slate-500 focus:outline-none focus:border-orange-600 font-poppins font-medium focus:right-1 sm:text-sm w-full'/>
                </label>
                <label className='block mt-3'>
                    <input type='password' placeholder='Password'
                    className='border border-slate-400 py-3 block mt-1 px-2 bg-slate-300 rounded-sm placeholder-slate-500 focus:outline-none focus:border-orange-600 font-poppins font-medium focus:right-1 sm:text-sm w-full'/>
                </label>

                <button className='bg-orange-400 py-3 px-3 w-full mt-4 rounded-sm font-poppins font-medium text-white hover:bg-orange-500'>
                    Create account
                </button>     
            </form>
        </div>
        </>    
    )
  }
}
