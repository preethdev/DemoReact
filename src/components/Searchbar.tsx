

export default function Searchbar() {
    return (
        <>

            <div className='m-2 mt-8 w-11/12 grid grid-rows-1 gap-2 mb-8'>
                <div className='grid grid-cols-12 justify-items-center items-center'>
                    <div className="col-span-2">
                        <input type="text" className="border border-gray-300 hover:border-indigo-500 focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 text-sm rounded-lg w-full p-2.5 " placeholder="Search Text"></input>
                    </div>
                    <div className="col-span-2">
                        <button className='w-24 m-2 h-9 bg-indigo-700 rounded-md text-white'>Search</button>

                    </div>
                    <div className="col-span-4">

                    </div>
                    <div className="col-span-2">
                        <select className="form-select appearance w-full p-2.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat 
                         border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example" placeholder='Station Name'>
                            <option>Filter By</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className="col-span-2">
                        <select className="form-select appearance w-full p-2.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat 
                         border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example" placeholder='Station Name'>
                            <option>Sort By</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </div>
            </div>

        </>


    )
}