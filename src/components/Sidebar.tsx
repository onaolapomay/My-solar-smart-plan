import { LayoutDashboard, Calculator, BarChart3, Settings, Menu, X  } from 'lucide-react'
import { NavLink } from "react-router-dom"
import { useState } from 'react'

const Sidebar = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden fixed top-4 right-4 z-50 bg-slate-700 p-3 rounded-lg text-white">
                {isOpen ? <X/> : <Menu/>}
            </button>
                <aside className={`fixed md:static top-0 left-0 w-64 min-h-screen bg-purple-400 text-white p-5 transform transition-transform duration-300 z-40
                ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:flex}`}>
                    <h1 className="text-3xl font-bold mb-8">VoltWise</h1>

            <nav className="flex flex-col gap-4">
                <NavLink to="/" onClick={() => setIsOpen(false)} className="flex items-center font-[inter] text-xl  gap-4">
                    <LayoutDashboard size={20} />
                    Dashboard
                </NavLink>
                <NavLink to="/calculator" onClick={() => setIsOpen(false)} className="flex items-center font-[inter] text-xl gap-4">
                    <Calculator size={20} />
                    Calculator
                </NavLink>
                <NavLink to="/analytics" onClick={() => setIsOpen(false)} className="flex items-center font-[inter] text-xl gap-4">
                    <BarChart3 size={20} />
                    Analytics
                </NavLink>
                <NavLink to="/settings" onClick={() => setIsOpen(false)} className="flex items-center font-[inter] text-xl gap-4">
                    <Settings size={20} />
                    Settings
                </NavLink>

            </nav>
                </aside>
        </>
    )
}


export default Sidebar