import { data } from "autoprefixer";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signupAction } from "../actions/AuthActions";
import { cities } from "../assets/data/cities";
const checkBoxStyle = "w-4 h-4 text-blue-600 bg-gray-100 rounded  focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-blue-800";
export default function SignUp() {
  const dispatch = useDispatch();
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [policy, setPolicy] = useState(false);
  const [coverdCity, setCoverdCity] = useState([]);
  const handleCheckBox = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setCoverdCity(pre => [...pre, value])
    } else {
      setCoverdCity(prev => {
        return [...prev.filter(val => val !== value)]
      })
    }
  }
  const handleSignup = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      username: e.target.username.value,
      email: e.target.email.value,
      role: e.target.role.value,
      password: e.target.password.value,
      phoneNumber: e.target.phoneNumber.value
    }
    if (e.target.role.value === "provider") data.providerCoveredCities = coverdCity
    else data.customerAddress = coverdCity;
    signupAction(data, dispatch)
  }

  const fileSelected = (e) => {
    console.log(e.target.files[0])
  }
  return (
    <div>
      <div className="min-h-screen py-4 flex items-center justify-center mt-10 mb-10">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto overflow-hidden shadow-2xl  transition-transform">
            <div
              className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center bg-signupImg"
            >

            </div>
            <div className="w-full lg:w-1/2 py-16 px-12">
              <h2 className="text-3xl mb-4">Register</h2>
              <p className="mb-4">
                Create your account. It's free and only take a minute
              </p>
              <form onSubmit={handleSignup}>
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
                <div className="mt-5">
                  <input type="tel"
                  pattern="[0-9]{10}"
                    placeholder="07********" id="phoneNumber" name="phoneNumber" required
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

                  <p className="mb-4"><b>I'm a</b></p>

                  <input id="customer" className="peer/draft" type="radio" value={"customer"} name="role" />
                  <label htmlFor="customer" className="ml-2 peer-checked/draft:text-sky-500">Customer</label><br />

                  <input id="provider" className="peer/published" type="radio" value={"provider"} name="role" />
                  <label htmlFor="provider" className="ml-2 peer-checked/published:text-sky-500">Provider</label><br />

                  {/* <div className="hidden peer-checked/draft:block">Drafts are only visible to administrators.</div> */}
                  <p className="mt-3 "><b>Choose your cities</b></p>
                  <div className="rounded-lg overflow-y-auto h-56 scroll-smooth scrollbar scrollbar-thumb-cyan-700 scrollbar-thin scrollbar-thumb-rounded-lg scrollbar-track-blue-200">
                    {
                      cities.map(city => (
                        <div key={city.id} className="flex items-center m-4">
                          <input id={city.name}
                            type="checkbox"
                            value={city.name}
                            name="cities"
                            onChange={handleCheckBox}
                            className={`${checkBoxStyle}`} />
                          <label htmlFor={city.name}
                            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            {city.name}
                          </label>
                        </div>
                      ))
                    }
                  </div>
                </div>
                <div className="mt-5">Add your <b>Russme</b></div>
                <div className="mt-5">
                  <input type="file"
                    onChange={fileSelected}
                    id="russme" name="russme" disabled
                    className="border border-gray-400 py-1 px-2 w-full" />
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
                  <input type="checkbox" onChange={() => setPolicy(!policy)} className="border border-gray-400" id="policy" />
                  <label className="m-2" htmlFor="policy">
                    I accept the
                    <a href="#yes" className="text-gray-500 font-semibold">Terms of Use </a>
                    &
                    <a href="#1" className="text-gray-500 font-semibold"> Privacy Policy</a>
                  </label>
                </div>
                {(password === confPassword && password) && policy !== false ? (
                  <div className="mt-5">
                    <button
                      className="w-full bg-cyan-700 py-3 text-center text-white">Register Now</button>
                  </div>
                ) :
                  <div className="mt-5">
                    <button disabled
                      className="w-full bg-gray-500 py-3 text-center text-white cursor-not-allowed">Register Now</button>
                  </div>}
              </form>
              <div className="w-full lg:w-1/1 py-4">Allready have an account?<Link className="underline" to={"/signin"}> Signin</Link> </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
