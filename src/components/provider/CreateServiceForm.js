import React from 'react'
import { useDispatch } from 'react-redux';
import { createService } from '../../actions/ServicesActions';


export default function CreateServiceForm(props) {
    const dispatch = useDispatch();

  return (
    <div>
    <div className="flex justify-center items-center w-full">
    <div className="w-1/2 bg-white rounded shadow-2xl p-8 m-4">
        <h1 className="block w-full text-center text-gray-800 text-2xl  mb-6">Create Your Service</h1>
        <form onSubmit={(e)=>createService(dispatch, e)}>
            <div className="flex flex-col mb-4">
                <label className="mb-2  text-sm text-gray-900" htmlFor="Price">Price</label>
                <input className="border py-2 px-3 font-light text-grey-800" type="text" name="Price" id="Price"></input>
            </div>
        
            <div className="flex flex-col mb-4">
            <label className="mb-2  text-sm text-gray-900" htmlFor="user_avatar">Upload a service picture</label>
            <input className="block w-half text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar" type="file"></input>
            </div>
            <div className="flex flex-col mb-4">
                <label className="mb-2  text-sm text-gray-900" htmlFor="ServiceDescription">ServiceDescription</label>
                <textarea className="border py-2 px-3 font-light text-grey-800" name="ServiceDescription" id="ServiceDescription" type="text"></textarea>
            </div>
            <div className="flex flex-col mb-4">
                <label className="mb-2 text-sm text-gray-900" htmlFor="ServiceCategory">ServiceCategory</label>
                
                <select className="border font-light py-1 px-3 text-grey-800">
                    <option>plumper</option>
                    <option>electrician</option>
                    <option>carpenter</option>
                    <option>painter</option>
                    <option>online</option>

                </select>
            </div>
            <button className="block bg-blue-400  text-white uppercase text-lg mx-auto p-4 rounded" type="submit">Create</button>
        </form>
    </div>
</div>
</div>
  );
}
