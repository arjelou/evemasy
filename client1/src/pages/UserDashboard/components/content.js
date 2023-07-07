import React from 'react';
import { FaRegCalendarAlt, FaRegClock, FaRegMap } from 'react-icons/fa';

export default class content extends React.Component {
  render() {
      return (
      <div className='columns-2'>
      {/* UPCOMING EVENTS */}
        <div className='h-screen'>
            <div className='m-auto w-[500px]'>
                <h1 className='text-xl font-poppins font-medium m-auto items-center justify-center'>
                    Upcoming events
                </h1>
            </div>   
            <div className='overflow-y-auto h-[680px] scroll-smooth '>
                <div className='bg-slate-100 p-5 rounded-md w-[500px] m-auto drop-shadow-sm mb-3'>
                    <div>
                        <fieldset>
                            <legend className='text-[17px] font-poppins font-medium mb-1'>
                                Event Title
                            </legend>
                            <div className=''>
                                <label className="text-sm font-poppins font-thin flex mr-3 items-center">
                                    <FaRegCalendarAlt size={15} color='blue' className='mr-1' />
                                    <span>
                                        January 12, 2014
                                    </span>
                                </label>
                                <label className="text-sm font-poppins font-thin flex items-center mr-3">
                                    <FaRegClock size={15} color='blue' className='mr-1'/> 
                                    <span>
                                        10:00 pm
                                    </span>
                                </label>
                                <label className="text-sm font-poppins font-thin flex items-center">
                                    <FaRegMap size={15} color='blue' className='mr-1'/> 
                                    <span>
                                        alkda aldkadk alkdja dalkdjl k
                                    </span>
                                </label>
                            </div>
                            <hr className='h-[1px] bg-slate-300 rounded-md mt-1'/>
                            <label className="text-sm font-poppins font-thin">
                                In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the
                            </label>
                        </fieldset> 
                    </div>
                </div>
                <div className='bg-slate-100 p-5 rounded-md w-[500px] m-auto drop-shadow-sm mb-3'>
                    <div>
                        <fieldset>
                            <legend className='text-[17px] font-poppins font-medium mb-1'>
                                Event Title
                            </legend>
                            <div className=''>
                                <label className="text-sm font-poppins font-thin flex mr-3 items-center">
                                    <FaRegCalendarAlt size={15} color='blue' className='mr-1' />
                                    <span>
                                        January 12, 2014
                                    </span>
                                </label>
                                <label className="text-sm font-poppins font-thin flex items-center mr-3">
                                    <FaRegClock size={15} color='blue' className='mr-1'/> 
                                    <span>
                                        10:00 pm
                                    </span>
                                </label>
                                <label className="text-sm font-poppins font-thin flex items-center">
                                    <FaRegMap size={15} color='blue' className='mr-1'/> 
                                    <span>
                                        alkda aldkadk alkdja dalkdjl k
                                    </span>
                                </label>
                            </div>
                            <hr className='h-[1px] bg-slate-300 rounded-md mt-1'/>
                            <label className="text-sm font-poppins font-thin">
                                In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the
                            </label>
                        </fieldset> 
                    </div>
                </div>
                <div className='bg-slate-100 p-5 rounded-md w-[500px] m-auto drop-shadow-sm mb-3'>
                    <div>
                        <fieldset>
                            <legend className='text-[17px] font-poppins font-medium mb-1'>
                                Event Title
                            </legend>
                            <div className=''>
                                <label className="text-sm font-poppins font-thin flex mr-3 items-center">
                                    <FaRegCalendarAlt size={15} color='blue' className='mr-1' />
                                    <span>
                                        January 12, 2014
                                    </span>
                                </label>
                                <label className="text-sm font-poppins font-thin flex items-center mr-3">
                                    <FaRegClock size={15} color='blue' className='mr-1'/> 
                                    <span>
                                        10:00 pm
                                    </span>
                                </label>
                                <label className="text-sm font-poppins font-thin flex items-center">
                                    <FaRegMap size={15} color='blue' className='mr-1'/> 
                                    <span>
                                        alkda aldkadk alkdja dalkdjl k
                                    </span>
                                </label>
                            </div>
                            <hr className='h-[1px] bg-slate-300 rounded-md mt-1'/>
                            <label className="text-sm font-poppins font-thin">
                                In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the
                            </label>
                        </fieldset> 
                    </div>
                </div>
                
            </div>
        </div>
        
        {/* PUBLIC EVENTS */}
        <div className='h-screen'>
            <h1 className='text-2xl font-poppins font-medium'>
                Public events
            </h1>
        </div>
      </div>
    )
  }
}
