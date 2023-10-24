import React, { useState } from 'react'

const Mac = () => {
    const [macAdress , setMacAdress] = useState()

    const SubmitMac = () =>{
        try{
            localStorage.setItem('mac_adress' , macAdress)
        }catch{
            alert('Err')
        }
    }

  return (
    <div className='flex flex-col mt-5'>
        <label>Mac Adress</label>
        <input type="text" className='rounded-md py-2 px-4 border-2 border-green-300' value={macAdress} onChange={(m)=>{setMacAdress(m.target.value)}} />
        <button className={` py-2 mt-1 rounded-md text-white ${!macAdress ? 'bg-green-300' : 'bg-green-500'}`} disabled={!macAdress ? 1 : 0} onClick={SubmitMac}>
            Submit
        </button>
    </div>
  )
}

export default Mac