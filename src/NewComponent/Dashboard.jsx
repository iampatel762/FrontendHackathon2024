import React from 'react';
import Sidebar from './Sidebar';
import {ourdoctor} from '../Data'
import couple from '../Images/couple.jpg';
import single from '../Images/single.jpg';
import teens from '../Images/teens.jpeg';
import surgen from '../Images/surgeon.jpg'

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <section id="content" className="ml-72 w-full">
        <main className="p-6">
          <div className="head-title flex justify-between items-center flex-wrap">
            <div className="left">
              <h1 className="text-3xl font-semibold text-gray-800">Sukoon</h1>
              <div className='pt-2 text-lg'>Our Special Package</div>
            </div>
          </div>
          <ul className="box-info grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <li className="p-6 bg-gray-100 rounded-lg flex items-center">
              <i className='overflow-hidden bx bxs-calendar-check w-32 h-20 flex justify-center items-center text-2xl text-blue-500 bg-blue-100 rounded-md'>
                <img className='bg-cover bg-center' src={couple} alt="" />
              </i>
              <span className="ml-6">
                <p className="text-gray-800">Couple</p>
                <h3 className="text-xl font-semibold text-gray-800">For me and my wife</h3>
              </span>
            </li>
            <li className="p-6 bg-gray-100 rounded-lg flex items-center">
              <i className='overflow-hidden bx bxs-group w-32 h-20 flex justify-center items-center text-2xl text-yellow-500 bg-yellow-100 rounded-md'>
                <img className='bg-cover bg-center' src={single} alt="" />
              </i>
              <span className="ml-6">
                <p className="text-gray-800">Individual</p>
                <h3 className="text-xl font-semibold text-gray-800">For myself</h3>
              </span>
            </li>
            <li className="p-6 bg-gray-100 rounded-lg flex items-center">
              <i className='overflow-hidden bx bxs-dollar-circle w-32 h-20 flex justify-center items-center text-2xl text-orange-500 bg-orange-100 rounded-md'>
               <img className='bg-cover bg-center' src={teens} alt="" />
              </i>
              <span className="ml-6">
                <p className="text-gray-800">Teens</p>
                <h3 className="text-xl font-semibold text-gray-800">For my child</h3>
              </span>
            </li>
          </ul>
          <div className="table-data flex flex-wrap mt-6 gap-6">
            <div className="order flex-grow bg-gray-100 p-6 rounded-lg">
              <div className="head flex items-center justify-between">
                <h3 className="text-xl font-semibold text-gray-800">Our Doctors Reseachers and specialist</h3>
                <i className='bx bx-search text-gray-800 cursor-pointer'></i>
              </div>
              <hr /><hr /><hr />
              <table className="w-full mt-4 border-collapse">
                {/* <thead>
                  <tr>
                    <th className="pb-3 text-left text-sm text-gray-800 border-b border-gray-300"></th>
                    <th className="pb-3 text-left text-sm text-gray-800 border-b border-gray-300"></th>
                    <th className="pb-3 text-left text-sm text-gray-800 border-b border-gray-300"></th>
                  </tr>
                </thead> */}
                <tbody className=''>
                  {
                      ourdoctor.map((v,i)=>{
                        // let forwardto=(v,i)=>{
                        //   return(
                            
                        //   );
                        // }
                        return(
                          <tr className="hover:bg-gray-200 ">
                            <td className="py-4 flex items-center gap-3 pl-2">
                              <img src={surgen} className="w-9 h-9 rounded-full object-cover" alt="Mixed vegetable Salad" />
                              <p>{v.name}</p>
                                </td>
                                <td className="py-4">Completed degree from {v.college} in the year {v.passout}</td>
                                <td className="py-6">
                              <span className=" text-white bg-blue-500 px-4 py-2 w-full h-3 rounded-full text-center font-semibold"><a href={'/login/bookappointment/bookNow'}>{v.specialist}</a></span>
                            </td>
                          </tr>
                        )
                      })
                  }
                  {/* <tr className="hover:bg-gray-200">
                    <td className="py-4 flex items-center gap-3 pl-2">
                      <img src="../img/mushroom-omlette.jpg" className="w-9 h-9 rounded-full object-cover" alt="Mushroom omlette" />
                      <p>Mushroom omlette</p>
                    </td>
                    <td className="py-4">527 kcal</td>
                    <td className="py-4">
                      <span className="status text-white bg-orange-500 px-4 py-2 rounded-full text-xs font-semibold">Medium</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-200">
                    <td className="py-4 flex items-center gap-3 pl-2">
                      <img src="../img/salad.jpg" className="w-9 h-9 rounded-full object-cover" alt="salad" />
                      <p>Salad</p>
                    </td>
                    <td className="py-4">587 kcal</td>
                    <td className="py-4">
                      <span className="status text-white bg-green-500 px-4 py-2 rounded-full text-xs font-semibold">Hard</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-200">
                    <td className="py-4 flex items-center gap-3 pl-2">
                      <img src="../img/salad.jpg" className="w-9 h-9 rounded-full object-cover" alt="salad" />
                      <p>Salad</p>
                    </td>
                    <td className="py-4">587 kcal</td>
                    <td className="py-4">
                      <span className="status text-white bg-green-500 px-4 py-2 rounded-full text-xs font-semibold">Hard</span>
                    </td>
                  </tr> */}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
};

export default Dashboard;
