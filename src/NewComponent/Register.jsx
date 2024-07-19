import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Register() {
    let[registerdata,setregisterdata]=useState({
        'username':'',
        'email':'',
        'password':''
    })
    let chage_register_data=(e)=>{
        let {name,value}=e.target;
        let olddata={...registerdata};
        olddata[name]=value;
        setregisterdata(olddata);
        console.log(registerdata);
    }
    let send_register_data=async(e)=>{
        e.preventDefault();
        try{
           let res =await axios.post(
            'http://127.0.0.1:8000/signup',
            {
                username:registerdata.username,
                email:registerdata.email,
                password:registerdata.password
            },
        )
            console.log(res);
        }
        catch(error){
            console.error("this is your error",error);
        }
    
    }
  return (
    <section class="bg-[#add8e6] min-h-screen flex box-border justify-center items-center">
    <div class="bg-gradient-to-r from-emerald-500 to-emerald-900 rounded-2xl flex max-w-3xl p-5 items-center">
        <div class="md:w-1/2 px-8">
            <h2 class="font-bold text-3xl text-[#002D74]">Sign Up</h2>
            <p class="text-sm mt-4 text-[#002D74]">Be member today. Achieve mental freedom tomorrow</p>

           

            <form onSubmit={(e)=>send_register_data(e)} method="post" action="" class="flex flex-col gap-2 mt-4">
            
                <input onChange={(e)=>chage_register_data(e)} class="p-2 rounded-xl border" type="username" value={registerdata.username} name="username" placeholder="Username"/>
                <input onChange={(e)=>chage_register_data(e)} class="p-2 rounded-xl border" type="email" name="email" placeholder="Email" value={registerdata.email}/>
                <input onChange={(e)=>chage_register_data(e)} class="p-2 rounded-xl border w-full" type="password" name="password" id="password" placeholder="Password" value={registerdata.password}/>
                <button onChange={(e)=>chage_register_data(e)} class="bg-[#002D74] text-white py-2 rounded-xl hover:scale-105 duration-300 hover:bg-[#206ab1] font-medium" type="submit">Sign Up</button>
            </form>
            <div class="mt-6  items-center text-gray-100">
                <hr class="border-gray-300"/>
                <p class="text-center text-sm">OR</p>
                <hr class="border-gray-300"/>
            </div>
            <button class="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 hover:bg-[#60a8bc4f] font-medium">
                  
                    <svg class="mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="25px">
                        <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
                        <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
                        <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
                        <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                    </svg>

                    Sign Up with Google
                </button>
            <div class="mt-4 text-sm flex justify-between items-center container-mr">
                <p class="mr-3 md:mr-0">Already have an account?</p>
                <Link to={'/home/login'}> <button class="hover:border hover:border-gray-400 rounded-xl py-2 px-5 hover:scale-110 hover:bg-[#002c7424] bg-[#002D74] text-white font-semibold duration-300">Login </button></Link>
            </div>
            
        </div>
        <div class="md:block hidden w-1/2">

            <div class="mb-8">
                {/* {% if quotes %} */}
                    <div class="relative">
                        <img class="rounded-2xl max-h-[1600px]" src="https://images.unsplash.com/photo-1552010099-5dc86fcfaa38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxmcmVzaHxlbnwwfDF8fHwxNzEyMTU4MDk0fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="@"/>
                        <div class="absolute top-4 left-4 bg-black bg-opacity-10  text-white p-4 rounded-md">
                            {/* <p class="text-lg">This is p tag </p> */}
                        </div>
                        <div class="absolute bottom-4 left-4 bg-black bg-opacity-30 text-white p-4 rounded-md">
                            {/* <p class="text-sm font-semibold">- This is also p tag</p> */}
                        </div>
                    </div>
                {/* {% else %} */}
                    {/* <p class="text-gray-700">No quotes available.</p> */}
                {/* {% endif %} */}
            </div>
            
        </div>
    </div>
</section>
  )
}
