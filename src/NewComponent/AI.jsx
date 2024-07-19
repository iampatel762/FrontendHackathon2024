import React from 'react'
import Sidebar from './Sidebar'

export default function AI() {
  return (
    <div className='flex'>
        <Sidebar/>

        <section className='relative ml-80 mr-6 mt-6 w-full h-[95vh] bg-gray-100 rounded-lg shadow-xl'>
            <div className='w-[100%] h-[80vh] '>
                <p className='bg-slate-300 rounded-lg p-4 text-lg h-full w-full ' name="textarea" id="textarea">This is p tag</p>
            </div>

            <input className='text-xl font-semibold bg-slate-300 absolute mx-[100px] rounded-xl  bottom-8 h-7 w-[80%] p-7' type="text" />  
            
           
        </section>
    </div>
  )
}
