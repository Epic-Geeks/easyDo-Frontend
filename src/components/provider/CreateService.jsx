import React from "react";
import { useDispatch } from "react-redux";
import { createService } from "../../actions/ServicesActions";

export default function CreateServiceForm(props) {
  const dispatch = useDispatch();

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="p-3 text-2xl font-semibold flex-1 border rounded-lg shadow-md sm:p-1 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex items-center justify-center">
            <form
              className="space-y-6"
              onSubmit={(e) => createService(dispatch, e)}
            >
              <div className="mb-6">
                <label
                  htmlFor="serviceDescription"
                  className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                >
                  Description
                </label>
                <textarea
                  required
                  type="text"
                  rows={8}
                  id="serviceDescription"
                  className="bg-gray-50 border lg:w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-half p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                ></textarea>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="price"
                  className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                >
                  Price
                </label>
                <input
                  step="any"
                  min={5.0}
                  required
                  type="number"
                  id="price"
                  name="price"
                  className="bg-gray-50 lg:w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-half p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                ></input>
              </div>

              <div>
                <div>
                  <input
                    id="plumber"
                    className="peer/draft"
                    type="radio"
                    value={"plumber"}
                    name="serviceCategory"
                  />
                  <label htmlFor="plumber" className="ml-2 text-sm">
                    plumber
                  </label>
                </div>

                <div>
                  <input
                    id="electrician"
                    className="peer/draft"
                    type="radio"
                    value={"electrician"}
                    name="serviceCategory"
                  />
                  <label htmlFor="electrician" className="ml-2 text-sm">
                    electrician
                  </label>
                </div>

                <div>
                  <input
                    id="carpenter"
                    className="peer/draft"
                    type="radio"
                    value={"carpenter"}
                    name="serviceCategory"
                  />
                  <label htmlFor="carpenter" className="ml-2 text-sm">
                    carpenter
                  </label>
                </div>

                <div>
                  <input
                    id="painter"
                    className="peer/draft"
                    type="radio"
                    value={"painter"}
                    name="serviceCategory"
                  />
                  <label htmlFor="painter" className="ml-2 text-sm">
                    painter
                  </label>
                </div>

                <div>
                  <input
                    id="online"
                    className="peer/draft"
                    type="radio"
                    value={"online"}
                    name="serviceCategory"
                  />
                  <label htmlFor="online" className="ml-2 text-sm">
                    online
                  </label>
                </div>
              </div>

              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="user_avatar"
              >
                Upload a service picture
              </label>
              <input
                className="block w-half text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                aria-describedby="user_avatar_help"
                id="user_avatar"
                type="file"
              ></input>

              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
