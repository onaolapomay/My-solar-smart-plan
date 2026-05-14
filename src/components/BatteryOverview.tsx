type BatteryOverviewProps = {
    percentage: number;
    status: string;
    runtime: string;
}

const BatteryOverview = ({ percentage, status, runtime }: BatteryOverviewProps) => {
    const batteryColor = percentage > 80 ? 'bg-green-500' : percentage > 50 ? 'bg-yellow-600' : 'bg-red-700';
    return (
        <>
        <div className="backdrop-blur-md border border-white/10 bg-slate-900/90 text-white p-12 rounded-3xl mt-8">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-slate-300 text-sm">Battery Status</p>
                </div>

                <div >
                    <h2 className="text-6xl font-bold mt-4">{percentage}%</h2>
                    <p className="mt-4 text-green-400">{status}</p>
                </div>
            </div>

            <div className="text-right">
                <p className="text-slate-400 text-sm">Estimated Runtime</p>
                <h3 className="text-2xl font-semibold mt-2">{runtime}</h3>
            </div>
        </div>

        <div className="mt-8">
            <div className="w-full h-4 bg-slate-700 rounded-full overflow-hidden">
                <div className={`h-full ${batteryColor} rounded-full`}
                    style={{ width: `${percentage}%` }}>
                </div>
            </div>
        </div>

        </>
    )
}


export default BatteryOverview