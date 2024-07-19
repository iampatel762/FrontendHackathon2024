import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Images/logo.png'

const Sidebar = () => {
  return (
    <section className="fixed top-0 left-0 w-72 h-full bg-gray-100 z-2000 transition duration-300">
      <a href="@" className="brand flex items-center text-blue-500 text-2xl font-bold py-5">
        <i className='bx bxs-apple'></i>
        <span className="ml-20  h-32 w-32 rounded-full overflow-hidden">
          <img src={logo} alt="" />
        </span>
      </a>
      <ul className="side-menu mt-12">
        <li className="active">
          <b className="flex items-center px-6 py-4 text-gray-800 bg-gray-300 rounded-l-full">
            <span className="ml-4">Dashboard</span>
          </b>
        </li>
        <li>
          <Link to='/login/dashboard/askai' className="flex items-center px-6 py-4 text-gray-800 rounded-l-full">
            <i className='bx bxs-search'></i>
            <span className="ml-4">Ask AI</span>
          </Link>
        </li>
        <li>
          <Link to='/login/dashboard' className="flex items-center px-6 py-4 text-gray-800 rounded-l-full">
            <i className='bx bxs-video'></i>
            <span className="ml-4">Book Appointment</span>
          </Link>
        </li>
        {/* <li>
          <Link to='/subscription/subscription' className="flex items-center px-6 py-4 text-gray-800 rounded-l-full">
            <i className='bx bxs-chat'></i>
            <span className="ml-4">Subscribe</span>
          </Link>
        </li> */}
        <li>
          <Link to="/PROFILE/PROFILE.HTML" className="flex items-center px-6 py-4 text-gray-800 rounded-l-full">
            <span className="ml-4">Profile</span>
          </Link>
        </li>
        <li>
          <Link to='/' className="flex items-center px-6 py-4 text-gray-800 rounded-l-full">
            <i className='bx bxs-log-out-circle'></i>
            <span className="ml-4">Logout</span>
          </Link>
        </li>
        <li>
          <a href="https://wa.me/+917479992986" className="flex items-center px-6 py-4 text-gray-800 rounded-l-full">
            <i className='bx bxs-chat'></i>
            <span className="ml-4">Need support?</span>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Sidebar;
