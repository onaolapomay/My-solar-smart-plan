import Sidebar from './components/Sidebar'
import './index.css'
import AppRoutes from './routes/AppRoutes'

function App() {


  return (
    <div className='flex'>
      <Sidebar/>

      <main className='flex-1 p-6'>
        <AppRoutes />
      </main>
    </div>
  )
}

export default App
