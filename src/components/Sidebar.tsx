import { LayoutDashboard, Calculator, BarChart3, Settings } from 'lucide-react'
import { NavLink } from "react-router-dom"

const Sidebar = () => {
    return (
        <aside className="w-64 min-h-screen bg-purple-400 text-white p-5">
            <h1 className="text-3xl font-bold mb-8">VoltWise</h1>

            <nav className="flex flex-col gap-4">
                <NavLink to="/" className="flex items-center font-[inter] text-xl  gap-4">
                    <LayoutDashboard size={20} />
                    Dashboard
                </NavLink>
                <NavLink to="/calculator" className="flex items-center font-[inter] text-xl gap-4">
                    <Calculator size={20} />
                    Calculator
                </NavLink>
                <NavLink to="/analytics" className="flex items-center font-[inter] text-xl gap-4">
                    <BarChart3 size={20} />
                    Analytics
                </NavLink>
                <NavLink to="/settings" className="flex items-center font-[inter] text-xl gap-4">
                    <Settings size={20} />
                    Settings
                </NavLink>

            </nav>
        </aside>
    )
}


export default Sidebar