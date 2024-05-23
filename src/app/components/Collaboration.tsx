import React from 'react'
import { collabApps, collabContent, collabText } from '../constants';
import Image from 'next/image';
import check from "@/assets/check.svg"
import Button from './Button';
import brainwaveSymbol from "@/assets/brainwave-symbol.svg"
import { LeftCurve, RightCurve } from './design/Collabioration';

const Collaboration = () => {
  return (
    <section >
        <div className='container lg:flex'>
            <div className='max-w-[25rem]'>
                <h2 className='h2 mb-4 md:mb-8'>
                    AI Chat App for seamless collaboration
                </h2>
                <ul className='max-w-[22rem] mb-10 md:mb-14'>
                    {collabContent.map((data,index)=>
                    <li key={index} className='mb-3 py-3'>
                        <div className='flex items-center'>
                            <Image src={check} width={24} height={24} alt='logo'  />
                            <h6 className='body-2 ml-5'>{data.title}</h6>

                            


                        </div>
                        {data.text && (
                                <p className='body-2 mt-3 text-n-4'>{data.text}</p>
                            )}

                    </li>

                    )}
                </ul>
                <Button>Try it Now</Button>
            </div>

            {/* right side  */}
             <div className='lg:ml-auto xl:w-[38rem] mt-4'>
                <p className='body-2 mb-10 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto'>
                    {collabText}
                </p>

                
                <div className='mt-4 border border-n-6 relative left-1/2 flex w-[22rem] aspect-square rounded-full -translate-x-1/2 scale:75 md:scale-100 '>
                    <div className='border border-n-6 flex w-60 aspect-square m-auto rounded-full'>
                        <div className='w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full '>
                            <div className='flex items-center justify-center w-full h-full bg-n-8 rounded-full'>
                            <Image src={brainwaveSymbol} height={48} width={48} alt='brainwave' />


                            </div>

                        </div>
                    </div>

                    <ul>
                        {collabApps.map((app,index)=>(
                            <li key={index} className={`absolute top-0 left-1/2 h-1/2 -m-[1.6rem] origin-bottom rotate-${index * 45}`}>
                                <div className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${index * 45}`}>
                                    <Image src={app.icon} width={app.width} height={app.height} alt={app.title} className='m-auto' />
                                </div>

                            </li>
                        ))}
                    </ul>
                    <LeftCurve/>
                    <RightCurve/>
                </div>

             </div>
        </div>
    </section>
  )
}

export default Collaboration;