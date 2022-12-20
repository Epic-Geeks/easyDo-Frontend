import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { trend1 } from '../../assets/images/trending';

import { FaHeart } from "react-icons/fa";

const ServiceCard =({ id, serviceDescription,averageRate,price,serviceCategory, providerName })=> {
  const [avatar, setAvatar] = useState();
  const [red, setRed] = useState(false);

    return (
      <div className="md:h-full w-[320px] p-2 mb-2 mt-10" key={id}>
        <div className="relative rounded-xl overflow-hidden hover:scale-105 transition-transform">
          <img src={trend1} alt="fund1" className='object-cover h-56 w-96' />
          <div className="absolute top-4 uppercase right-4 leading-tight font-bold w-[70px] h-[70px] flex items-center justify-center bg-white text-black rounded-full text-[10px] text-center">
            Discover your match
          </div>
        </div>
        <div className="flex items-center gap-4 my-4 px-2">
          <h1 className="bg-Myrtle-Green px-3 py-1 rounded-md text-white text-[17px] font-medium">
            JD {price}
          </h1>
          <p className="text-xs font-bold text-Myrtle-Green">
            <i className="fa fa-clock text-xs text-[14px]" /> {averageRate+4.5}
          </p>
          <span className='text-xs text-[14px] ml-auto'>
            {serviceCategory}
          <i className="fa fa- text-xs text-[#6D9886] text-[14px] ml-auto" />
          </span>
          <div className={``}>
           <FaHeart className={`${red ? "text-red-600" : ""}`} onClick={() => setRed(!red)}/>
          </div>
        </div>
        <div className='max-w-24'>
        <h2 className="font-bold text-[17px] px-2 hover:text-[#6D9886] transition-colors text-ellipsis overflow-hidden">
          {serviceDescription}
        </h2>
        <h4 className='text-xs text-[14px] cursor-pointer font-medium underline text-right pt-3'>
        <Link title='View Service' 
         to={`/services/${id}`}>View Service</Link>
        </h4>
        </div>
      </div>
    );
    }
export default ServiceCard;