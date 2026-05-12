import Card from '../components/Card'
import { BatteryCharging, Sun, Zap, Clock3, Fan, Monitor, Laptop, Refrigerator } from 'lucide-react'
import BatteryOverview from '../components/BatteryOverview'
import appliances from '../data/appliance'
import { useEffect, useState } from 'react'
import type { Appliance } from '../types/appliance'
// import { stringify } from 'querystring'


const Dashboard = () => {

const [deviceList, setDeviceList] = useState<Appliance[]>(() => {
    const savedDevices = localStorage.getItem('devices')
    return savedDevices ? JSON.parse(savedDevices) : appliances
})

const totalUsage = deviceList.filter
((appliance) => appliance.isActive).reduce
((total, appliance) =>
total + appliance.wattage, 0)

const batteryPercentage = 
totalUsage > 300 ? 45 : totalUsage > 200 ? 65 : 85

const estimatedRuntime =
totalUsage > 300
? '2h 12m'
: totalUsage > 200
? '4h 30m'
: '7h 57m'

const batteryStatus =
totalUsage > 300
? 'Discharging Fast' : totalUsage > 200
? 'In Use' : 'Charging'

const usageStatus =
totalUsage > 300
? 'High Usage'
: totalUsage > 200
? 'Moderate Usage'
: 'Low Usage'

const activeDevices =
deviceList.filter((appliance) => appliance.isActive).length

const toggleAppliance = (id: string) => {
    const updatedDevices = deviceList.map((device) => device.id === id ? 
    { ...device, isActive: !device.isActive } : device)
    setDeviceList(updatedDevices)
}

useEffect(() => {
    localStorage.setItem('devices', JSON.stringify(deviceList))
}, [deviceList])

    return (
        <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className='text-slate-500 mt-1'>{activeDevices} active devices</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                <Card
                title='Battery Level'
                value={`${batteryPercentage}%`}
                icon={<BatteryCharging />} />

                <Card
                title='Solar Input'
                value='620W' 
                icon={<Sun />} />

                <Card
                title='Current Load'
                value={`${totalUsage}W`}
                icon={<Zap />} 
                status={usageStatus} />

                <Card
                title='Estimated Runtime'
                value={estimatedRuntime}
                icon={<Clock3 />} />

                <BatteryOverview
                percentage={batteryPercentage}
                status={batteryStatus}
                runtime={estimatedRuntime} />
            </div>

            <div className='mt-8'>
                <h2 className='text-2xl font-bold mb-4'>Active Appliances</h2>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    {deviceList.map((appliance) => (
                        <div key={appliance.id}
                        className='bg-slate-900 text-white p-5 rounded-2xl cursor-pointer'>
                            <div className='flex items-center justify-between'>
                                <div>
                                    {appliance.name === 'fan' && <Fan size={28} />}
                                    {appliance.name === 'TV' && <Monitor size={28} />}
                                    {appliance.name === 'Fridge' && <Refrigerator size={28} />}
                                    {appliance.name === 'Laptop' && <Laptop size={28} />}   
                                </div>
                                <h4 className='text-lg font-semibold'>{appliance.name}</h4>
                                <span className='text-xl text-slate-500'>{appliance.wattage}W</span>
                            </div>

                            <p className={`mt-3 text-sm ${
                                appliance.isActive ? 'text-green-400' : 'text-red-400'
                            }`}>
                                {appliance.isActive ? 'Active' : 'Inactive'}
                            </p>

                            <button onClick={() => toggleAppliance(appliance.id)}
                                className={`mt-4 w-14 h-7 flex items-center rounded-full p-1 transition-all
                                duration-300 ${
                                    appliance.isActive ? 'bg-green-600' : 'bg-slate-600'
                                }`}>
                                    <div className={`bg-white w-5 h-5 rounded-full transition-all duration-300
                                        ${appliance.isActive ? 'translate-x-7' : ''}`}>

                                    </div>

                            </button>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}


export default Dashboard