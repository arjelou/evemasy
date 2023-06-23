import React from 'react';
import {logo} from '../assets'

export default class login extends React.Component {
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
                    Login
                </h2>
                <div className='mb-3 font-poppins font-normal text-md'>
                    <p>
                    New to EveMasy?
                    <span className='text-orange-400'>
                        <a href='/signup'> Create an account</a>
                    </span>
                    </p>
                </div>

                <label className='block'>
                    <input type='email' placeholder='Email'
                    className='border border-slate-400 py-3 block mt-1 px-2 bg-slate-300 rounded-sm placeholder-slate-500 focus:outline-none focus:border-orange-600 font-poppins font-medium focus:right-1 sm:text-sm w-full'/>
                </label>
                <label className='block mt-3'>
                    <input type='password' placeholder='Password'
                    className='border border-slate-400 py-3 block mt-1 px-2 bg-slate-300 rounded-sm placeholder-slate-500 focus:outline-none focus:border-orange-600 font-poppins font-medium focus:right-1 sm:text-sm w-full'/>
                </label>
                {/* Forgot password link */}
                <p>
                    <span className='text-orange-400 ml-[40%] font-thin'>
                        <a href='#'>Forgot your password?</a>
                    </span>
                </p>
                <button className='bg-orange-400 py-3 px-3 w-full mt-4 rounded-sm font-poppins font-medium text-white hover:bg-orange-500'>Login</button>     
            </form>
        </div>
        </>    
    )
  }
}
