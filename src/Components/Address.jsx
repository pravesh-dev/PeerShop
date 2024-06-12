import React, { useState } from 'react'
import { FaAngleLeft } from 'react-icons/fa6'
import { RiAddFill } from 'react-icons/ri'
import AddNewAddress from './AddNewAddress'

function Address() {
    const [isAddAddress, setIsAddAddress] = useState(false)
    const handleAddAddress = () =>{
        setIsAddAddress(true);
    }
  return (
    <div className='w-full h-full bg-[#111] relative'>
      <div className="flex items-center gap-5">
        <span className="text-lg">
          <FaAngleLeft />
        </span>
        <h1 className="text-white text-xl">Manage Addresses</h1>
      </div>
      <div className={`w-full py-2 px-4 mt-5 text-[#3F3BFF] uppercase gap-3 text-sm items-center border-[0.5px] border-white/40 ${isAddAddress ? 'hidden' : 'flex'}`} onClick={handleAddAddress}>
        <span className='text-xl'><RiAddFill/></span>
        Add a new address
      </div>
      <div className={`w-full h-[32rem] ${isAddAddress ? 'block' : 'hidden'} overflow-y-auto`}>
        <AddNewAddress/>
      </div>

    </div>
  )
}

export default Address
