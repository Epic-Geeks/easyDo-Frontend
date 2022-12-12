import React from 'react'
import { useDispatch } from 'react-redux';
import { createService } from '../../actions/ServicesActions';

export default function CreateServiceForm(props) {
    const dispatch = useDispatch();

  return (
    <div>
        <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 ">
            
    
        <h3 className="text-3xl font-bold dark:text-white">Create Your Service</h3>

        <form className="space-y-6"  onSubmit={(e)=>createService(dispatch, e)}>
        <div className="mb-6">
    <label htmlFor="serviceDescription" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ServiceDescription</label>
    <input type="text" id="serviceDescription" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-half p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
</div>


<div className="mb-6">
    <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
    <input type="text" id="price" name="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-half p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
</div>

            <fieldset>
            <legend className="sr-only">ServiceCategory</legend>

            <div className="flex items-center mb-4">
            <input id="serviceCategory" type="radio" name="serviceCategory" value="plumber" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked></input>
            <label htmlFor="serviceCategory" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            plumber
            </label>
             </div>

            <div className="flex items-center mb-4">
            <input id="serviceCategory" type="radio" name="serviceCategory" value="electrician" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"></input>
            <label htmlFor="serviceCategory" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            electrician
            </label>
            </div>

  <div className="flex items-center mb-4">
    <input id="serviceCategory" type="radio" name="serviceCategory" value="carpenter" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600"></input>
    <label htmlFor="serviceCategory" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
    carpenter
    </label>
  </div>

  <div className="flex items-center mb-4">
    <input id="serviceCategory" type="radio" name="serviceCategory" value="painter" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring:blue-300 dark:focus-ring-blue-600 dark:bg-gray-700 dark:border-gray-600"></input>
    <label htmlFor="serviceCategory" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
    painter
    </label>
  </div>

  <div className="flex items-center">
  <input id="serviceCategory" type="radio" name="serviceCategory" value="online" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring:blue-300 dark:focus-ring-blue-600 dark:bg-gray-700 dark:border-gray-600"></input>
    <label htmlFor="serviceCategory" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
    online
    </label>
  </div>
</fieldset>
            
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="user_avatar">Upload a service picture</label>
            <input className="block w-half text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar" type="file"></input>

            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create</button>
        </form>
    </div>
    </div>
    </div>
  )
}
