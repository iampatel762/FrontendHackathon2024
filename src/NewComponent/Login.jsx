import React, { useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
export default function Login() {
    let [login_value,setlogin_value]=useState({
        'username':'',
        'password':''
    })

    let setFdata=(e)=>{
       let {name,value}=e.target;
       let olddata = {...login_value} ;
       olddata[name]=value
       setlogin_value(olddata);
       console.log(login_value);
    }
    
    let postdata=async(e)=>{
        e.preventDefault();
      
        try{
            let res = await axios.post(
                'http://127.0.0.1:8000/login',
                {
                    username:login_value.username,
                    password:login_value.password                
                }
            );
            console.log(res.data);
        }
        catch(error){
            console.error('the eror is',error);
        }
    }
  return (
    <section className="bg-[#21292c] min-h-screen flex box-border justify-center items-center">
    <div className="bg-gradient-to-r from-emerald-500 to-emerald-900 rounded-2xl flex max-w-3xl p-5 items-center">
        <div className="md:w-1/2 px-8">
            <h2 className="font-bold text-3xl text-[#002D74]">Login</h2>
            <p className="text-sm mt-4 text-[#002D74]">If you already a member, easily log in now.</p>


            <form onSubmit={(e)=>postdata(e)} method="post" action="" className="flex flex-col gap-4">
                <input onChange={(e)=>setFdata(e)} className="p-2 mt-8 rounded-xl border" type="username" name="username" value={login_value.username} placeholder="Username"/>
                <input onChange={(e)=>setFdata(e)} className="p-2 rounded-xl border w-full" type="password" name="password" value={login_value.password} id="password" placeholder="Password"/>
                
                <Link to={`/home/$`}><button className="bg-[#002D74] text-white py-2 rounded-xl hover:scale-105 duration-300 hover:bg-[#206ab1] font-medium" type="submit">Login</button></Link>
            </form>
            <div className="mt-6  items-center text-gray-100">
                <hr className="border-gray-300"/>
                <p className="text-center text-sm">OR</p>
                <hr className="border-gray-300"/>
            </div>
            <button className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 hover:bg-[#60a8bc4f] font-medium">
                    <svg className="mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="25px">
                        <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
                        <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
                        <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
                        <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                    </svg>

                    Login with Google
                </button>
            <div className="mt-10 text-sm border-b border-gray-500 py-5 playfair tooltip">Forget password?</div>

            <div className="mt-4 text-sm flex justify-between items-center container-mr">
                <p className="mr-3 md:mr-0 ">If you don't have an account..</p>
                <Link to={'/home/register'}> <button className="hover:border register text-white bg-[#002D74] hover:border-gray-400 rounded-xl py-2 px-5 hover:scale-110 hover:bg-[#002c7424] font-semibold duration-300">Register</button></Link>
            </div>
            
        </div>
        <div className="md:block hidden w-1/2">

            <div className="mb-8">
                    <div className="relative">
                        <img className="rounded-2xl max-h-[1600px]" src="https://images.unsplash.com/photo-1552010099-5dc86fcfaa38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxmcmVzaHxlbnwwfDF8fHwxNzEyMTU4MDk0fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="login form"/>
                        <div className="absolute top-4 left-4 bg-black bg-opacity-10  text-white p-4 rounded-md">
                            {/* <p className="text-lg">This is p tag from login</p> */}
                        </div>
                        <div className="absolute bottom-4 left-4 bg-black bg-opacity-30 text-white p-4 rounded-md">
                            {/* <p className="text-sm font-semibold">-This is second p tag</p> */}
                        </div>
                    </div>
                
                    {/* <p className="text-gray-700">No quotes available.</p> */}
                
            </div>
            
        </div>

        <div className="absolute bottom-4 right-4">
            <a href="@"><p className="mr-3 md:mr-0 ">Therapist</p></a>
        </div>
    </div>
    
    </section>
  )
}
