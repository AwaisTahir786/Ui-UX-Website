import React from 'react'
import Image from 'next/image';
import { yourLogos } from '../constants';

const CompanyLogos = ({className}:any) => {
  return (
    <div className={`${className || ""}`}>
      <h5 className='tagline mb-6 text-center text-n-1/50'>
        Helping People create beautiful content at
      </h5>
      <ul className='flex'>
        {yourLogos.map((logo,index)=>
        <li key={index} className='flex items-center justify-center flex-1 h-[8.5rem]'>
            <Image src={logo} width={134} height={28} alt={logo} />

        </li>
        )}
      </ul>
    </div>
  )
}

export default CompanyLogos;
