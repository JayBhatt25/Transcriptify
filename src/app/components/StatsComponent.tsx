import React from 'react'
import StatItem from './StatItem'

function StatsComponent() {
  return (
    <div className="w-[90%] h-auto lg:h-[140px] gap-4 mt-10 ml-[36px] flex flex-col lg:flex lg:flex-row justify-between">   
        <StatItem iconName={'Uploaded Files'} statNumber={100} />
        <StatItem iconName={'Transcribed'} statNumber={50} />
        <StatItem iconName={'Saved'} statNumber={20} />
    </div>
  )
}

export default StatsComponent