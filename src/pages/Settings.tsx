const Settings = () => {
  return (
    <div>
      <h1 className='text-3xl font-bold mb-2'>
        Settings
      </h1>

      <p className='text-slate-400 mb-8'>
        Customize app preferences and view
        system calculation assumptions.
      </p>

      <div className='space-y-6'>

        <div className='bg-slate-900/90 border border-white/10 rounded-2xl p-6'>
          <h2 className='text-2xl font-bold mb-4'>
            Appearance
          </h2>

          <div className='flex items-center justify-between'>
            <p>Theme</p>

            <span className='bg-green-600 px-3 py-1 rounded-full text-sm'>
              Dark Mode Enabled
            </span>
          </div>
        </div>

        <div className='bg-slate-900/90 border border-white/10 rounded-2xl p-6'>
          <h2 className='text-2xl font-bold mb-4'>
            Solar Calculation Assumptions
          </h2>

          <div className='space-y-4'>

            <div className='flex justify-between'>
              <span>System Efficiency</span>
              <span>80%</span>
            </div>

            <div className='flex justify-between'>
              <span>Battery Usable Capacity</span>
              <span>90%</span>
            </div>

            <div className='flex justify-between'>
              <span>Inverter Loss</span>
              <span>15%</span>
            </div>

          </div>
        </div>

        <div className='bg-slate-900/90 border border-white/10 rounded-2xl p-6'>
          <h2 className='text-2xl font-bold mb-4'>
            About This App
          </h2>

          <div className='space-y-2 text-slate-300'>
            <p>My Solar Smart Plan</p>
            <p>Version 1.0</p>
            <p>
              Built with React, TypeScript,
              Tailwind CSS and Recharts.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Settings