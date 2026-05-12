import appliance from '../data/appliance'


const Analytics = () => {
const totalUsage = appliance.filter
((appliance) => appliance.isActive).reduce((total, appliance) => total + appliance.wattage, 0
)

const activeDevices = appliance.filter
((appliance) => appliance.isActive).length;

const highestDevices = appliance.reduce
((highest, appliance) => appliance.wattage >
 highest.wattage ? appliance : highest)


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
                    <p className='text-2xl font-bold'>{highestDevices.name} - {highestDevices.wattage}W</p>
                </div>
            </div>
        </div>
    )
}

export default Analytics