import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signupAction } from "../actions/AuthActions";
const checkBoxStyle = "w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600";
export default function SignUp() {
  const dispatch = useDispatch();
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  const handleCheckBox = (e) => {
    console.log(e.target.value);
  }
  const fileSelected = (e) => {
    console.log(e.target.files[0])
  }
  return (
    <div>
      <div className="min-h-screen py-4 bg-gradient-to-r from-gray-500"
        style={{ backgroundImage: "rgb(148 163 184 / 0)" }}
      >
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
            <div
              className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center bg-signupImg"
            >
              <h1 className="text-white text-3xl mb-3">Welcome</h1>
              <div>
                <p className="text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suspendisse aliquam varius rutrum purus maecenas ac
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 py-16 px-12">
              <h2 className="text-3xl mb-4">Register</h2>
              <p className="mb-4">
                Create your account. It's free and only take a minute
              </p>
              <form onSubmit={(e) => signupAction(e, dispatch)}>
                <div className="grid grid-cols-2 gap-5">
                  <input type="text" placeholder="Name" id="name" name="name" required
                    className="border border-gray-400 py-1 px-2" />

                  <input type="text" placeholder="username" id="username" name="username" required
                    className="border border-gray-400 py-1 px-2" />
                </div>
                <div className="mt-5">
                  <input type="text"
                    placeholder="Email" id="email" name="email" required
                    className="border border-gray-400 py-1 px-2 w-full" />
                </div>
                <div className="mt-3">Add your picture</div>
                <div className="mt-2">
                  <input type="file"
                    onChange={fileSelected}
                    id="picture" name="picture" disabled
                    className="border border-gray-400 py-1 px-2 w-full" />
                </div>
                <div className="mt-4">

                  <p className="mb-4">I'm a</p>

                  <input id="customer" className="peer/draft" type="radio" value={"customer"} name="role" />
                  <label htmlFor="customer" className="ml-2 peer-checked/draft:text-sky-500">Customer</label><br />

                  <input id="provider" className="peer/published" type="radio" value={"provider"} name="role" />
                  <label htmlFor="provider" className="ml-2 peer-checked/published:text-sky-500">Provider</label><br />

                  {/* <div className="hidden peer-checked/draft:block">Drafts are only visible to administrators.</div> */}
                  <div className="hidden peer-checked/published:block border-4 border-gray-600 rounded-lg">
                    <p className="mt-3 ml-2">I can coverd these cities</p>
                    <div className="flex items-center m-4">
                      <input id="Amman"
                        type="checkbox"
                        value="Amman"
                        // onChange={handleCheckBox}
                        className={`${checkBoxStyle}`} />
                      <label htmlFor="Amman"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Amman
                      </label>
                    </div>

                    <div className="flex items-center m-4">
                      <input id="Irbid"
                        type="checkbox"
                        value="Irbid"
                        onChange={handleCheckBox}
                        className={`${checkBoxStyle}`} />
                      <label htmlFor="Irbid"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Irbid
                      </label>
                    </div>

                    <div className="flex items-center m-4">
                      <input id="Aqaba"
                        type="checkbox"
                        value="Aqaba"
                        onChange={handleCheckBox}
                        className={`${checkBoxStyle}`} />
                      <label htmlFor="Aqaba"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Aqaba
                      </label>
                    </div>
                    <div className="flex items-center m-4">
                      <input id="Ajloun"
                        type="checkbox"
                        value="Ajloun"
                        onChange={handleCheckBox}
                        className={`${checkBoxStyle}`} />
                      <label htmlFor="Ajloun"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Ajloun
                      </label>
                    </div>
                    <div className="flex items-center m-4">
                      <input id="Ma'an"
                        type="checkbox"
                        value="Ma'an"
                        onChange={handleCheckBox}
                        className={`${checkBoxStyle}`} />
                      <label htmlFor="Ma'an"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Ma'an
                      </label>
                    </div>

                    <div className="flex items-center m-4">
                      <input id="Karak"
                        type="checkbox"
                        value="Karak"
                        onChange={handleCheckBox}
                        className={`${checkBoxStyle}`} />
                      <label htmlFor="Karak"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Karak
                      </label>
                    </div>
                    <div className="flex items-center m-4">
                      <input id="Jaresh"
                        type="checkbox"
                        value="Jaresh"
                        onChange={handleCheckBox}
                        className={`${checkBoxStyle}`} />
                      <label htmlFor="Jaresh"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Jaresh
                      </label>
                    </div>

                    <div className="flex items-center m-4">
                      <input id="Madaba"
                        type="checkbox"
                        value="Madaba"
                        onChange={handleCheckBox}
                        className={`${checkBoxStyle}`} />
                      <label htmlFor="Madaba"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Madaba
                      </label>
                    </div>
                    <div className="flex items-center m-4">
                      <input id="Zarqa"
                        type="checkbox"
                        value="Zarqa"
                        onChange={handleCheckBox}
                        className={`${checkBoxStyle}`} />
                      <label htmlFor="Zarqa"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Zarqa
                      </label>
                    </div>

                    <div className="flex items-center m-4">
                      <input id="At-Tafilah"
                        type="checkbox"
                        value="At-Tafilah"
                        onChange={handleCheckBox}
                        className={`${checkBoxStyle}`} />
                      <label htmlFor="At-Tafilah"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        At-Tafilah
                      </label>
                    </div>

                    <div className="flex items-center m-4">
                      <input id="As-Salt"
                        type="checkbox"
                        value="As-Salt"
                        onChange={handleCheckBox}
                        className={`${checkBoxStyle}`} />
                      <label htmlFor="As-Salt"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        As-Salt
                      </label>
                    </div>

                    <div className="flex items-center m-4">
                      <input id="Al-Mafraq"
                        type="checkbox"
                        value="Al-Mafraq"
                        onChange={handleCheckBox}
                        className={`${checkBoxStyle}`} />
                      <label htmlFor="Al-Mafraq"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Al-Mafraq
                      </label>
                    </div>
                    <div className="m-2">Add your <b>Russme</b></div>
                    <div className="m-2">
                      <input type="file"
                        onChange={fileSelected}
                        id="picture" name="picture" disabled
                        className="border border-gray-400 py-1 px-2 w-full" />
                    </div>
                  </div>
                </div>
                <div className="mt-5">
                  <input type="password" required id="password" name="password"
                    autoComplete="true" placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="border border-gray-400 py-1 px-2 w-full" />
                </div>
                <div className="mt-5">
                  <input type="password" autoComplete="true" placeholder="Confirm Password"
                    onChange={(e) => setConfPassword(e.target.value)}
                    className="border border-gray-400 py-1 px-2 w-full" />
                </div>

                <div className="mt-5">
                  <input type="checkbox" className="border border-gray-400" />
                  <span className="m-2">
                    I accept the
                    <a href="#yes" className="text-gray-500 font-semibold">Terms of Use </a>
                    &
                    <a href="#1" className="text-gray-500 font-semibold"> Privacy Policy</a>
                  </span>
                </div>
                {password === confPassword && password !== "" ? (
                  <div className="mt-5">
                    <button
                      className="w-full bg-gray-500 py-3 text-center text-white">Register Now</button>
                  </div>
                ) :
                  <div className="mt-5">
                    <button disabled
                      className="w-full bg-gray-500 py-3 text-center text-white cursor-not-allowed">Register Now</button>
                  </div>}
              </form>
              <div className="w-full lg:w-1/1 py-4">Allready have an account?<Link to={"/signin"}> Signin</Link> </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
