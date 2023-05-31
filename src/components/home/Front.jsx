import { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function Front() {
  const [searchBar, setSearchBar] = useState(false);

  return (
    <section className="z-10 m-auto">
      <div className="sm:w-12/12 mx-auto">
        <div
          className={`py-8  relative w-full h-screen bg-homefrontbg bg-cover lg:bg-center bg-no-repeat bg-left`}
        >
          <div className="absolute bottom-[31%] sm:left-[6%] left-[5%] flex items-center flex-wrap gap-4">
            {searchBar && (
              <form className="flex items-end gap-4 flex-wrap">
                <SearchBar />
                  <Link to="/services">
                <button className="bg-white px-2 py-3 w-24 font-bold uppercase text-sm text-black hover:text-white hover:bg-black hover:bg-opacity-50 rounded-md">
                  Find
                </button>
                    </Link> 
              </form>
            )}
            {!searchBar && (
              <button className="sm:text-[20px] bg-Myrtle-Green text-white hover:bg-cyan-700 transition-colors sm:px-10 px-3 py-3 rounded-md capitalize sm:w-auto w-full font-bold">
                Select Your Needs
              </button>
            )}

            {!searchBar && (
              <button
                onClick={() => setSearchBar(!searchBar)}
                className="sm:text-[20px] bg-black opacity-50 text-white sm:px-10 px-3 py-3 rounded-md border-[1px] hover:bg-white hover:text-black border-white capitalize sm:w-auto w-full font-bold"
              >
                Search
              </button>
            )}
          </div>
          <article className="lg:flex hidden items-end absolute top-[40%] right-0 w-[30%] border-l-2 h-1/2 px-4 border-l-white">
            <div className="text-white text-[26px] w-[80%]">
              WHAT CAN OUR HOME IMPROVEMENT PROFESSIONALS DO FOR YOU?
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
