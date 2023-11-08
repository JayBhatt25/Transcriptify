"use client"

import React, { useEffect } from 'react'
import SidebarMenuItem from './SidebarMenuItem'
import {HiOutlineRocketLaunch} from 'react-icons/hi2'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '../hooks'
import { RootState } from '../store'
import { toggleMenu } from '../menuSlice'
import {IoIosClose} from 'react-icons/io'
function Sidebar() {
    interface MenuItems {
        key: number,
        bgcolor: string,
        iconName: string
    }
    const menuItems: Array<MenuItems> = [
        {
            key: 1,
            bgcolor: 'blue',
            iconName: 'Home'
        },
        {
            key: 2,
            bgcolor: '',
            iconName: 'All Files'
        },
        {
            key: 3,
            bgcolor: '',
            iconName: 'Saved'
        },
        {
            key: 4,
            bgcolor: '',
            iconName: 'Integrations'
        },
        {
            key: 5,
            bgcolor: '',
            iconName: 'Trash'
        },
        {
            key: 6,
            bgcolor: '',
            iconName: 'Settings'
        },
        {
            key: 7,
            bgcolor: '',
            iconName: 'Help and Support'
        }
    ]
    const menuOpenState = useSelector((state: RootState) => state.menu.value)
    const dispatch = useAppDispatch()
    useEffect(() => {

    },[menuOpenState]);
    const handleMenuClose = () => {
        if(menuOpenState) {
            const menu = document.querySelector('.sidebar')
            dispatch(toggleMenu())
            menu?.classList.remove('visible')
            menu?.classList.add('hidden')
        }
        
    }
  return (
    <div className="sidebar w-[400px] flex-[0.1] h-full flex-col justify-between items-center right-0 p-6 bg-[#FFFFFF] fixed z-[101] border-l hidden">
        <div className="w-full h-[404px] gap-8 flex flex-col justify-between ">
            <div className="logo-container w-full h-[40px] rounded-[4px] px-[24px] py-[8px] gap-1 flex justify-between">
                <span className="text-[#0048AD] font-bold font-GothamPro
                 text-2xl leading-6">Transcriptify</span>
                <IoIosClose onClick={() => handleMenuClose()} className="w-5 h-5 cursor-pointer" />
            </div>
            <div className="sidebar-section w-4/5 h-[332px] px-2 gap-3">
                {menuItems.map( menuitem => (
                    <SidebarMenuItem key={menuitem.key} bgcolor={menuitem.bgcolor} iconName={menuitem.iconName} />
                ))}
            </div>
        </div>
        <div className="w-full h-[180px] rounded-[8px] p-4 gap-4 bg-[#E0EDFF] flex flex-col items-center">
            <HiOutlineRocketLaunch className="w-6 h-6" />
            <div className="w-[100%] h-[45px] flex flex-col items-center gap-2">
                <span className='w-[75%] h-[20px] font-Inter font-semibold text-sm leading-[20.3px] text-center text-[#101928]'>Upgrade Account</span>
                <span className='w-full h-[17px] font-Inter font-normal text-xs leading-[17.3px] text-center'>Access to Unlimited Transcription</span>
            </div>
            <button className='w-full h-[47px] rounded-md px-6 py-3 gap-[10px] bg-[#0048AD] text-white'>Upgrade</button>
        </div>
    </div>
  )
}

export default Sidebar