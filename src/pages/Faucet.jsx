import React from 'react'
import meta from '../assests/svgs/metamask-icon.svg';


const Faucet = () => {
  return (
    <div className='flex flex-col lg:flex-row lg:justify-between w-[20rem] h-[35rem] md:w-[40rem] md:h-[35rem] lg:w-[60rem] xl:w-[75rem] lg:h-[22rem] bg-[#252527] my-12 lg:mt-20 mx-auto rounded-lg items-center justify-center'>
      <div className='flex flex-col w-[20rem] text-white justify-center lg:mx-24 xl:mx-24 items-center md:items-start'>
        <label htmlFor="#" className='my-2'>Enter Adress</label>
        <input type="text" placeholder='Enter your wallet adress' className='bg-[#3B3B3D] py-2 rounded-lg px-3 w-[18rem] md:w-[25rem] my-2' />
        <label htmlFor="#" className='py-2'>Enter Adress</label>
        <input type="text" placeholder='You can request up to 5 coins' className='bg-[#3B3B3D] py-2 my-2 pl-3 rounded-lg w-[18rem] md:w-[25rem]'/>
        <p className='mb-8 w-60 md:w-80'>The drops are limited to 1 request every 24 hours</p>
        <div>
        <button className='bg-blue-500 rounded-md p-2'>Request Funds</button>
        </div>
      </div>
      <hr className='bg-[#3B3B3D] h-1 w-72 md:w-[28rem] lg:h-56 lg:w-0.5 my-4 lg:my-0'/>
      <div className='bg-[#3B3B3D] w-[17rem] md:w-[30rem] h-40 flex flex-col justify-center items-center lg:mx-6 xl:mr-12 rounded-lg '>
        <div>
        <p className='w-48 md:w-80 text-white'>Use the button below to add Shido network to your metamask wallet extension</p>
        </div>
        <div className='pt-4'>
            <button className='border-transparent rounded px-3 py-2 text-white bg-[#252527] flex'>
            <img src={meta} style={{width: '20px'}} alt='meta'/>
            <span className='ml-2'>Add Idea Network</span></button>
        </div>
      </div>
    </div>
  )
}

export default Faucet