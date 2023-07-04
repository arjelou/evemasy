import React  from 'react';
import {logo} from '../assets';
import { NavLink } from 'react-router-dom';
import axios from 'axios'

export default class signup extends React.Component {
    // constructor(props) {
    //     super(props);

    //     this.state ={
    //         fullname: '',
    //         email: '',
    //         password: '',
    //     }
    // }

    // handleChange = event => {
    //     this.setState({
    //         fullname: event.target.value,
    //         email: event.target.value,
    //         password: event.target.value
    //     });

    // }

    handleSubmit = event => {
        event.preventDefault();
        axios.post(`http://localhost:5000/api/user/signup`, {
            fullname: event.target.fullname.value,
            email: event.target.email.value,
            password: event.target.password.value
        })
        .then(res => {
            console.log(res.data);
            alert('signup successful for user');
        })
    }


  render(){
      return (
        <>
        <div className='flex absolute ml-20 mt-3'>
            <a href='/'>
                <img src={logo} />
            </a>
        </div>
        <div className='h-screen flex items-center justify-center'>
            <form
            onSubmit={this.handleSubmit} 
            className='bg-slate-300 p-7 rounded-sm w-[350px]'>
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
                    <input type='text' name="fullname" placeholder='Full Name' 
                    className='border border-slate-400 py-3 block mt-1 px-2 bg-slate-300 rounded-sm placeholder-slate-500 focus:outline-none focus:border-orange-600 font-poppins font-medium focus:right-1 sm:text-sm w-full'/>
                </label>
                <label className='block mt-3'>
                    <input type='email' name="email" placeholder='Email' 
                    className='border border-slate-400 py-3 block mt-1 px-2 bg-slate-300 rounded-sm placeholder-slate-500 focus:outline-none focus:border-orange-600 font-poppins font-medium focus:right-1 sm:text-sm w-full'/>
                </label>
                <label className='block mt-3'>
                    <input type='password' name="password" placeholder='Password' 
                    className='border border-slate-400 py-3 block mt-1 px-2 bg-slate-300 rounded-sm placeholder-slate-500 focus:outline-none focus:border-orange-600 font-poppins font-medium focus:right-1 sm:text-sm w-full'/>
                </label>

                <button type='submit' 
                className='bg-orange-400 py-3 px-3 w-full mt-4 rounded-sm font-poppins font-medium text-white hover:bg-orange-500'>
                    Create account
                </button>     
            </form>
        </div>
        </>    
    )
  }
}
