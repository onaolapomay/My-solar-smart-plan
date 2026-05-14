import Card from '../components/Card'
import { BatteryCharging, Sun, Zap, Clock3, Fan, Monitor, Laptop, Refrigerator, Plus } from 'lucide-react'
import BatteryOverview from '../components/BatteryOverview'
import appliances from '../data/appliance'
import { useEffect, useState } from 'react'
import type { Appliance } from '../types/appliance'


const Dashboard = () => {

const [deviceList, setDeviceList] = useState<Appliance[]>(() => {
    const savedDevices = localStorage.getItem('devices')
    return savedDevices ? JSON.parse(savedDevices) : appliances
})

const [newDeviceName, setNewDeviceName] = useState('')
const [newDeviceWattage, setNewDeviceWattage] = useState<number | ''>('')

const [showAddForm, setShowAddForm] = useState(false)

const totalUsage = deviceList.filter
((appliance) => appliance.isActive).reduce
((total, appliance) =>
total + Number(appliance.wattage), 0)

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

const updateWattage = (id: string, wattage: number | '') => {
    const updatedDevices = deviceList.map((device) => device.id === id ? {
        ...device, wattage
    } : device)
    setDeviceList(updatedDevices)
}

const addNewDevice = () => {
    if (
        !newDeviceName.trim() ||
        newDeviceWattage === ''
    )
    return

    const newDevice = {
        id: crypto.randomUUID (),
        name: newDeviceName,
        wattage: newDeviceWattage,
        isActive: true,
    }

    setDeviceList([...deviceList, newDevice])
    setNewDeviceName('')
    setNewDeviceWattage('')
}

const deleteDevice = (id: string) => {
    const filteredDevices = deviceList.filter((device) => device.id !== id)
    setDeviceList(filteredDevices)
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
                        className=' bg-slate-900 text-white p-5 rounded-2xl cursor-pointer'>
                            <div className='flex items-center justify-between'>
                                <div className=''>
                                    {appliance.name === 'fan' && <Fan size={28} />}
                                    {appliance.name === 'TV' && <Monitor size={28} />}
                                    {appliance.name === 'Fridge' && <Refrigerator size={28} />}
                                    {appliance.name === 'Laptop' && <Laptop size={28} />}   
                                </div>
                                <h4 className='text-lg font-semibold'>{appliance.name}</h4>
                                <input type="number"
                                value={appliance.wattage} className='w-24 mt-3 bg-slate-800 text-white p-2 rounded-lg' 
                                onChange={(e) => updateWattage(appliance.id, e.target.value === '' ? '' : Number(e.target.value))} />
                            </div>

                            <p className={`mt-3 text-sm font-[inter] ${
                                appliance.isActive ? 'text-green-400' : 'text-red-400'
                            }`}>
                                {appliance.isActive ? 'Active' : 'Inactive'}
                            </p>

                            <div className='flex items-center justify-between'>
                            <button onClick={() => toggleAppliance(appliance.id)}
                                className={`mt-4 w-14 h-7 flex items-center rounded-full p-1 transition-all
                                duration-300 ${
                                    appliance.isActive ? 'bg-green-600' : 'bg-slate-600'
                                }`}>
                                    <div className={`bg-white w-5 h-5 rounded-full transition-all duration-300
                                        ${appliance.isActive ? 'translate-x-7' : ''}`}>
                                    </div>
                            </button>

                            <button 
                            onClick={() => deleteDevice(appliance.id)}
                            className='mt-2 bg-orange-300 hover:bg-orange-500 text-white font-mono p-3 rounded-lg cursor-pointer transition-colors duration-300'
                            >
                                Delete
                            </button>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
            <div className='mt-8 flex flex-col items-center'>
                <button onClick={() => setShowAddForm(!showAddForm)}
                    className='bg-green-400 p-4 rounded-full'>
                    <Plus size={24} color='white' />
                </button>
                {showAddForm && (
                    <div className='bg-slate-950 p-6 rounded-xl mt-2'>
                    <h2 className='text-2xl font-[inter] font-bold mb-4'>Add Appliance</h2>
                    <div className='flex flex-col md:flex-row gap-4'>
                        <input type="text"
                        placeholder='Device name'
                        value={newDeviceName}
                        onChange={(e) => setNewDeviceName(e.target.value)}
                        className='bg-slate-800 text-white p-3 rounded-lg flex-1' />

                        <input type="number"
                        placeholder='Wattage'
                        value={newDeviceWattage}
                        onChange={(e) => setNewDeviceWattage(e.target.value === '' ? '' : Number(e.target.value))}
                        className='bg-slate-800 text-white p-3 rounded-lg w-32' />

                        <button 
                        onClick={addNewDevice}
                        className='bg-green-600 hover:bg-green-800 text-white p-3 rounded-lg cursor-pointer transition-colors duration-300'
                        >
                            Add Device
                        </button>
                    </div>
                </div>
                )}

            </div>
        </div>
    )
}


export default Dashboard