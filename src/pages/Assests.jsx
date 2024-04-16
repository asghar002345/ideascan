import React, { useState } from 'react'
import { arraytest1 } from '../utils/Blockarray1'
import SearchBar from '../components/SearchBar.jsx';

const Assests = () => {
  // https://eth.blockscout.com/api/v2/tokens?q=USDT&type=ERC-20%2CERC-721%2CERC-1155
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
  function changeCPage(id, e) {
    e.preventDefault();
    setCurrentpage(id);
  }
  return (
    <div className='  '>
      <SearchBar />
      <div className='flex flex-col pb-20'>  
      <div className='w-[60rem] mx-auto '>
        <h1 className='text-white font-bold text-2xl mt-6 text-left'>Assests</h1>
      </div>
      <div className='rounded-lg overflow-x-auto'>
        <table className='items-center mt-9 w-[60rem] justify-center rounded-lg text-left mx-auto'>
          <thead className='bg-[#0F2434] rounded-lg text-white text-lg '>
            <tr className='text-white rounded-xl'>
              <th className='text-left pl-7 py-4 '> Name </th>
              <th className='text-left pl-12 py-4'>Contact Adress</th>
              <th className='text-left pl-7 py-4'>Total Supply</th>
            </tr>
          </thead>
          <tbody className=''>
            {
              records.map(arr => (
                <tr key={arr.id} className='text-white bg-[#071120] border-b-[1px] border-0 ' >
                  <td className='pl-7 text-left py-3'>{arr.id}</td>
                  <td className='pl-12 text-left py-3'>{arr.timestamp} <span className='block'>{arr.date}</span> </td>
                  <td className='pl-7 text-left py-3'>{arr.gasused}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
        <div className=''>
          <nav>
            <ul className="text-white mx-auto  w-[60rem] flex flex-row justify-center py-3 bg-[#071120] ">
              <li className="mr-3">
                <a
                  href="#"
                  onClick={prePage}
                  className="bg-[#0C71BC] rounded-full py-2 px-3 "
                >
                  Prev{" "}
                </a>
              </li>
              {numbers.map((n, i) => (
                <li
                  key={i}
                  className={`mr-3 ${currentpage === n ? "active" : ""
                    } hover:outline-blue-700 hover:outline hover:outline-2 hover:outline-offset-2 px-2`}
                >
                  <a href="#" onClick={(e) => changeCPage(e, n)} className="">
                    {n}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#"
                  onClick={nextPage}
                  className="bg-[#0C71BC] rounded-full py-2 px-3"
                >
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Assests