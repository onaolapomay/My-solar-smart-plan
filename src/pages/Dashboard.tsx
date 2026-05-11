import Card from '../components/Card'
import { BatteryCharging, Sun, Zap, Clock3, } from 'lucide-react'
import BatteryOverview from '../components/BatteryOverview'
import appliances from '../data/appliance'


const Dashboard = () => {
const totalUsage = appliances.filter
((appliance) => appliance.isActive).reduce
((total, appliance) =>
total + appliance.wattage, 0)

    return (
        <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                <Card
                title='Battery Level'
                value={85}
                icon={<BatteryCharging />} />

                <Card
                title='Solar Input'
                value='620W' 
                icon={<Sun />} />

                <Card
                title='Current Load'
                value={`${totalUsage}W`}
                icon={<Zap />} />

                <Card
                title='Estimated Runtime'
                value='7h 57m'
                icon={<Clock3 />} />

                <BatteryOverview
                percentage={50}
                status='Charging'
                runtime='7h 57m' />
            </div>

            <div className='mt-8'>
                <h2 className='text-2xl font-bold mb-4'>Active Appliances</h2>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    {appliances.map((appliance) => (
                        <div key={appliance.id} className='bg-slate-900 text-white p-5 rounded-2xl'>
                            <div className='flex items-center justify-between'>
                                <h4 className='text-lg font-semibold'>{appliance.name}</h4>
                                <span className='text-xl text-slate-500'>{appliance.wattage}W</span>
                            </div>

                            <p className={`mt-3 text-sm ${
                                appliance.isActive ? 'text-green-400' : 'text-red-400'
                            }`}>
                                {appliance.isActive ? 'Active' : 'Inactive'}
                            </p>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}


export default Dashboard