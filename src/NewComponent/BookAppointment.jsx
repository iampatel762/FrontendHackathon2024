// import { useState } from "react";

import { useState } from "react"

export default function BookAppointment() {
  let [bookData,setBookData]=useState({
     "radio":"",
     "date":"",
     "time":""
  })
  let setFormData=(e)=>{
    let olddata = [...bookData];
    let fname = e.target.name;
    let fvalue = e.target.value;
    olddata[fname]=fvalue
    setBookData(olddata);
  }
  return (
    <div className="w-screen">
    <div className="relative mx-auto mt-20 mb-20 max-w-screen-lg overflow-hidden rounded-t-xl bg-emerald-400/60 py-32 text-center shadow-xl shadow-gray-300">
      <h1 className="mt-2 px-8 text-3xl font-bold text-white md:text-5xl">Book an appointment</h1>
      <p className="mt-6 text-lg text-white">Get an appointment with our experienced accountants</p>
      <img className="absolute top-0 left-0 -z-10 h-full w-full object-cover" src="https://images.unsplash.com/photo-1504672281656-e4981d70414b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="none" />
    </div>
  
    <div className="mx-auto grid max-w-screen-lg px-6 pb-20">

      <form>
        <p className="font-serif text-xl font-bold text-blue-900">Select a service</p>
        <div className="mt-4 grid max-w-3xl gap-x-4 gap-y-3 sm:grid-cols-2 md:grid-cols-3">
          <div className="relative">
            <input onChange={(e)=>setFormData(e)} className="peer hidden" id="couple" type="radio" name="radio" checked />
            <span className="absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white peer-checked:border-emerald-400"></span>
            <label className="flex h-full cursor-pointer flex-col rounded-lg p-4 shadow-lg shadow-slate-100 peer-checked:bg-emerald-600 peer-checked:text-white" for="radio_1">
              <span className="mt-2- font-medium">Couple</span>
              <span className="text-xs uppercase">Me and my wife</span>
            </label>
          </div>
          <div className="relative">
            <input onChange={(e)=>setFormData(e)} className="peer hidden" id="individual" type="radio" name="radio" />
            <span className="absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white peer-checked:border-emerald-400"></span>
  
            <label className="flex h-full cursor-pointer flex-col rounded-lg p-4 shadow-lg shadow-slate-100 peer-checked:bg-emerald-600 peer-checked:text-white" for="radio_2">
              <span className="mt-2 font-medium">Individual</span>
              <span className="text-xs uppercase">Myself</span>
            </label>
          </div>
          <div className="relative">
            <input onChange={(e)=>setFormData(e)} className="peer hidden" id="teens" type="radio" name="radio" />
            <span className="absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white peer-checked:border-emerald-400"></span>
  
            <label className="flex h-full cursor-pointer flex-col rounded-lg p-4 shadow-lg shadow-slate-100 peer-checked:bg-emerald-600 peer-checked:text-white" for="radio_3">
              <span className="mt-2 font-medium">Teens</span>
              <span className="text-xs uppercase">My child</span>
            </label>
          </div>
        </div>
      </form>
  
      <div className="">
        <p className="mt-8 font-serif text-xl font-bold text-blue-900">Select a date</p>
        <div className="relative mt-4 w-56">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <svg aria-hidden="true" className="h-5 w-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
          </div>
          <input onChange={(e)=>setFormData(e)} name="date" datepicker-orientation="bottom" autofocus="autofocus" type="date" className="datepicker-input block w-full rounded-lg border border-emerald-300 bg-emerald-50 p-2.5 pl-10 text-emerald-800 outline-none ring-opacity-30 placeholder:text-emerald-800 focus:ring focus:ring-emerald-300 sm:text-sm" placeholder="Select date" />
        </div>
      </div>
  
      <div className="">
        <p className="mt-8 font-serif text-xl font-bold text-blue-900">Select a time</p>
        <div className="mt-4 grid grid-cols-4 gap-2 lg:max-w-xl">
          
          <button onChange={(e)=>setFormData(e)} value={'10:00'} name="time" className="rounded-lg bg-emerald-100 px-4 py-2 font-medium text-emerald-900 active:scale-95">10:00</button>
          <button value={'11:00'} name="time"className="rounded-lg bg-emerald-100 px-4 py-2 font-medium text-emerald-900 active:scale-95">11:00</button>
          <button value={'12:00'} name="time" className="rounded-lg bg-emerald-100 px-4 py-2 font-medium text-emerald-900 active:scale-95">12:00</button>
          {/* <button className="rounded-lg bg-emerald-700 px-4 py-2 font-medium text-white active:scale-95">09:00</button> */}
          <button value={'13:00'} name="time" className="rounded-lg bg-emerald-100 px-4 py-2 font-medium text-emerald-900 active:scale-95">13:00</button>
          <button value={'14:00'} name="time" className="rounded-lg bg-emerald-100 px-4 py-2 font-medium text-emerald-900 active:scale-95">14:00</button>
          <button value={'15:00'} name="time" className="rounded-lg bg-emerald-100 px-4 py-2 font-medium text-emerald-900 active:scale-95">15:00</button>
          <button value={'16:00'} name="time" className="rounded-lg bg-emerald-100 px-4 py-2 font-medium text-emerald-900 active:scale-95">16:00</button>
          <button value={'17:00'} name="time" className="rounded-lg bg-emerald-100 px-4 py-2 font-medium text-emerald-900 active:scale-95">17:00</button>
        </div>
      </div>
  
      <button type="submit" className="mt-8 w-56 rounded-full border-8 border-emerald-500 bg-emerald-600 px-10 py-4 text-lg font-bold text-white transition hover:translate-y-1">Book Now</button>
    </div>
  </div>
  )
}
