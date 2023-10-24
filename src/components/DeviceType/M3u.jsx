import React, { useState } from 'react'
import Loading from '../../assets/icons/Loading';

const M3u = () => {
    const [userName , SetUserName] = useState();
    const [password , SetPassword] = useState();
    const [loading , setLoading] = useState(false)

    const SubmitM3u = () =>{
        try{
            setLoading(true)
            localStorage.setItem('userName' , userName)
            localStorage.setItem('password' , password)
        }catch{
            alert('Err')
        }finally{
            setLoading(false)
        }
    }


  return (
    <div className='flex flex-col mt-5'>
        <label>UserName</label>
        <input type="text" className='rounded-md py-2 px-4 border-2 border-green-300' value={userName} onChange={(u)=>{SetUserName(u.target.value)}}/>
        <label>Password</label>
        <input type="Password" className='rounded-md py-2 px-4 border-2 border-green-300' value={password} onChange={(p)=>{SetPassword(p.target.value)}}/>
        <button className={` py-2 mt-1 rounded-md text-white ${!userName || !password ? 'bg-green-300' : 'bg-green-500'}`} onClick={SubmitM3u} disabled={!userName || password ? 1 : 0}>
            {
                loading ? <Loading/> : 'Submit'
            }
        </button>
    </div>
  )
}

export default M3u