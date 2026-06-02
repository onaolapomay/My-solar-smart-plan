import {
  Battery,
  ShieldCheck,
  Zap,
  Lightbulb,
} from 'lucide-react'

const BatteryOverviewPage = () => {
  return (
    <div>

      <h1 className='text-3xl font-bold mb-2'>
        Battery Knowledge Center
      </h1>

      <p className='text-slate-400 mb-8'>
        Learn about battery technologies,
        runtime expectations and best
        practices for solar energy storage.
      </p>

      {/* Battery Types */}

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
            <li>✓ Recommended for solar</li>
          </ul>

          <div className='mt-4 inline-block bg-green-600 px-3 py-1 rounded-full text-sm'>
            Best Choice
          </div>

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
            <li>✗ 50% DoD</li>
            <li>✗ Shorter lifespan</li>
            <li>✗ Heavier</li>
          </ul>

          <div className='mt-4 inline-block bg-orange-600 px-3 py-1 rounded-full text-sm'>
            Budget Option
          </div>

        </div>

      </div>

      {/* Runtime Examples */}

      <h2 className='text-2xl font-bold mt-10 mb-4'>
        Runtime Examples
      </h2>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>

        <div className='bg-slate-900/90 border border-white/10 p-6 rounded-2xl'>
          <h3 className='font-bold text-xl mb-3'>
            1.3kWh Battery
          </h3>

          <p>100W → 11.7 hrs</p>
          <p>300W → 3.9 hrs</p>
          <p>500W → 2.3 hrs</p>
        </div>

        <div className='bg-slate-900/90 border border-white/10 p-6 rounded-2xl'>
          <h3 className='font-bold text-xl mb-3'>
            5kWh Battery
          </h3>

          <p>100W → 45 hrs</p>
          <p>300W → 15 hrs</p>
          <p>500W → 9 hrs</p>
        </div>

        <div className='bg-slate-900/90 border border-white/10 p-6 rounded-2xl'>
          <h3 className='font-bold text-xl mb-3'>
            8kWh Battery
          </h3>

          <p>100W → 72 hrs</p>
          <p>300W → 24 hrs</p>
          <p>500W → 14.4 hrs</p>
        </div>

      </div>

      {/* Care Tips */}

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

        </div>

      </div>

      {/* Did You Know */}

      <div className='bg-slate-900/90 border border-white/10 p-6 rounded-2xl mt-10'>

        <div className='flex items-center gap-3 mb-4'>
          <Lightbulb />
          <h2 className='text-2xl font-bold'>
            Did You Know?
          </h2>
        </div>

        <p className='text-slate-300'>
          A LiFePO4 battery cycled once daily
          can last well over 10 years before
          reaching the end of its useful life.
        </p>

      </div>

    </div>
  )
}

export default BatteryOverviewPage