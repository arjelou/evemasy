import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

export default class listEvents extends React.Component{
  render() {
    return (
      <div className="bg-white bg-opacity-90 sidebar fixed top-0 bottom-0 lg:left-0 w-full ml-[230px] overflow-x-auto font-poppins font-medium text-start px-3">
        <div className="h-screen flex justify-center mt-10">
          <div className="w-full mr-[230px] ">
                <h2 className='font-poppins font-bold text-3xl mb-3'>
                    List of Events
                </h2>
            <table className="table-auto w-full rounded-sm border shadow-md">
                <thead className="bg-slate-300 shadow-sm">
                    <tr>
                    <th className="p-3 text-start">Title</th>
                    <th className="text-start">Date | Time</th>
                    <th className="text-start">Location</th>
                    <th className="text-start">Description</th>
                    <th className="text-start"></th>
                    <th className="text-start"></th>
                    </tr>
                </thead>
                <tbody className="">
                    <tr className=" hover:bg-slate-100 border">
                        <td className="p-3 text-start">The Sliding Mr. Bones</td>
                        <td>January 20, 2023 - 10:30 pm</td>
                        <td>Davao City adkad akdhakdjh akd hdkjhakd akjdhd </td>
                        <td>Description scription scription scription scription scriptionscription scription scriptionv scription v</td>
                        <td><FaEdit title="Edit" size={20} className="hover:fill-blue-500 cursor-pointer ml-4 mr-2 fill-slate-500"/></td>
                        <td><FaTrashAlt title="Delete" size={18} className="hover:fill-red-500 cursor-pointer mr-4 fill-slate-500"/></td>
                    </tr>
                    <tr className=" hover:bg-slate-100 border">
                        <td className="p-3 text-start">The Sliding Mr. Bones</td>
                        <td>January 20, 2023 - 10:30 pm</td>
                        <td>Davao City adkad akdhakdjh akd hdkjhakd akjdhd </td>
                        <td>Description scription scription scription scription scriptionscription scription scriptionv scription v</td>
                        <td><FaEdit title="Edit" size={20} className="hover:fill-blue-500 cursor-pointer ml-4 mr-2 fill-slate-500"/></td>
                        <td><FaTrashAlt title="Delete" size={18} className="hover:fill-red-500 cursor-pointer mr-4 fill-slate-500"/></td>
                    </tr>
                    <tr className=" hover:bg-slate-100 border">
                        <td className="p-3 text-start">The Sliding Mr. Bones</td>
                        <td>January 20, 2023 - 10:30 pm</td>
                        <td>Davao City adkad akdhakdjh akd hdkjhakd akjdhd </td>
                        <td>Description scription scription scription scription scriptionscription scription scriptionv scription v</td>
                        <td><FaEdit title="Edit" size={20} className="hover:fill-blue-500 cursor-pointer ml-4 mr-2 fill-slate-500"/></td>
                        <td><FaTrashAlt title="Delete" size={18} className="hover:fill-red-500 cursor-pointer mr-4 fill-slate-500"/></td>
                    </tr>
                </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}
