import Sidebar from './components/Sidebar'
import './index.css'
import AppRoutes from './routes/AppRoutes'
import { Moon, SunMedium } from 'lucide-react'
import { useState } from 'react'

function App() {
  const [DarkMode, setDarkMode] = useState(true)

  return (
    <div className={`flex min-h-screen transition-all duration-300 ${DarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      
      <Sidebar/>
      <button onClick={() => setDarkMode(!DarkMode)} className='fixed bottom-6 right-6 p-3 rounded-full bg-slate-800 text-white z-50'>
                {DarkMode ? <SunMedium /> : <Moon />}
            </button>

      <main className='flex-1 p-6'>
        <AppRoutes />
      </main>
    </div>
  )
}

export default App
