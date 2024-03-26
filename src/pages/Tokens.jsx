import React, { useState } from 'react'
import { arraytest1 } from '../utils/Blockarray1'

const Tokens = () => {

  const [currentpage, setCurrentpage] = useState(1);
  const recordsperpage = 10;
  const indexoflastrecord = currentpage * recordsperpage;
  const indexoffirstrecord = indexoflastrecord - recordsperpage;
  const records = arraytest1.slice(indexoffirstrecord, indexoflastrecord);
  const nPages = Math.ceil(arraytest1.length / recordsperpage);
  const numbers = [...Array(nPages + 1).keys()].slice(1)
  console.log(records)

  function prePage(e) {
    e.preventDefault();
    if (currentpage !== 1) {
      setCurrentpage(currentpage - 1)
    }
  }
  function nextPage(e) {
    e.preventDefault();
    if (currentpage !== nPages) {
      setCurrentpage(currentpage + 1)
    }
  }
  function changeCPage(id,e) {
    e.preventDefault();
    setCurrentpage(id);
  }
  return (
    <div className='flex flex-col items-center justify-center'>
      <div>
      <h1 className='text-white font-bold text-2xl text-left mt-6'>Assests</h1>
      </div>
      <div className='rounded-lg'>
        <table className='items-center mt-9 w-[50rem] justify-center rounded-lg text-left'>
          <thead className='bg-[#0F2434] rounded-lg text-white text-lg '>
            <tr className='text-white rounded-xl'>
            <th className='text-left pl-7 py-4 '> Block </th>
            <th className='text-left pl-12 py-4'>Contact Adress</th>
            <th className='text-left pl-7 py-4'>Total Supply</th>
            </tr>
          </thead>
          <tbody className=''>
            {
              records.map(arr => (
                <tr key={arr.id} className='text-white bg-[#040F1C] border-b-[1px] border-0 ' >
                  <td className='pl-7 text-left py-3'>{arr.id}</td>
                  <td className='pl-12 text-left py-3'>{arr.timestamp} <span className='block'>{arr.date}</span> </td>
                  <td className='pl-7 text-left py-3'>{arr.gasused}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
        <div className='mt-4'>
          <nav>
            <ul className='text-white mx-auto flex flex-row  justify-center'>
              <li className='mr-3'>
                <a href="#" onClick={prePage}>Prev </a>
              </li>
              {
                numbers.map((n, i) =>
                  <li key={i} className={`mr-3 ${currentpage === n ? 'active' : ""}`}>
                    <a href="#" onClick={(e) => changeCPage(n,e)}>{n}</a>
                  </li>
                )
              }
              <li>
                <a href="#" onClick={nextPage}>Next</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Tokens