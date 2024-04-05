import React, { useEffect, useState } from "react";

const ModalComponent = ({ onClose }) => {
  const [statsData, setStatsData] = useState(null);
  const [error, setError] = useState(null);

  const test = async () => {
    try {
      const res = await fetch(
        `https://eth.blockscout.com/api/v2/main-page/transactions`
      );
      const response = await res.json();
      setStatsData(response);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    test();
  }, []);

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto ">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-[#0F2434] opacity-75"></div>
        </div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div className="inline-block align-bottom bg-black rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-full sm:w-full sm:p-6">
          <div className="">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-[#0F2434]">
              <svg
                className="h-6 w-6 text-green-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>
          <button
            onClick={onClose}
            className="absolute top-0 right-0 mt-7 mr-7 px-2 py-1  bg-red-600 text-white rounded"
          >
            Close
          </button>
          {/* table */}
          <div className="relative">
            {statsData ? (
              <div className="overflow-x-auto mt-8 bg-[#0F2434]">
                <table className="w-full table-auto bg-[#0F2434]">
                  <thead>
                    <tr className="bg-[#0F2434]">
                      <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                        Index
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                        Gas Limit
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                        Gas Used
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                        Priority Fee
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                        Confirmations
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                        TX Count
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                        TX Fee
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                        Type
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-[#0F2434] divide-y divide-gray-200">
                    {statsData.map((item, index) => (
                      <tr
                        key={index}
                        className="bg-[#0F2434]"
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                          {index}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                          {item?.gas_limit}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                          {item?.gas_used}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                          {item?.priority_fee}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                          {item?.confirmations}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                          {item?.block}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                          {item?.fee?.value}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                          {item?.tx_types?.slice(0,13)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="text-center">Loading...</p>
            )}
          </div>
          <div className="mt-5 sm:mt-6">
            <button
              onClick={onClose}
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
