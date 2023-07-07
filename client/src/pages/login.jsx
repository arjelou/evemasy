import React from 'react';
import {logo} from '../assets';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
export default class login extends React.Component {

    handleSubmit = event => {
        event.preventDefault();
        axios.post(`http://localhost:5000/api/user/login`, {
            email: event.target.email.value,
            password: event.target.password.value
        })
        .then(res => {
            if(res.data.message === 'success') {
                this.notify()
                window.location.href='/dashboard'
            }else{
                this.notifyError()
            }
        })
    }

    notify = () => toast.success('Successfully Login...');
    notifyError = () => toast.error('Invalid credentials, please try again!',{ duration: 5000, style: { background: 'red', color: '#fff', }});

    render(){
      return (
        <>
        <Toaster position="top-center" reverseOrder={false} gutter={8}
        toastOptions={{ duration: 5000, style: { background: '#FB923C', color: '#fff' }}} />
        <div className='flex absolute ml-20 mt-3'>
            <a href='/'>
                <img src={logo} />
            </a>
        </div>
        <div className='h-screen flex items-center justify-center'>
            <form onSubmit={this.handleSubmit}
            className='bg-slate-100 p-7 rounded-sm w-[350px] shadow-md'>
                <h2 className='font-poppins font-bold text-3xl mb-3'>
                    Login
                </h2>
                <div className='mb-3 font-poppins font-normal text-md'>
                    <p>
                    New to EveMasy?
                    <span className='text-orange-400 ml-1'>
                        <NavLink to='/signup'>
                           Create an account
                        </NavLink>
                    </span>
                    </p>
                </div>

                <label className='block'>
                    <input type='email' placeholder='Email' name='email' required
                    className='border border-slate-400 py-3 block mt-1 px-2 bg-slate-100 rounded-sm placeholder-slate-500 focus:outline-none focus:border-orange-600 font-poppins font-medium focus:right-1 sm:text-sm w-full'/>
                </label>
                <label className='block mt-3'>
                    <input type='password' placeholder='Password' name='password' required
                    className='border border-slate-400 py-3 block mt-1 px-2 bg-slate-100 rounded-sm placeholder-slate-500 focus:outline-none focus:border-orange-600 font-poppins font-medium focus:right-1 sm:text-sm w-full'/>
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
