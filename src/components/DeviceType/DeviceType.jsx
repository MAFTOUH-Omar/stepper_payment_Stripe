import React, { useState } from 'react'
import M3u from './M3u'
import Mac from './Mac'
import ActiveCode from './ActiveCode'

const DeviceType = () => {
  const [m3u, setMu3] = useState(true)
  const [mac, setMac] = useState(false)
  const [activeCode, setActiveCode] = useState(false)

  const toggleMu3 = () => {
    setMu3(!m3u);
    setMac(false);
    setActiveCode(false);
  };

  const toggleMac = () => {
    setMu3(false);
    setActiveCode(false);
    setMac(!mac);
  };

  const toggleActiveCode = () => {
    setMac(false);
    setMu3(false);
    setActiveCode(!activeCode);
  };

  return (
    <div className='flex flex-col'>
      <div className='flex'>
        <div className='w-1/3 mx-5'>
          <button
            className={`${m3u ? 'bg-green-500' : 'bg-green-300'} rounded-md py-2 px-5 text-white`}
            onClick={toggleMu3}
          >
            m3u
          </button>
        </div>
        <div className='w-1/3 mx-5'>
          <button
            className={`${mac ? 'bg-green-500' : 'bg-green-300'} rounded-md py-2 px-5 text-white`}
            onClick={toggleMac}
          >
            mac
          </button>
        </div>
        <div className='w-1/3 mx-5'>
          <button
            className={`${activeCode ? 'bg-green-500' : 'bg-green-300'} rounded-md py-2 px-5 text-white`}
            onClick={toggleActiveCode}
          >
            activeCode
          </button>
        </div>
      </div>

      {m3u && <M3u />}
      {mac && <Mac />}
      {activeCode && <ActiveCode />}
    </div>
  )
}

export default DeviceType