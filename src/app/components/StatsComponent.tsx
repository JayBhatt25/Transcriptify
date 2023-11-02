import React from 'react'
import StatItem from './StatItem'

function StatsComponent() {
  return (
    <div className="w-[1096px] h-[140px] gap-4 mt-10 ml-[36px] flex justify-between">   
        <StatItem iconName={'Uploaded Files'} statNumber={100} />
        <StatItem iconName={'Transcribed'} statNumber={50} />
        <StatItem iconName={'Saved'} statNumber={20} />
    </div>
  )
}

export default StatsComponent