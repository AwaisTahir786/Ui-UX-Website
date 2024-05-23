import React from 'react'
import Section from './Section';
import smallSphare from "@/assets/4-small.png"
import stars from "@/assets/stars.svg"
import Image from 'next/image';
import Heading from './Heading';
import PricingList from './PricingList';
import { LeftLine,RightLine } from './design/Pricingshort';
import Link from 'next/link';

const Pricing = () => {
  return (
   <Section className="overflow-hidden" id="pricing">
    <div className='container relative z-2'>
        <div className='hidden relative justify-center mb-[6.5rem] lg:flex'>
            <Image src={smallSphare} width={255} height={255} alt='Sphere' className='relative z-1' />

            <div className='absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none'>
                <Image src={stars} width={950} height={400} alt='stars'  />
            </div>

        </div>
        <Heading title="Pay once, use forever" tag="Get started with Brainwave" />

        <div className='relative'>
            <PricingList/>
            <LeftLine/>
            <RightLine/>

        </div>

        <div className='flex justify-center mt-10'>
            <Link className="text-xs font-code font-bol tracking-wider uppercase border-b" href={"/pricing"}>
                See the full details
            </Link>
        </div>

    </div>

   </Section>
  )
}

export default Pricing;
