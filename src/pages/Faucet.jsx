import React from 'react'
import meta from '../assests/svgs/metamask-icon.svg';


const Faucet = () => {
  return (
    <div className='flex justify-between w-[75rem] h-[20rem] bg-[#252527] mt-20 mx-auto rounded-lg items-center'>
      <div className='flex flex-col w-[25rem] text-white justify-center mx-24  '>
        <label htmlFor="#" >Enter Adress</label>
        <input type="text" placeholder='Enter your wallet adress' className='bg-[#3B3B3D] py-2 rounded-lg px-10 max-w-[35rem] mb-8' />
        <label htmlFor="#">Enter Adress</label>
        <input type="text" placeholder='You can request up to 5 coins' className='bg-[#3B3B3D] py-2 pl-3 pr-16 rounded-lg '/>
        <p className='mb-8'>The drops are limited to 1 request every 24 hours</p>
        <div>
        <button className='bg-blue-500 rounded-md p-2'>Request Funds</button>
        </div>
      </div>
      <hr className='bg-[#3B3B3D] h-56 w-0.5'/>
      <div className='bg-[#3B3B3D] w-[30rem] h-40 flex flex-col justify-center items-center mr-12 rounded-lg '>
        <div>
        <p className='w-80 text-white'>Use the button below to add Shido network to your metamask wallet extension</p>
        </div>
        <div className='mr-6 pt-4'>
            <button className='border-transparent rounded px-3 py-2 text-white bg-[#252527] flex'>
            <img src={meta} style={{width: '20px'}} alt='meta'/>
            <span className='ml-2'>Add Idea Network</span></button>
        </div>
      </div>
    </div>
  )
}

export default Faucet