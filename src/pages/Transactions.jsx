import React, { useState } from 'react'
import { arraytest1,arraytest2 } from '../utils/Blockarray1'
import DynamicChart from '../components/DynamicChart'
import { UserData } from '../components/Data'
import square from '../assests/pngs/square.png'
import SearchBar from '../components/SearchBar.jsx';


const Transactions = () => {
  const [userData, setUserData] = useState(
    {
      labels: UserData.map((data) => data.year),
      datasets: [{
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        borderWidth: 2,
      }]
    }
  )

  const [currentpage, setCurrentpage] = useState(1);
  const recordsperpage = 11;
  const indexoflastrecord = currentpage * recordsperpage;
  const indexoffirstrecord = indexoflastrecord - recordsperpage;
  const records = arraytest2.slice(indexoffirstrecord, indexoflastrecord);
  const nPages = Math.ceil(arraytest2.length / recordsperpage);
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
    <div >
      <SearchBar />
      <div className='md:w-[40rem] lg:w-[60rem] xl:w-[80rem] mx-auto'>
      <h1 className='font-bold font-poppins text-2xl mt-3 text-left text-white'>Transactions</h1>
      </div>
      <div className='bg-[#252527] flex flex-col lg:flex-row xl:flex-row rounded-xl shadow-lg w-full md:w-[40rem] lg:w-[60rem] xl:w-[80rem] h-[28rem] items-center mx-auto  my-5'>
        <div className='justify-center ml-12 text-white flex lg:flex-col mx-3'>
          <div className='px-1 text-center lg:text-left'>
          <h1 className='my-3'>Total Transactions</h1>
          <p className='text-2xl mb-2'>199.5 K</p>
          </div>
          <div className='px-1 text-center lg:text-left'>
          <h1 className='my-3'>Contract Transaction</h1>
          <p className='text-2xl mb-2'>68</p>
          </div>
          <div className='px-1 text-center lg:text-left'>
          <h1 className='my-3'>Gas Fee Paid</h1>
          <p className='text-2xl mb-2'>0.2597</p>
          </div>
        </div>
        <div>
          <DynamicChart chartData={userData} className="" />
        </div>
      </div>
      <div>
      <div className='rounded-lg overflow-x-auto'>
        <table className='items-center mx-auto mt-9 w-[80rem] rounded-lg text-left'>
          <thead className='bg-[#0F2434] rounded-lg text-white font-bold font-poppins '>
            <tr className='text-white rounded-xl'>
            <th className='text-left pl-7 py-4 '> TxHash </th>
            <th className='text-left pl-7 py-4'>Block</th>
            <th className='text-left pl-7 py-4'>Method</th>
            <th className='text-left pl-7 py-4'>From</th>
            <th className='text-left pl-7 py-4'>To</th>
            <th className='text-left pl-7 py-4'>Timestamp</th>
            <th className='text-left pl-7 py-4'>Value</th>
            <th className='text-left pl-7 py-4'>Status</th>
            </tr>
          </thead>
          <tbody className=''>
            {
              records.map(arr => (
                <tr key={arr.id} className='text-white bg-[#040F1C] border-b-[1px] border-0 border-[#0F2434] font-poppins font-bold text-[14px] ' >
                  <td className='pl-7 text-left py-3'>{arr.TxHash}</td>
                  <td className='pl-7 text-left py-3 text-[#0E83DB]'>{arr.Block}</td>
                  <td className='pl-7 text-left py-3'>{arr.Method}</td>
                  <td className='pl-7 text-left py-3 flex items-center mt-2 text-[#0E83DB]'>{arr.From} <span><img src={square} alt="" className='pl-2'/></span> </td>
                  <td className='pl-7 text-left py-3 text-[#0E83DB]'>{arr.To}<span className='inline-block pl-2 '><img src={square} alt="" className=''/></span> </td>
                  <td className='pl-7 text-left py-3'>{arr.Timestamp}<span className='block font-semibold text-[11px] text-[#9CA0A7]'>{arr.date}</span></td>
                  <td className='pl-7 text-left py-3'>{arr.Value}</td>
                  <td className='pl-7 text-left py-3'><button className='text-green-500'>Success</button></td>
                </tr>
              ))
            }
          </tbody>
        </table>
        <div>
          <nav>
            <ul className='text-white mx-auto w-[80rem] flex flex-row py-7 mb-12  justify-center  bg-[#071120]'>
              <li className='mr-3'>
                <a href="#" onClick={prePage} className='bg-[#0C71BC] rounded-full py-2 px-3 '>Prev </a>
              </li>
              {
                numbers.map((n, i) =>
                  <li key={i} className={`mr-3 ${currentpage === n ? 'active' : ""} hover:outline-blue-700 hover:outline hover:outline-2 hover:outline-offset-2 px-2`}>
                    <a href="#" onClick={(e) => changeCPage(n,e)}>{n}</a>
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
    </div>
  )
}

export default Transactions