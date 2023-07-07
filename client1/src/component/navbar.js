import React from 'react';
import { navLinks } from '../constant/navLinks';
import { menu, close, logo } from '../assets';
import { NavLink } from 'react-router-dom';
import '../index.css'
export default class navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false,
            
        }
    }
    openToggle = () => {
        this.setState(prevState => ({
            toggle: !prevState.toggle
            }));
        }
        
  render() {
    return (
    <nav className='w-full py-6 justify-between items-center navbar'>
        {/* Desktop and tablet view */}
            <img src={logo} alt='Evemasy-logo' className='w-[138px] h-[38px] absolute items-center'/> 
        <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
            {navLinks.map((navLink, index) =>(
            <li key={navLink.id}
                className={`${index === navLink.length-1 ? 'mr-0' : 'mr-10'} primaryColorText font-poppins font-normal cursor-pointer`}>
                <a href={navLink.id}>
                    {navLink.title}
                </a>
            </li>
            ))}
            <li className='secondaryColor secondaryColorHover primaryColorText font-poppins font-normal cursor-pointer px-4 rounded-sm py-2 mr-5'>
               <NavLink to='/signup'>
                Sign up
               </NavLink>
            </li>
            <li 
            
            className='primaryColorText secondaryColorHover secondaryColorBorder font-poppins font-normal cursor-pointer px-4 rounded-sm py-2 border'>
                <NavLink to='/login'>
                 Login
                </NavLink>
            </li>
            
        </ul>
       
        {/* Mobile view */} 
        <div className='sm:hidden flex flex-1 justify-end items-center'>
            <ul className='flex'>
                <li className=' text-white font-poppins font-normal cursor-pointer bg-slate-500 px-2 rounded-sm py-2 mr-2.5'>
                    Sign up
                </li>
            </ul>  
           <img src={this.state.toggle ? close : menu} 
            alt='menu' className='w-[38px] h-[38px] object-contain cursor-pointer ml-5'
            onClick={this.openToggle}/>
            <div className={`${this.state.toggle ? 'flex' : 'hidden'} p-6 bg-black absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
                <ul className='list-none flex flex-col justify-end items-center flex-1'>
                    <>
                        {navLinks.map((navLink, index) =>(
                            <li key={navLink.id}
                                className={`${index === navLink.length-1 ? 'mr-0' : 'mb-4'} text-white font-poppins font-normal cursor-pointer`}>
                                <a href={navLink.id}>
                                    {navLink.title}
                                </a>
                            </li>
                        ))}
                        <li className=' text-white font-poppins font-normal cursor-pointer px-4 rounded-sm py-2 outline-slate-500 outline'>
                            Login
                        </li>
                    </>    
                </ul>
            </div>
        </div>
    </nav>
  )
}
}
