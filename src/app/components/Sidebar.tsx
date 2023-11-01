import React from 'react'
import SidebarMenuItem from './SidebarMenuItem'
import {HiOutlineRocketLaunch} from 'react-icons/hi2'
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
  return (
    <div className="flex flex-col justify-between items-center p-6 w-[272px] bg-[#FFFFFF]">
        <div className="w-[224px] h-[404px] gap-8 flex flex-col justify-between">
            <div className="logo-container w-full h-[40px] rounded-[4px] px-[24px] py-[8px] gap-1">
                <span className="text-[#0048AD] font-bold font-GothamPro
                 text-2xl leading-6">abc firm</span>
            </div>
            <div className="sidebar-section w-[224px] h-[332px] px-2 gap-3">
                {menuItems.map( menuitem => (
                    <SidebarMenuItem key={menuitem.key} bgcolor={menuitem.bgcolor} iconName={menuitem.iconName} />
                ))}
            </div>
        </div>
        <div className="w-[224px] h-[180px] rounded-[8px] p-4 gap-4 bg-[#E0EDFF] flex flex-col items-center">
            <HiOutlineRocketLaunch className="w-6 h-6" />
            <div className="w-[192px] h-[45px] flex flex-col items-center gap-2">
                <span className='w-[132px] h-[20px] font-Inter font-semibold text-sm leading-[20.3px] text-center text-[#101928]'>Upgrade Account</span>
                <span className='w-[192px] h-[17px] font-Inter font-normal text-xs leading-[17.3px]'>Access to Unlimited Transcription</span>
            </div>
            <button className='w-[192px] h-[47px] rounded-md px-6 py-3 gap-[10px] bg-[#0048AD] text-white'>Upgrade</button>
        </div>
    </div>
  )
}

export default Sidebar