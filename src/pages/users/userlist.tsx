
import { useMsal } from "@azure/msal-react";
import React, { useEffect, useState } from "react";
import { GetData } from "../../api/userconfig";
import Searchbar from "../../components/Searchbar";


export default function UserList() {
  const [showModal, setShowModal] = useState(false);
  const [modalValue, setModalValue] = useState<any>({});
  const [gridData, setGridData] = useState([]);
  const [getisDataAvailable, setgetisDataAvailable] = useState(false);
  const { instance, accounts } = useMsal();
  useEffect(() => {
    GetData(instance, accounts).then((result: any) => setGridData(result.quota));
  }, [getisDataAvailable]);

  const handlenameChange = (event:any) => {
    let newvalue={...modalValue};
    newvalue.Name = event.target.value;
    setModalValue(newvalue);
  };
  const handleAgeChange = (event:any) => {
    let newvalue={...modalValue};
    newvalue.Age = event.target.value;
    setModalValue(newvalue);
  };
  return (
    <div className='h-screen w-full mt-4'>
      <div className="flex flex-col mt-8 h-5/6">
        <div className='text-2xl'>
          <h1 className='ml-14 mt-8'>Users List</h1>
        </div>
        <div className='mt-8 ml-16 w-11/12 border-solid border-2 rounded-xl grid justify-items-center items-center'>
          <Searchbar />
          <div className='m-2 w-11/12  grid grid-rows-1 gap-2 mb-8'>
            <div className='grid grid-cols-3 justify-items-center items-center'>
              <div className='w-full h-10 border-separate border border-slate-300 text-sm grid items-center text-center'>
                User Id
              </div>
              <div className='w-full h-10 border-separate border border-slate-300 text-sm grid items-center text-center'>
                Name
              </div>
              <div className='w-full h-10 border-separate border border-slate-300 text-sm grid items-center text-center'>
                Age
              </div>
            </div>
            {gridData.map((item: any) => {
              return (
                <div className='grid grid-cols-3 justify-items-center items-center' key={item.userId}>
                  <div className='w-full h-10 border-separate border border-slate-300 text-sm grid items-center text-center'>
                    <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={() => {
                      setModalValue(item);
                      setShowModal(true);
                    }}>
                      {item.userId}</a>
                  </div>
                  <div className='w-full h-10 border-separate border border-slate-300 text-sm grid items-center text-center'>
                    {item.Name}
                  </div>
                  <div className='w-full h-10 border-separate border border-slate-300 text-sm grid items-center text-center'>
                    {item.Age}
                  </div>

                </div>
              );
            })
            }
          </div>
        </div>
      </div>
      {showModal ? (
        <div id="defaultModal" className="fixed z-50 w-1/3 p-2 overflow-y-hidden overflow-x-auto lg:inset-x-1/3 md:inset-1 h-modal md:h-full">
          <div className="relative w-full h-full max-w-2xl md:h-auto">
            {/* <!-- Modal content --> */}
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              {/* <!-- Modal header --> */}
              <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  User Edit
                </h3>
                <button type="button" onClick={() => { setShowModal(false) }} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
                  <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              {/* <!-- Modal body --> */}
              <div className="p-6 space-y-6">
                <div className="h-1/6 w-full ml-1">
                  <input type="text" className="border border-gray-300 hover:border-indigo-500 focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 text-sm rounded-lg w-full p-2.5 " placeholder="user Id" disabled defaultValue={modalValue.userId}></input>
                </div>
                <div className="h-1/6 w-full ml-1">
                  <input type="text" className="border border-gray-300 hover:border-indigo-500 focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 text-sm rounded-lg w-full p-2.5 " placeholder="Name" required defaultValue={modalValue.Name} 
                  onChange={handlenameChange} value={modalValue.Name}></input>
                </div>
                <div className="h-1/6 w-full ml-1">
                  <input type="text" className="border border-gray-300 hover:border-indigo-500 focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 text-sm rounded-lg w-full p-2.5 " placeholder="Age" required defaultValue={modalValue.Age}
                  onChange={handleAgeChange} value={modalValue.Age}></input>
                </div>
              </div>
              <div className="flex p-6 justify-items-end items-end place-content-end border-t border-gray-200 rounded-b dark:border-gray-600">
                <button type="button" className="m-2 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600" 
                onClick={() => { setShowModal(false) }}>Cancel</button>
                <button type="button" className="m-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                 onClick={() => {
                   setShowModal(false);
                  let editValue= gridData.map((data:any)=>
                    {
                      if(data.userId==modalValue.userId)
                      {
                        data.Name=modalValue.Name;
                        data.Age=modalValue.Age;
                      }
                    }
                    )
                 }}>Save</button>
              </div>
            </div>
          </div>
        </div>

      ) : null}


    </div>
  )
}
