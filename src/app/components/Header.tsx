"use client";

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import brainwave from "@/assets/brainwave.svg"
import { navigation } from '../constants' 
import Button from './Button'
import MenuSvg from '@/assets/svg/MenuSvg'
import { HamburgerMenu } from './design/HeaderShort'
import { useState } from 'react'
import { disablePageScroll, enablePageScroll } from "scroll-lock";


const Header = () => {
    const[openNavigation, setOpenNavigation]=useState(false);

    // console.log(openNavigation)

    const toggleNavigation=()=>{
        if(openNavigation){
            setOpenNavigation(false)
            enablePageScroll();

        }
        else{
            setOpenNavigation(true)
            disablePageScroll();
        }
    }

    const handleClick=()=>{
        if(!openNavigation) return;

        enablePageScroll
        setOpenNavigation(false)

    }
    

  return (
    <div className={`fixed top-0 left-0 w-full z-50  border-b

     border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm
     ${openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"}
     `}>

<div className='flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4'>
        <Link href="/">
            <Image src={brainwave} width={190} height={40} alt="Brainwave" />
        </Link>

        <nav className={`${openNavigation ? "flex": "hidden"} fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}>
            <div className='relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row text-white'>
                {navigation.map((item)=>
                    <Link href={item.url} key={item.id} onClick={handleClick} className={`block relative font-code text-2xl uppercase text-n-1 
                        transition-colors hover:text-color-1 ${item.onlyMobile ? "lg:hidden":""} 
                        px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold
                    `}>
                        {item.title}
                    </Link>

                )}


            </div>
                            <HamburgerMenu/>

        </nav>

        <Link href="#signup" className='button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block'>
             
            New account                    
        </Link>
        <Button className="hidden lg:flex" href="#login">
            Sign up
        </Button>

            {/*hamburger button  */}
            <Button className="lg:hidden ml-auto" px="px-3"  onClick={toggleNavigation}>
                 <MenuSvg openNavigation={openNavigation}/>

            </Button>


    </div>

    </div>
    
  )
}

export default Header;