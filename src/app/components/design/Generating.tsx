import React from 'react'
import loading from "@/assets/loading.png"
import Image from 'next/image'

const Generating = ({className}:any) => {
  return (
    <div className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${className || ""} text-base`}>
        <Image src={loading} width={100} height={100} className='mr-4 w-5 h-5' alt='Loading'   />
        AI is generation
    </div>
  )
}

export default Generating;