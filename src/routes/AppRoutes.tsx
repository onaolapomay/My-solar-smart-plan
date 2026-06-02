import { Routes, Route } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Calculator from '../pages/Calculator'
import Analytics from '../pages/Analytics'
import BatteryOverviewPage from '../pages/BatteryOverviewPage'
import Settings from '../pages/Settings'


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/battery-overview" element={<BatteryOverviewPage />}/>
            <Route path="/settings" element={<Settings />} />
        </Routes>
    )
}

export default AppRoutes