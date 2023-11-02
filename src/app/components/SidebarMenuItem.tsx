import React from 'react'
import {GoHome} from 'react-icons/go'
import {AiOutlineFolder, AiOutlineShareAlt} from  'react-icons/ai'
import {BsBookmark} from  'react-icons/bs'
import {TbTrash, TbSettings} from  'react-icons/tb'
import {BiHelpCircle} from 'react-icons/bi'
function SidebarMenuItem({bgcolor, iconName}:Readonly<{
    bgcolor: string
    iconName: string
}>) {
  return (
    <div className={`w-[208px] h-[44px] rounded-[4px] px-4 py-3 gap-1 ${bgcolor && 'bg-[#E0EDFF]' } cursor-pointer`}>
        <div className="left-content flex items-center gap-3">
            <div>
                {iconName == 'Home' && <GoHome className='w-5 h-5' />}
                {iconName == 'All Files' && <AiOutlineFolder className='w-5 h-5' />}
                {iconName == 'Saved' && <BsBookmark className='w-5 h-5' />}
                {iconName == 'Integrations' && <AiOutlineShareAlt className='w-5 h-5' />}
                {iconName == 'Trash' && <TbTrash className='w-5 h-5' />}
                {iconName == 'Settings' && <TbSettings className='w-5 h-5' />}
                {iconName == 'Help and Support' && <BiHelpCircle className='w-5 h-5' />}
            </div>
            <span className='font-Inter font-medium text-[14px] leading-[20.3px]'>{iconName}</span>
        </div>
    </div>
  )
}

export default SidebarMenuItem