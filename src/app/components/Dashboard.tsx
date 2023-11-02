import React from 'react'
import Header from './Header'
import WelcomeComponent from './WelcomeComponent'


function Dashboard() {
  return (
    <div className="w-full h-[1025px] left-[272px] bg-[#F9FAFB]">
        <Header />
        <WelcomeComponent />
    </div>
  )
}

export default Dashboard