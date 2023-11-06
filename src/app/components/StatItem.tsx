import React from 'react'
import {AiOutlineFolder} from  'react-icons/ai'
import {BsBookmark} from  'react-icons/bs'
import {TbLetterT} from 'react-icons/tb'
function StatItem({iconName, statNumber}:Readonly<{
    iconName: string,
    statNumber: number,
}>) {
  return (
    <div className="min-w-[30%] h-[140px] rounded-2xl border  p-4 gap-4 flex flex-col bg-[#FFFFFF]">
        <div className="icon__container w-10 h-10 rounded-[20px] border border-[#E4E7EC]">
            {iconName == 'Uploaded Files' && <AiOutlineFolder className="w-5 h-5 mt-[10px] ml-[10px]" />}
            {iconName == 'Transcribed' && <TbLetterT className="w-5 h-5 mt-[10px] ml-[10px]" />}
            {iconName == 'Saved' && <BsBookmark className="w-5 h-5 mt-[10px] ml-[10px]" />}
        </div>
        <div className="heading-number-container w-[322.67px] h-[52px] gap-2 flex flex-col">
            <span className="font-Inter font-semibold text-xl leading-[24px]">{statNumber}</span>
            <span className="font-Inter font-normal text-xs md:text-sm text-[#475367]">{iconName}</span>
        </div>
    </div>
  )
}

export default StatItem