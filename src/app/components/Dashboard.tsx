import React from 'react'
import Header from './Header'
import WelcomeComponent from './WelcomeComponent'
import StatsComponent from './StatsComponent'
import RecentFiles from './RecentFiles'


function Dashboard() {
  return (
    <div className="flex-[0.9] w-full min-h-screen bg-[#F9FAFB] flex flex-col items-center">
        <WelcomeComponent />
        <StatsComponent />
        <RecentFiles />
    </div>
  )
}

export default Dashboard