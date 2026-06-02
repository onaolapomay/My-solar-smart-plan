import { Battery, ShieldCheck, Zap, Lightbulb, } from 'lucide-react'

const BatteryOverviewPage = () => {
  return (
    <div>
      <h1 className='text-3xl font-bold mb-2'>
        Battery Knowledge Center
      </h1>

      <p className='text-slate-400 mb-8'>
        Learn about battery technologies,
        voltage systems, runtime expectations
        and best practices for solar energy storage.
      </p>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div className='bg-slate-900/90 border border-white/10 p-6 rounded-2xl'>
          <div className='flex items-center gap-3 mb-4'>
            <Battery />
            <h2 className='text-2xl font-bold'>
              LiFePO4
            </h2>
          </div>

          <ul className='space-y-2 text-slate-300'>
            <li>✓ 6000+ cycles</li>
            <li>✓ 90% Depth of Discharge</li>
            <li>✓ 95% Efficiency</li>
            <li>✓ 10+ year lifespan</li>
            <li>✓ Recommended for solar systems</li>
          </ul>

          <span className='inline-block mt-4 bg-green-600 px-3 py-1 rounded-full text-sm'>
            Best Choice
          </span>
        </div>

        <div className='bg-slate-900/90 border border-white/10 p-6 rounded-2xl'>
          <div className='flex items-center gap-3 mb-4'>
            <Battery />
            <h2 className='text-2xl font-bold'>
              Lead Acid
            </h2>
          </div>

          <ul className='space-y-2 text-slate-300'>
            <li>✓ Lower upfront cost</li>
            <li>✗ 500 cycles</li>
            <li>✗ 50% Depth of Discharge</li>
            <li>✗ Shorter lifespan</li>
            <li>✗ Heavier</li>
          </ul>

          <span className='inline-block mt-4 bg-orange-600 px-3 py-1 rounded-full text-sm'>
            Budget Option
          </span>
        </div>
      </div>

      <h2 className='text-2xl font-bold mt-10 mb-4'>
        Runtime Examples
      </h2>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        <div className='bg-slate-900/90 border border-white/10 p-6 rounded-2xl'>
          <h3 className='text-xl font-bold mb-3'>
            1.3kWh Battery
          </h3>

          <p>100W → 11.7 hrs</p>
          <p>300W → 3.9 hrs</p>
          <p>500W → 2.3 hrs</p>
        </div>

        <div className='bg-slate-900/90 border border-white/10 p-6 rounded-2xl'>
          <h3 className='text-xl font-bold mb-3'>
            5kWh Battery
          </h3>

          <p>100W → 45 hrs</p>
          <p>300W → 15 hrs</p>
          <p>500W → 9 hrs</p>
        </div>

        <div className='bg-slate-900/90 border border-white/10 p-6 rounded-2xl'>
          <h3 className='text-xl font-bold mb-3'>
            8kWh Battery
          </h3>

          <p>100W → 72 hrs</p>
          <p>300W → 24 hrs</p>
          <p>500W → 14.4 hrs</p>
        </div>
      </div>

      <h2 className='text-2xl font-bold mt-10 mb-4'>
        Battery Voltage Systems
      </h2>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        <div className='bg-slate-900/90 border border-white/10 p-6 rounded-2xl'>
          <h3 className='text-xl font-bold mb-3'>
            12V System
          </h3>

          <p className='mb-3 text-slate-300'>
            Ideal for lighting, TVs, fans and small solar setups.
          </p>

          <ul className='space-y-2'>
            <li>✓ Cheapest</li>
            <li>✓ Easy to find</li>
            <li>✗ Higher current losses</li>
          </ul>

          <span className='inline-block mt-4 bg-blue-600 px-3 py-1 rounded-full text-sm'>
            Beginner Setup
          </span>
        </div>

        <div className='bg-slate-900/90 border border-white/10 p-6 rounded-2xl'>
          <h3 className='text-xl font-bold mb-3'>
            24V System
          </h3>

          <p className='mb-3 text-slate-300'>
            Suitable for fridges, TVs, fans and medium-sized homes.
          </p>

          <ul className='space-y-2'>
            <li>✓ More efficient</li>
            <li>✓ Lower current losses</li>
            <li>✓ Most common</li>
          </ul>

          <span className='inline-block mt-4 bg-green-600 px-3 py-1 rounded-full text-sm'>
            Most Common
          </span>
        </div>

        <div className='bg-slate-900/90 border border-white/10 p-6 rounded-2xl'>
          <h3 className='text-xl font-bold mb-3'>
            48V System
          </h3>

          <p className='mb-3 text-slate-300'>
            Designed for ACs, larger homes and heavy loads.
          </p>

          <ul className='space-y-2'>
            <li>✓ Highest efficiency</li>
            <li>✓ Lowest current losses</li>
            <li>✓ Supports larger inverters</li>
          </ul>

          <span className='inline-block mt-4 bg-purple-600 px-3 py-1 rounded-full text-sm'>
            Professional Setup
          </span>
        </div>
      </div>

      <div className='bg-slate-900/90 border border-white/10 p-6 rounded-2xl mt-10'>
        <div className='flex items-center gap-3 mb-4'>
          <Zap />
          <h2 className='text-2xl font-bold'>
            Which Voltage Should You Choose?
          </h2>
        </div>

        <div className='space-y-2'>
          <p>≤ 1.5KVA Inverter → 12V</p>
          <p>2KVA – 3.5KVA Inverter → 24V</p>
          <p>5KVA+ Inverter → 48V</p>
        </div>
      </div>

      <div className='bg-slate-900/90 border border-white/10 p-6 rounded-2xl mt-10'>
        <h2 className='text-2xl font-bold mb-4'>
          Battery Capacity Explained
        </h2>

        <div className='space-y-2'>
          <p>100Ah × 12V = 1200Wh</p>
          <p>200Ah × 24V = 4800Wh</p>
          <p>100Ah × 48V = 4800Wh</p>
        </div>

        <p className='text-slate-400 mt-4'>
          Battery energy is measured in watt-hours (Wh), not just amp-hours (Ah).
          Voltage greatly affects total energy storage.
        </p>
      </div>

      <h2 className='text-2xl font-bold mt-10 mb-4'>
        Battery Care Tips
      </h2>

      <div className='bg-slate-900/90 border border-white/10 p-6 rounded-2xl'>
        <div className='space-y-4'>
          <div className='flex items-center gap-3'>
            <ShieldCheck />
            <p>Avoid deep discharges whenever possible.</p>
          </div>

          <div className='flex items-center gap-3'>
            <ShieldCheck />
            <p>Store batteries in cool environments.</p>
          </div>

          <div className='flex items-center gap-3'>
            <ShieldCheck />
            <p>Use quality chargers and inverters.</p>
          </div>

          <div className='flex items-center gap-3'>
            <ShieldCheck />
            <p>Monitor battery health regularly.</p>
          </div>

          <div className='flex items-center gap-3'>
            <ShieldCheck />
            <p>Keep battery terminals clean and secure.</p>
          </div>
        </div>
      </div>

      <div className='bg-slate-900/90 border border-white/10 p-6 rounded-2xl mt-10'>
        <div className='flex items-center gap-3 mb-4'>
          <Lightbulb />
          <h2 className='text-2xl font-bold'>
            Did You Know?
          </h2>
        </div>

        <div className='space-y-4 text-slate-300'>
          <p>
            A LiFePO4 battery cycled once daily can last over 15 years.
          </p>

          <p>
            A 48V system carries only one-quarter of the current of a 12V system delivering the same power.
          </p>

          <p>
            Battery lifespan is affected more by depth of discharge and temperature than by age alone.
          </p>
        </div>
      </div>
    </div>
  )
}

export default BatteryOverviewPage