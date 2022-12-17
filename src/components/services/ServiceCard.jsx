import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { trend1 } from '../../assets/images/trending';

const ServiceCard =({ id, serviceDescription,averageRate,price,serviceCategory, providerName })=> {
  const [avatar, setAvatar] = useState();

    return (
      <div className="h-[400px] w-[320px] p-2" key={id}>
        <div className="relative rounded-xl overflow-hidden hover:scale-105 transition-transform cursor-pointer">
          <img src={trend1} alt="fund1" className='object-cover h-56 w-96' />
          <div className="absolute top-4 uppercase right-4 leading-tight font-bold w-[70px] h-[70px] flex items-center justify-center bg-white text-black rounded-full text-[10px] text-center">
            Discover your match
          </div>
        </div>
        <div className="flex items-center gap-4 my-4 px-2">
          <h1 className="bg-blue-500 px-3 py-1 rounded-md text-white text-[17px] font-medium">
            € {price}
          </h1>
          <p className="text-xs font-bold text-blue-500">
            <i className="fa fa-clock text-xs text-[14px]" /> {averageRate+4.5}
          </p>
          <span className='text-xs text-[14px] ml-auto'>
            {serviceCategory}
          <i className="fa fa- text-xs text-[#6D9886] text-[14px] ml-auto" />
          </span>
        </div>
        <div className='max-w-24'>
        <h2 className="font-bold text-[17px] px-2 hover:text-[#6D9886] transition-colors cursor-pointer text-ellipsis overflow-hidden">
          {serviceDescription}
        </h2>
        <h4 className='text-xs text-[14px] cursor-pointer font-medium underline text-right'>
        <Link title='View Service' 
         to={`/services/${id}`}>View Service</Link>
        </h4>
        </div>
      </div>
    );
    }
export default ServiceCard;