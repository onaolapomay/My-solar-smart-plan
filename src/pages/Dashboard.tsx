import { Fan, Monitor, Laptop, Refrigerator, Plus, Trash2, } from 'lucide-react'
import { useEffect, useState } from 'react'
import type { Appliance } from '../types/appliance'
import { TypeAnimation } from 'react-type-animation'


const Dashboard = () => {
  const [recommendDevices, setRecommendDevices] = useState<Appliance[]>([])
  const [customizeDevices, setCustomizeDevices] = useState<Appliance[]>([])


  const [newDeviceName, setNewDeviceName] = useState('')
  const [newDeviceWattage, setNewDeviceWattage ] = useState<number | ''>('')
  const [showAddForm, setShowAddForm] = useState(false)
  const [activeMode, setActiveMode] = useState<'recommend' | 'customize'>('recommend')

  const deviceList = activeMode === 'recommend' ? recommendDevices : customizeDevices

  const setDeviceList = activeMode === 'recommend' ? setRecommendDevices : setCustomizeDevices



  const [selectedInverter, setSelectedInverter ] = useState('')
  const [selectedBattery, setSelectedBattery] = useState('')
  const [selectedPanels, setSelectedPanels] = useState('')
  const [showRecommendation, setShowRecommendation] = useState(false)

  const [showCustomizeResult, setShowCustomizeResult] = useState(false)

  const totalUsage = deviceList
    .filter((appliance) => appliance.isActive)
    .reduce(
      (total, appliance) =>
        total + Number(appliance.wattage),
      0
    )

  const solarRecommendation =
    totalUsage <= 300
      ? {
          inverter: '1.5KVA',
          panels: '1 x 550W',
          battery: '1.3kwh',
        }
      : totalUsage <= 700
      ? {
          inverter: '2KVA',
          panels: '2 x 550W',
          battery: '2.5kwh',
        }
      : totalUsage <= 1500 
      ?  {
          inverter: '3.5KVA',
          panels: '4 x 550W',
          battery: '5kwh',
        }
        : {
            inverter: '5KVA',
            panels: '8 x 550W',
            battery: '8kwh',
        }

  const currentBattery =
  showCustomizeResult
  ? selectedBattery : solarRecommendation.battery

  const currentInverter = 
  showCustomizeResult
  ? selectedInverter : solarRecommendation.inverter

  const currentPanels =
  showCustomizeResult
  ? selectedPanels : solarRecommendation.panels

  const batteryCapacity =
  currentBattery === '1.3Kwh' ? 1300
  : currentBattery === '2.5Kwh' ? 2500
  : currentBattery === '5Kwh' ? 5000 : 8000

  const estimatedRuntime =
    totalUsage > 0 ? (batteryCapacity / totalUsage).toFixed(1) : '0'

    const rawInverterCapacity =
    currentInverter === '1.5KVA' ? 1200
    : currentInverter === '2KVA' ? 1600
    : currentInverter === '3KVA' ? 2400
    : currentInverter === '5KVA' ? 4000 : 4800

    const inverterLoss = 0.15
    const inverterCapacity = Math.floor(rawInverterCapacity * (1 - inverterLoss))

    const inverterStatus =
    totalUsage <= inverterCapacity
    ? 'Compatible'
    : 'Incompatible'

    const chargingEstimate =
  currentPanels === '1 x 550W' ? '6-8 hrs'
  : currentPanels === '2 x 550W' ? '4-6 hrs'
  : currentPanels === '4 x 550W' ? '3-5 hrs' : '2-4 hrs'

  const toggleAppliance = (id: string) => {
    const updatedDevices = deviceList.map(
      (device) =>
        device.id === id
          ? {
              ...device,
              isActive: !device.isActive,
            }
          : device
    )

    setDeviceList(updatedDevices)
  }

  const updateWattage = (
    id: string,
    wattage: number | ''
  ) => {
    const updatedDevices = deviceList.map(
      (device) =>
        device.id === id
          ? {
              ...device,
              wattage,
            }
          : device
    )

    setDeviceList(updatedDevices)
  }

  const addNewDevice = () => {
    if (
      !newDeviceName.trim() ||
      newDeviceWattage === ''
    )
      return

    const newDevice = {
      id: crypto.randomUUID(),
      name: newDeviceName,
      wattage: newDeviceWattage,
      isActive: true,
    }

    setDeviceList([
      ...deviceList,
      newDevice,
    ])

    if (activeMode === 'recommend') {
      setShowRecommendation(true)
    }

    setNewDeviceName('')
    setNewDeviceWattage('')
  }

  const deleteDevice = (id: string) => {
    const filteredDevices =
      deviceList.filter(
        (device) => device.id !== id
      )

    setDeviceList(filteredDevices)
  }

  useEffect(() => {
    localStorage.setItem(
      'recommendDevices',
      JSON.stringify(recommendDevices)
    )

    localStorage.setItem(
      'customizeDevices',
      JSON.stringify(customizeDevices)
    )
  }, [recommendDevices, customizeDevices])

  return (
    <div>
      <h1 className='text-3xl font-bold'>
        Build Your Solar Setup
      </h1>

      <p className='text-slate-500 mt-1'>
        Add appliances and estimate the
        ideal solar setup for your need
      </p>

      <div className='mt-4 flex flex-col md:flex-row gap-2'>
        <button
          onClick={() => {
            setActiveMode('recommend')
            setShowCustomizeResult(false)
          }}
          className='bg-green-600 hover:bg-green-700 transition-colors duration-300 px-6 py-4 rounded-2xl font-semibold flex-1'
        >
          Recommend For Me
        </button>

        <button
          onClick={() => {
            setActiveMode('customize')
            setShowCustomizeResult(false)
          }}
          className='bg-slate-600 hover:bg-slate-700 transition-colors duration-300 px-6 py-4 rounded-2xl font-semibold flex-1'
        >
          Customize My Setup
        </button>
      </div>

      {showRecommendation &&
        activeMode ===
          'recommend' && (
          <div
           className='mt-8 bg-slate-900/90 backdrop-blur-md border border-white/10 p-6 rounded-2xl'>
            <TypeAnimation
                sequence={[
                  'Analyzing appliances...',
                  1000,
                  'Solar Recommendation Ready ✅',
                  1000,
                ]}
                cursor={false}
                wrapper='h2'
                speed={50}
                className='text-2xl font-bold mb-6'
                repeat={0}
              />

            <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
              <div>
                <p className='text-slate-400'>
                  Inverter
                </p>

                 <TypeAnimation
                  sequence={[
                    '',
                    4500,
                    `${solarRecommendation.inverter}`,
                  ]}
                  cursor={false}
                  wrapper='h3'
                  speed={50}
                  className='text-2xl font-bold mt-2'
                  repeat={0}
                />
              </div>

              <div>
                <p 
                className='text-slate-400'>
                  Panels
                </p>

                <TypeAnimation
                  sequence={[
                    '',
                    4500,
                    `${solarRecommendation.panels}`,
                  ]}
                  cursor={false}
                  wrapper='h3'
                  speed={50}
                  className='text-2xl font-bold mt-2'
                  repeat={0}
                />
              </div>

              <div>
                <p className='text-slate-400'>
                  Battery
                </p>

                <TypeAnimation
                  sequence={[
                    '',
                    4500,
                    `${solarRecommendation.battery}`,
                  ]}
                  cursor={false}
                  wrapper='h3'
                  speed={50}
                  className='text-2xl font-bold mt-2'
                  repeat={0}
                />
              </div>
            </div>

            {(activeMode === 'recommend' || showCustomizeResult) && (
            <div className='mt-8 border-t border-white/10 pt-4 space-y-4'>
                  <div className='flex items-center justify-between'>
                    <p className='text-slate-400 font-[inter]'>Total Appliance Load</p>
                    <TypeAnimation
                      sequence={[
                        '',
                        7500,
                        `${totalUsage} W`
                      ]}
                      cursor={false}
                      wrapper='p'
                      speed={50}
                      className='font-bold'
                      repeat={0}
                    />
                  </div>

                  <div className='flex items-center justify-between'>
                    <p className='text-slate-400 font-[inter]'>Inverter Compatibility</p>
                    <p className={`font-bold ${inverterStatus === 'Compatible' ? 'text-green-500' : 'text-red-500'}`}>
                      <TypeAnimation
                      sequence={[
                        '',
                        7500,
                        `${inverterStatus}`
                      ]}
                      cursor={false}
                      wrapper='p'
                      speed={50}
                      className='font-bold'
                      repeat={0}
                    />
                    </p>
                  </div>

                  <div className='flex items-center justify-between'>
                    <p className='text-slate-400 font-[inter]'>Estimated Battery Runtime</p>
                    <TypeAnimation
                      sequence={[
                        '',
                        8500,
                        `${estimatedRuntime}`
                      ]}
                      cursor={false}
                      wrapper='p'
                      speed={50}
                      className='font-bold'
                      repeat={0}
                    />
                  </div>

                  <div className='flex items-center justify-between'>
                    <p className='text-slate-400 font-[inter]'>Panel Estimated Full Charge Time</p>
                    <TypeAnimation
                      sequence={[
                        '',
                        9500,
                        `${chargingEstimate}`
                      ]}
                      cursor={false}
                      wrapper='p'
                      speed={50}
                      className='font-bold'
                      repeat={0}
                    />
                  </div>
            </div>
            )}
          </div>
        )}

      {activeMode === 'recommend' && (
        <>
          <div className='mt-8'>
            <h2 className='text-2xl font-bold mb-4'>
              Active Appliances
            </h2>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              {deviceList.length === 0 ? (
                <div className='text-center py-20 text-slate-400 col-span-2'>
                  <h2 className='text-2xl font-bold'>
                    No Appliances
                  </h2>

                  <p>
                    Add a device to start
                    monitoring
                  </p>
                </div>
              ) : (
                deviceList.map((appliance) => (
                  <div
                    key={appliance.id}
                    className='backdrop-blur-md border border-white/10 bg-slate-900/90 text-white p-5 rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105'
                  >
                    <div className='flex items-center justify-between'>
                      <div>
                        {appliance.name ===
                          'fan' && (
                          <Fan size={28} />
                        )}

                        {appliance.name ===
                          'TV' && (
                          <Monitor size={28} />
                        )}

                        {appliance.name ===
                          'Fridge' && (
                          <Refrigerator size={28} />
                        )}

                        {appliance.name ===
                          'Laptop' && (
                          <Laptop size={28} />
                        )}
                      </div>

                      <h4 className='text-lg font-semibold'>
                        {appliance.name}
                      </h4>

                      <input
                        type='number'
                        value={
                          appliance.wattage
                        }
                        className='w-24 mt-3 bg-slate-800 text-white p-2 rounded-lg'
                        onChange={(e) =>
                          updateWattage(
                            appliance.id,
                            e.target.value ===
                              ''
                              ? ''
                              : Number(
                                  e.target.value
                                )
                          )
                        }
                      />
                    </div>

                    <p
                      className={`mt-3 text-sm font-[inter] ${
                        appliance.isActive
                          ? 'text-green-400'
                          : 'text-red-400'
                      }`}
                    >
                      {appliance.isActive
                        ? 'Active'
                        : 'Inactive'}
                    </p>

                    <div className='flex items-center justify-between'>
                      <button
                        onClick={() =>
                          toggleAppliance(
                            appliance.id
                          )
                        }
                        className={`mt-4 w-14 h-7 flex items-center rounded-full p-1 transition-all duration-300 ${
                          appliance.isActive
                            ? 'bg-green-600'
                            : 'bg-slate-600'
                        }`}
                      >
                        <div
                          className={`bg-white w-5 h-5 rounded-full transition-all duration-300 ${
                            appliance.isActive
                              ? 'translate-x-7'
                              : ''
                          }`}
                        ></div>
                      </button>

                      <button
                        onClick={() =>
                          deleteDevice(
                            appliance.id
                          )
                        }
                        className='mt-2 bg-orange-300 hover:bg-orange-500 text-white font-mono p-3 rounded-lg cursor-pointer transition-colors duration-300'
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className='mt-8 flex flex-col items-center'>
            <button
              onClick={() =>
                setShowAddForm(
                  !showAddForm
                )
              }
              className='bg-green-400 p-4 rounded-full'
            >
              <Plus
                size={24}
                color='white'
              />
            </button>

            {showAddForm && (
              <div className='bg-slate-950 p-6 rounded-xl mt-2'>
                <h2 className='text-2xl font-[inter] font-bold mb-4'>
                  Add Appliance
                </h2>

                <div className='flex flex-col md:flex-row gap-4'>
                  <input
                    type='text'
                    placeholder='Device name'
                    value={newDeviceName}
                    onChange={(e) =>
                      setNewDeviceName(
                        e.target.value
                      )
                    }
                    className='bg-slate-800 text-white p-3 rounded-lg flex-1'
                  />

                  <input
                    type='number'
                    placeholder='Wattage'
                    value={
                      newDeviceWattage
                    }
                    onChange={(e) =>
                      setNewDeviceWattage(
                        e.target.value ===
                          ''
                          ? ''
                          : Number(
                              e.target.value
                            )
                      )
                    }
                    className='bg-slate-800 text-white p-3 rounded-lg w-32'
                  />

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
        </>
      )}

      {activeMode === 'customize' && (
        <>
          <div className='mt-8'>
            <h2 className='text-2xl font-bold mb-4'>
              Active Appliances
            </h2>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              {deviceList.length === 0 ? (
                <div className='text-center py-20 text-slate-400 col-span-2'>
                  <h2 className='text-2xl font-bold'>
                    No Appliances
                  </h2>

                  <p>
                    Add a device to start
                    monitoring
                  </p>
                </div>
              ) : (
                deviceList.map((appliance) => (
                  <div
                    key={appliance.id}
                    className='backdrop-blur-md border border-white/10 bg-slate-900/90 text-white p-5 rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105'
                  >
                    <div className='flex items-center justify-between'>
                      <div>
                        {appliance.name ===
                          'fan' && (
                          <Fan size={28} />
                        )}

                        {appliance.name ===
                          'TV' && (
                          <Monitor size={28} />
                        )}

                        {appliance.name ===
                          'Fridge' && (
                          <Refrigerator size={28} />
                        )}

                        {appliance.name ===
                          'Laptop' && (
                          <Laptop size={28} />
                        )}
                      </div>

                      <h4 className='text-lg font-semibold'>
                        {appliance.name}
                      </h4>

                      <input
                        type='number'
                        value={
                          appliance.wattage
                        }
                        className='w-24 mt-3 bg-slate-800 text-white p-2 rounded-lg'
                        onChange={(e) =>
                          updateWattage(
                            appliance.id,
                            e.target.value ===
                              ''
                              ? ''
                              : Number(
                                  e.target.value
                                )
                          )
                        }
                      />
                    </div>

                    <p
                      className={`mt-3 text-sm font-[inter] ${
                        appliance.isActive
                          ? 'text-green-400'
                          : 'text-red-400'
                      }`}
                    >
                      {appliance.isActive
                        ? 'Active'
                        : 'Inactive'}
                    </p>

                    <div className='flex items-center justify-between'>
                      <button
                        onClick={() =>
                          toggleAppliance(
                            appliance.id
                          )
                        }
                        className={`mt-4 w-14 h-7 flex items-center rounded-full p-1 transition-all duration-300 ${
                          appliance.isActive
                            ? 'bg-green-600'
                            : 'bg-slate-600'
                        }`}
                      >
                        <div
                          className={`bg-white w-5 h-5 rounded-full transition-all duration-300 ${
                            appliance.isActive
                              ? 'translate-x-7'
                              : ''
                          }`}
                        ></div>
                      </button>

                      <button
                        onClick={() =>
                          deleteDevice(
                            appliance.id
                          )
                        }
                        className='mt-2 bg-orange-300 hover:bg-orange-500 text-white font-mono p-3 rounded-lg cursor-pointer transition-colors duration-300'
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className='mt-8 flex flex-col items-center'>
            <button
              onClick={() =>
                setShowAddForm(
                  !showAddForm
                )
              }
              className='bg-green-400 p-4 rounded-full'
            >
              <Plus
                size={24}
                color='white'
              />
            </button>

            {showAddForm && (
              <div className='bg-slate-950 p-6 rounded-xl mt-2'>
                <h2 className='text-2xl font-[inter] font-bold mb-4'>
                  Add Appliance
                </h2>

                <div className='flex flex-col md:flex-row gap-4'>
                  <input
                    type='text'
                    placeholder='Device name'
                    value={newDeviceName}
                    onChange={(e) =>
                      setNewDeviceName(
                        e.target.value
                      )
                    }
                    className='bg-slate-800 text-white p-3 rounded-lg flex-1'
                  />

                  <input
                    type='number'
                    placeholder='Wattage'
                    value={
                      newDeviceWattage
                    }
                    onChange={(e) =>
                      setNewDeviceWattage(
                        e.target.value ===
                          ''
                          ? ''
                          : Number(
                              e.target.value
                            )
                      )
                    }
                    className='bg-slate-800 text-white p-3 rounded-lg w-32'
                  />

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
        </>
      )}

      {showCustomizeResult && (
                <div className='mt-8 border-t border-white/10 pt-6'>

                  <h2 className='text-2xl font-bold mb-6'>
                    Your Selected Setup
                  </h2>

                  <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>

                    <div>
                      <p className='text-slate-400'>
                        Inverter
                      </p>

                      <h3 className='text-2xl font-bold mt-2'>
                        {selectedInverter}
                      </h3>
                    </div>

                    <div>
                      <p className='text-slate-400'>
                        Panels
                      </p>

                      <h3 className='text-2xl font-bold mt-2'>
                        {selectedPanels}
                      </h3>
                    </div>

                    <div>
                      <p className='text-slate-400'>
                        Battery
                      </p>

                      <h3 className='text-2xl font-bold mt-2'>
                        {selectedBattery}
                      </h3>
                    </div>

                  </div>

                  <div className='mt-8 border-t border-white/10 pt-4 space-y-4'>

                    <div className='flex items-center justify-between'>
                      <p className='text-slate-400 font-[inter]'>
                        Total Appliance Load
                      </p>

                      <p className='font-bold'>
                        {totalUsage} W
                      </p>
                    </div>

                    <div className='flex items-center justify-between'>
                      <p className='text-slate-400 font-[inter]'>
                        Inverter Compatibility
                      </p>

                      <p className={`font-bold ${inverterStatus === 'Compatible' ? 'text-green-500' : 'text-red-500'}`}>
                      {inverterStatus}
                      </p>
                    </div>

                    <div className='flex items-center justify-between'>
                      <p className='text-slate-400 font-[inter]'>
                        Estimated Battery Runtime
                      </p>

                      <p className='font-bold'>
                        {estimatedRuntime} hours
                      </p>
                    </div>

                    <div className='flex items-center justify-between'>
                      <p className='text-slate-400 font-[inter]'>
                        Panel Estimated Full Charge Time
                      </p>

                      <p className='font-bold'>
                        {chargingEstimate}
                      </p>
                    </div>

                  </div>
                </div>
              )}

      {activeMode ===
        'customize' && (
        <div className='mt-8 bg-slate-900/90 backdrop-blur-md border border-white/10 p-8 rounded-2xl'>
          <h2 className='text-2xl font-bold mb-6'>
            Customize Your Setup
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <select
              value={selectedInverter}
              onChange={(e) =>
                setSelectedInverter(
                  e.target.value
                )
              }
              className='bg-slate-700 p-3 rounded-lg'
            >
              <option value=''>
                Select Inverter
              </option>

              <option value='1.5KVA'>
                1.5KVA
              </option>

              <option value='2KVA'>
                2KVA
              </option>

              <option value='3KVA'>
                3KVA
              </option>

              <option value='5KVA'>
                5KVA
              </option>

              <option value='6KVA'>
                6KVA
              </option>
            </select>

            <select
              value={selectedPanels}
              onChange={(e) =>
                setSelectedPanels(
                  e.target.value
                )
              }
              className='bg-slate-700 p-3 rounded-lg'
            >
              <option value=''>
                Select Panels
              </option>

              <option value='1 x 550W'>
                1 x 550W
              </option>

              <option value='2 x 550W'>
                2 x 550W
              </option>

              <option value='4 x 550W'>
                4 x 550W
              </option>

              <option value='8 x 550W'>
                8 x 550W
              </option>
            </select>

            <select
              value={selectedBattery}
              onChange={(e) =>
                setSelectedBattery(
                  e.target.value
                )
              }
              className='bg-slate-700 p-3 rounded-lg'
            >
              <option value=''>
                Select Battery
              </option>

              <option value='1.3Kwh'>
                1.3Kwh
              </option>

              <option value='2.5kwh'>
                2.5kwh
              </option>

              <option value='5kwh'>
                5kwh
              </option>

              <option value='8kwh'>
                8kwh
              </option>
            </select>
          </div>

          <button onClick={() => setShowCustomizeResult(true)} className='mt-6 bg-green-500 hover:bg-green-600 transition-colors duration-300 text-white font-bold py-3 px-6 rounded-lg'>
            Validate Setup
          </button>

          
        </div>
      )}
    </div>
  )
}

export default Dashboard