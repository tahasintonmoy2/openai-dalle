import React, {useState} from 'react'

const Main = () => {
  return (
    <div className='w-full h-screen text-center pt-52'>
      <div className='max-w-[1240px] w-full h-full mx-auto justify-center'>
        <div className="items-center">
            <div className="flex mx-32 mb-2 items-center">
                <p className="text-gray-400">Start with a detailed description</p>
            <button
            type='button'
            className="font-semibold ml-2 text-xs bg-[#EcECF1] py-2 px-2 hover:text-gray-500 rounded-[5px] text-black"
            >
                Surprise me
            </button>
            </div>
            <div className=" mx-28 flex"> 
            <form className=" w-full">
            <input 
            type="text" 
            placeholder='An Impressionist oil painting of sunflowers in a purple vase…'
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#6469ff] focus:border-[#6469ff] outline-none w-full p-4"
            />              
            </form>
            <button
            // disabled = {isFormEmpty}
            className=" text-white bg-indigo-600 font-medium rounded-md text-sm ml-1 sm:w-auto px-5 h-12 py-1 text-center"
            >
                Generate
            </button>            
            </div>
        </div>
      </div>
    </div>
  )
}

export default Main
