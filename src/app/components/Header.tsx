"use client"

import React, { useEffect } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {PiBell} from 'react-icons/pi'
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import {  useAppDispatch } from '../hooks'
import {RootState} from '../store'
import {  toggleMenu } from '../menuSlice'
import { useSelector } from 'react-redux'
import {GiHamburgerMenu} from 'react-icons/gi'
function Header() {
    const menuOpenState = useSelector((state: RootState) => state.menu.value)
    const dispatch = useAppDispatch()
   
    const handleMenuOpen = () => {
        const menu = document.querySelector('.sidebar')
        dispatch(toggleMenu())
        menu?.classList.remove('hidden')
        menu?.classList.add('visible')
    }
    const handleMenuToggle = () => {  
        if(menuOpenState){
           handleMenuOpen()
        }
        
    }

    useEffect(() => {

    },[menuOpenState]);

  return (
    <div className="w-full max-h-16 h-auto bg-white
     border-b-[1px] px-9 flex justify-between fixed z-[100] bg-opacity-60">
        <div className="container  w-full 
        max-h-16 h-auto py-3 gap-[10px]">
            <div className="header__content  w-full flex
             justify-between max-h-10 h-auto items-center">
                <span className="text-[#0048AD] font-bold font-GothamPro
                 text-2xl leading-6 hidden sm:block">abc firm</span>
                <div className="content__left  w-[400px] max-h-10
                 h-auto gap-10">
                    
                     <div className="LabelFrame w-full 
                                 h-auto max-h-10 gap-1">
                                    <div className="InputFrame w-full 
                                     h-auto max-h-10 
                                    rounded-md px-3 py-[10px] gap-3 bg-[#F9FAFB] flex">
                                        <AiOutlineSearch className="w-5 h-5" />
                                        <input className='w-[92px] h-5 text-sm font-normal 
                                        leading-5 text-[#667185] font-Inter bg-[#F9FAFB] focus:outline-none' placeholder='Search here...' />
                                    </div>
                                </div>
                        </div>
                <div className="content__right w-[200px]
                h-auto max-h-10 gap-3 flex items-center justify-end">
                    <div className="headerIcons__container w-full 
                    h-auto max-h-[24px] rounded-md gap-[10px] flex items-center justify-between">
                        <div className="featured-icon w-10 h-10 rounded-[20px] bg-[#F0F2F5] items-center relative cursor-pointer">
                            <PiBell className="w-5 h-5 absolute top-[10px] left-[10px]"/>
                        </div>
                        <Avatar className='w-10 h-10 cursor-pointer'>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <GiHamburgerMenu onClick={() => handleMenuToggle()} className='w-5 h-5 cursor-pointer text-[#0048AD]'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header