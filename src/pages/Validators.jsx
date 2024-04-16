import React from 'react'
import { useState } from 'react';
import { arraytest4 } from '../utils/Blockarray1';
import { UserData } from '../components/Data';
import { arraytest } from '../utils/arraytest';
import SearchBar from '../components/SearchBar.jsx';

const Validators = () => {

  const [currentpage, setCurrentpage] = useState(1);
  const recordsperpage = 8;
  const indexoflastrecord = currentpage * recordsperpage;
  const indexoffirstrecord = indexoflastrecord - recordsperpage;
  const records = arraytest4.slice(indexoffirstrecord, indexoflastrecord);
  const nPages = Math.ceil(arraytest4.length / recordsperpage);
  const numbers = [...Array(nPages + 1).keys()].slice(1)
  console.log(records)

  // const test = async () => {
  //   const res = await fetch(
  //     `https://eth.blockscout.com/api/v2/main-page/transactions`
  //   );
  //   const response = await res.json();
  //   setStatsData(response);
  //   console.log("recent transactions")
  //   console.log("This is Testing",statsData);
  // };

  // useEffect(() => {
  //   test();
  // }, []);

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
    <div className='font-poppins'>
      <SearchBar />
      <div>
      <div className='mt-3 w-[18rem] md:w-[45rem] lg:w-[60rem] xl:w-[80rem] mx-auto'>
        <h1 className='flex text-white text-2xl font-bold'>Blocks</h1>
      </div>
      <div className='grid w-[18rem] md:grid-cols-2 md:w-[45rem] lg:grid-cols-3 lg:w-[60rem] items-center text-white my-4 mx-auto bg-[#0F2434] xl:grid-cols-4 xl:w-[80rem] rounded-xl'>
            {
                arraytest.map((arr)=>(
                    <div key={arr.id} className='flex flex-col justify-center items-center w-64 border border-[#1E2739] my-3 mx-auto rounded-lg h-36 bg-[#040F1C]'>
                      <div className='flex justify-center border border-[#40576A] rounded-lg bg-[#354D61] w-10 h-10 mb-3'>
                      <img src={arr.logo} alt="" className='' />
                      </div>
                      <div className='flex flex-col items-center'>
                      <span className='text-[18px] text-[#9CA0A7] font-poppins font-semibold'>{arr.textBig}</span>
                      <span className='text-[24px] font-poppins font-semibold'>{arr.diffData}</span>
                      </div>
                    </div>
                ))
            }
        </div>
      </div>
        <div className='rounded-lg overflow-x-auto'>
          <table className='items-center mx-auto mt-9 w-[70rem] lg:w-[60rem]  xl:w-[80rem] rounded-lg text-left font-poppins '>
            <thead className='bg-[#0F2434] rounded-lg text-white text-lg '>
              <tr className='text-white rounded-xl'>
                <th className='text-left pl-7 py-4 '> Validator Name </th>
                <th className='text-left pl-7 py-4'>Voting Power</th>
                <th className='text-left pl-7 py-4'>Delegators</th>
                <th className='text-left pl-7 py-4'>Self Bonded</th>
                <th className='text-left pl-7 py-4'>Commision</th>
                <th className='text-left pl-7 py-4'>Status</th>
              </tr>
            </thead>
            <tbody className=''>
              {
                records.map(arr => (
                  <tr key={arr.id} className='text-white bg-[#040F1C] border-b-[1px] border-0 font-poppins font-bold leading-[26px]' >
                    <td className='pl-7 text-left py-3'>{arr.Validator}</td>
                    <td className='pl-7 text-left py-3'>{arr.Voting}</td>
                    <td className='pl-7 text-left py-3'>{arr.Delegators}</td>
                    <td className='pl-7 text-left py-3'>{arr.Self}</td>
                    <td className='pl-7 text-left py-3'>{arr.comission}</td>
                    <td className='pl-7 text-left py-3 text-green-500'>{arr.Status}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
          <div>
            <nav>
              <ul className='text-white items-center mx-auto w-[70rem] lg:w-[60rem] xl:w-[80rem] flex flex-row  justify-center h-7 py-7 mb-12  bg-[#071120]'>
                <li className='mr-3'>
                  <a href="#" onClick={prePage} className='bg-[#0C71BC] rounded-full py-2 px-3'>Prev </a>
                </li>
                {
                  numbers.map((n, i) =>
                    <li key={i} className={`mr-3 ${currentpage === n ? 'active' : ""} hover:outline-blue-700 hover:outline hover:outline-2 hover:outline-offset-2 px-2`}>
                      <a href="#" onClick={(e) => changeCPage(n, e)}>{n}</a>
                    </li>
                  )
                }
                <li>
                  <a href="#" onClick={nextPage} className='bg-[#0C71BC] rounded-full py-2 px-3'>Next</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
    </div>
  )
}

export default Validators