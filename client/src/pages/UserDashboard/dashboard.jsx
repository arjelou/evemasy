import React from 'react';
import { Outlet } from 'react-router-dom';
import { dashboards } from '../../constant/navLinks';
import { logout } from '../../assets';
import { NavLink } from "react-router-dom";
import Content from './components/content';

export default class sidebar extends React.Component {
  render() {
      return (
      <>
        <div className='shadow-inner bg-blue-500 sidebar fixed top-0 bottom-0 lg:left-0 w-[230px] overflow-x-auto font-poppins font-medium text-start px-3'>
            <div className='text-gray-300 text-xl'>
                <div className='p-2.5 mt-2 flex items-center'>
                    <h1 className='font-bold text-xl'>
                    EveMasy Main
                    </h1>
                </div>
                <hr className='bg-slate-400'/>
            </div>
            <div>
                <ul className='list-none block mt-4'>
                    {dashboards.map((navLink) =>(
                        <li key={navLink.id}
                            className='text-white font-poppins font-medium cursor-pointer mt-2 fill-gray-200 rounded flex hover:bg-slate-400 py-2 px-2'>
                            <img src={navLink.icon} alt={navLink.title} className='mr-2 w-[25px]'/>

                            <NavLink to={navLink.id}>
                                {navLink.title}
                            </NavLink>    
                        </li>
                        
                    ))}
                </ul>
            </div>
            <div>
                <ul className='list-none block mt-48 text-base'>
                    <li
                        className='text-white font-poppins font-medium cursor-pointer mt-2 fill-green-500 rounded flex hover:bg-slate-400 py-2 px-2'>
                        <img src={logout} alt='lougout' className='mr-2 w-[30px]'/>
                        <a href='#' className='flex'>
                        Logout    
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div className='ml-[232px]'>
            <Content />
        </div>
      
            <div>
            <Outlet />
        </div>
        
        
        
      </>
    )
  }
}
