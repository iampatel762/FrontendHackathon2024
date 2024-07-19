import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Main from './NewComponent/Main.jsx';
import Login from './NewComponent/Login.jsx';
import Register from './NewComponent/Register.jsx'
import BookAppointment from './NewComponent/BookAppointment.jsx';
import Dashboard from './NewComponent/Dashboard.jsx';
import Review from './NewComponent/Review.jsx'
import AI from './NewComponent/AI.jsx';


const router=createBrowserRouter(
  [
    {
      path:'/home',
      element:<Main/>
    },
    {
      path:'/home/review',
      element:<Review/>
    },
    {
      path:'/home/login',
      element:<Login/>
    },
    {
      path:'/home/register',
      element:<Register/>
    },
    {
      path:'home/:id/bookappointment/bookNow',
      element:<BookAppointment/>
    },
    {
      path:'/home/:id',
      element:<Dashboard/>
    },
    {
      path:'*',
      element:<h1>Page not found</h1>
    },
    {
      path:'/login/:id/askai',
      element:<AI/>
    }

  ]
)




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>    
    <RouterProvider router={router}/>

  </React.StrictMode> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
