import { useEffect, useState } from 'react'
import type { Appliance } from '../types/appliance'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'


const Analytics = () => {

    const [ deviceList, setDeviceList ] = useState<Appliance[]>([])

    useEffect(() => {
        const savedDevices = localStorage.getItem('devices')
        if (savedDevices) {
            setDeviceList(JSON.parse(savedDevices))
        }
    }, [])

const totalUsage = deviceList.filter((device) => device.isActive)
    .reduce((total, device) => total + Number(device.wattage), 0)

const activeDevices = deviceList.filter
((device) => device.isActive).length;

const highestDevices = deviceList.length > 0
    ? deviceList.reduce((highest, device) => {
        return device.wattage > highest.wattage ? device : highest
    })
    : undefined

const usageStatus = totalUsage > 300
    ? 'High Usage'
    : totalUsage > 200
    ? 'Moderate Usage'
    : 'Low Usage'


    const chartData = deviceList.map((device) => ({
        name: device.name,
        wattage: device.isActive ? Number(device.wattage) : 0,
    }))



    return (
        <div>
            <h1 className='text-3xl font-bold mb-6'>Analytics</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                <div className='bg-slate-900 text-white p-6 rounded-2xl'>
                    <h2 className='text-xl font-semibold mb-2'>Total Usage</h2>
                    <p className='text-2xl font-bold'>{totalUsage}W</p>
                </div>

                <div className='bg-slate-900 text-white p-6 rounded-2xl'>
                    <h2 className='text-xl font-semibold mb-2'>Active Devices</h2>
                    <p className='text-2xl font-bold'>{activeDevices}</p>
                </div>

                <div className='bg-slate-900 text-white p-6 rounded-2xl'>
                    <h2 className='text-xl font-semibold mb-2'>Highest Device</h2>
                    <p className='text-2xl font-bold'>{highestDevices?.name} - {highestDevices?.wattage}W</p>
                </div>

                <div className='bg-slate-900 text-white p-6 rounded-2xl'>
                    <h2 className='text-xl font-semibold mb-2'>Usage Status</h2>
                    <p className='text-2xl font-bold'>{usageStatus}</p>
                </div>
            </div>

            <div className='bg-slate-800 p-6 rounded-2xl mt-8'>
                <h2>Appliance Usage</h2>

                <div className='h-75'>
                    <ResponsiveContainer width='100%' height='100%'>
                        <BarChart data={chartData}>
                            <XAxis dataKey='name' stroke='#888' />
                            <YAxis stroke='#888' />
                            <Tooltip />
                            <Bar dataKey='wattage' fill='#4ade80' barSize={30} />
                        </BarChart>
                    </ResponsiveContainer>

                </div>

            </div>
        </div>
    )
}

export default Analytics