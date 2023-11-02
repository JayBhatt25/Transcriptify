import React from 'react'
import Header from './Header'
import WelcomeComponent from './WelcomeComponent'
import StatsComponent from './StatsComponent'
import RecentFiles from './RecentFiles'


function Dashboard() {
  return (
    <div className="w-full h-[1025px] left-[272px] bg-[#F9FAFB]">
        <Header />
        <WelcomeComponent />
        <StatsComponent />
        <RecentFiles />
    </div>
  )
}

export default Dashboard