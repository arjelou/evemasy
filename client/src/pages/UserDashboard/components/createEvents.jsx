import React from "react";

export default class createEvents extends React.Component{
  render() {
    return (
      <div className="bg-white sidebar fixed top-0 bottom-0 lg:left-0 w-full ml-[230px] overflow-x-auto font-poppins font-medium text-start px-3">
        <div className="h-screen flex items-center justify-center">
          <div className="w-[500px] mr-[230px] shadow-md">
          <form className='bg-slate-100 p-7 rounded-sm'>
                <h2 className='font-poppins font-bold text-3xl mb-3'>
                    Add Event
                </h2>
                <label className='block'>
                    <input type='text' placeholder='Title' required
                    className='border border-slate-400 py-3 block mt-1 px-2 bg-slate-100 rounded-sm placeholder-slate-500 focus:outline-none focus:border-orange-600 font-poppins font-medium focus:right-1 sm:text-sm w-full'/>
                </label>
                <label className='block mt-3'>
                    <input type='datetime-local' placeholder='Date/Time' required
                    className='border border-slate-400 py-3 block mt-1 px-2 bg-slate-100 rounded-sm placeholder-slate-500 focus:outline-none focus:border-orange-600 font-poppins font-medium focus:right-1 sm:text-sm w-full'/>
                </label>
                <label className='block mt-3'>
                    <input type='text' placeholder='Location' required
                    className='border border-slate-400 py-3 block mt-1 px-2 bg-slate-100 rounded-sm placeholder-slate-500 focus:outline-none focus:border-orange-600 font-poppins font-medium focus:right-1 sm:text-sm w-full'/>
                </label>
                <label className='block mt-3'>
                    <textarea type='text' placeholder='Description' required
                    className='h-[100px] border border-slate-400 py-3 block mt-1 px-2 bg-slate-100 rounded-sm placeholder-slate-500 focus:outline-none focus:border-orange-600 font-poppins font-medium focus:right-1 sm:text-sm w-full'/>
                </label>
                <button className='bg-orange-400 py-3 px-3 w-full mt-4 rounded-sm font-poppins font-medium text-white hover:bg-orange-500'>
                    Save
                </button>     
            </form>
          </div>
        </div>
      </div>
    )
  }
}
