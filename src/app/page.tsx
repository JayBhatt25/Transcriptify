import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import Header from './components/Header'
import { Provider } from 'react-redux'

export default function Home() {
  return (
   

   
    <main className="min-h-screen overflow-x-hidden relative">
        <Header />
        <Sidebar />
      <div className="app__body flex bg-[#F9FAFB] ">
        <Dashboard />
      </div>
    </main>
   
  )
}
