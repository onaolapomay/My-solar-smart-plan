import { useState } from 'react'
import { Battery, Clock3, Sun, Zap, BatteryCharging, } from 'lucide-react'

const Calculator = () => {
  const [load, setLoad] = useState('')
  const [batterySize, setBatterySize] =
    useState('')
  const [inverterSize, setInverterSize] =
    useState('')
  const [panelWattage, setPanelWattage] =
    useState('')
  const [panelCount, setPanelCount] =
    useState('')
  const [sunHours, setSunHours] =
    useState('')

  const batteryWh =
    Number(batterySize) * 1000

  const usableBatteryWh =
    batteryWh * 0.9

  const runtime =
    Number(load) > 0
      ? (
          usableBatteryWh /
          Number(load)
        ).toFixed(1)
      : '0'

      const systemEfficiency = 0.8

        const dailyProduction =
        Number(panelWattage) *
        Number(panelCount) *
        Number(sunHours) *
        systemEfficiency

  const inverterCapacity =
    Number(inverterSize) * 0.8 * 1000

  const compatibility =
    Number(load) <= inverterCapacity
      ? 'Compatible'
      : 'Incompatible'


    const solarPower =
        Number(panelWattage) *
        Number(panelCount) *
        0.8

       const solarAssistedRuntime =
        solarPower >= Number(load)
        ? 'Unlimited (Daytime)'
        : (
            usableBatteryWh /
            (Number(load) - solarPower)
        ).toFixed(1) + ' hrs'




  return (
    <div>
      <h1 className='text-3xl font-bold mb-2'>
        Solar System Calculator
      </h1>

      <p className='text-slate-400 mb-8'>
        Analyze your complete solar setup
        in one place.
      </p>



      {/* Inputs */}

      <div className='bg-slate-900/90 border border-white/10 backdrop-blur-md rounded-2xl p-6'>

        <h2 className='text-2xl font-bold mb-6'>
          System Inputs
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>

          <input
            type='number'
            placeholder='Load (W)'
            value={load}
            onChange={(e) =>
              setLoad(e.target.value)
            }
            className='bg-slate-800 p-3 rounded-lg'
          />

          <input
            type='number'
            placeholder='Battery Size (kWh)'
            value={batterySize}
            onChange={(e) =>
              setBatterySize(
                e.target.value
              )
            }
            className='bg-slate-800 p-3 rounded-lg'
          />

          <input
            type='number'
            placeholder='Inverter Size (KVA)'
            value={inverterSize}
            onChange={(e) =>
              setInverterSize(
                e.target.value
              )
            }
            className='bg-slate-800 p-3 rounded-lg'
          />

          <input
            type='number'
            placeholder='Panel Wattage (W)'
            value={panelWattage}
            onChange={(e) =>
              setPanelWattage(
                e.target.value
              )
            }
            className='bg-slate-800 p-3 rounded-lg'
          />

          <input
            type='number'
            placeholder='Number of Panels'
            value={panelCount}
            onChange={(e) =>
              setPanelCount(
                e.target.value
              )
            }
            className='bg-slate-800 p-3 rounded-lg'
          />

          <input
            type='number'
            placeholder='Sun Hours Per Day'
            value={sunHours}
            onChange={(e) =>
              setSunHours(
                e.target.value
              )
            }
            className='bg-slate-800 p-3 rounded-lg'
          />

        </div>

      </div>

      {/* Results */}




      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8'>

        <div className='bg-slate-900/90 border border-white/10 rounded-2xl p-6'>
          <Battery
            size={30}
            className='mb-3'
          />

          <h3 className='text-slate-400'>
            Usable Battery
          </h3>
          <p className='text-xs text-slate-500 mt-1'>
            Assumes 90% usable battery capacity
          </p>

          <p className='text-2xl font-bold mt-2'>
            {usableBatteryWh.toLocaleString()} Wh
          </p>
        </div>

        <div className='bg-slate-900/90 border border-white/10 rounded-2xl p-6'>
          <Clock3
            size={30}
            className='mb-3'
          />

          <h3 className='text-slate-400'>
            Battery-only Runtime
          </h3>

          <p className='text-2xl font-bold mt-2'>
            {runtime} hrs
          </p>
        </div>

        <div className='bg-slate-900/90 border border-white/10 rounded-2xl p-6'>
          <Sun
            size={30}
            className='mb-3'
          />

          <h3 className='text-slate-400'>
            Daily Production
          </h3>

          <p className='text-2xl font-bold mt-2'>
            {(
              dailyProduction / 1000
            ).toFixed(1)}{' '}
            kWh/day
          </p>
        </div>

        <div className='bg-slate-900/90 border border-white/10 rounded-2xl p-6'>
          <Zap
            size={30}
            className='mb-3'
          />

          <h3 className='text-slate-400'>
            Compatibility
          </h3>

          <p
            className={`text-2xl font-bold mt-2 ${
              compatibility ===
              'Compatible'
                ? 'text-green-500'
                : 'text-red-500'
            }`}
          >
            {compatibility}
          </p>
        </div>

        <div className='bg-slate-900/90 border border-white/10 rounded-2xl p-6'>
          <BatteryCharging
            size={30}
            className='mb-3'
          />

          <h3 className='text-slate-400'>
            Solar Assisted runtime 
          </h3>

          <p className={`text-2xl font-bold mt-2 ${
              solarAssistedRuntime ===
              'Unlimited (Daytime)'
                ? 'text-green-500'
                : ''
            }`}>
            {solarAssistedRuntime}
          </p>
        </div>

      </div>

      {/* Insihgt */}

      <div className='bg-slate-900/90 border border-white/10 rounded-2xl p-6 mt-8'>

        <h2 className='text-2xl font-bold mb-4'>
          System Insight
        </h2>

        {compatibility ===
        'Compatible' ? (
          <p className='text-slate-300'>
            Your system can handle the
            selected load. Estimated
            runtime is {runtime} hours
            and your solar array can
            generate approximately{' '}
            {(
              dailyProduction / 1000
            ).toFixed(1)}
            kWh per day.
          </p>
        ) : (
          <p className='text-red-400'>
            Warning: Your inverter
            cannot support the selected
            load. Consider upgrading
            your inverter size.
          </p>
        )}

      </div>
    </div>
  )
}

export default Calculator