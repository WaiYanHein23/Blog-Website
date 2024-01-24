import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Home } from './Pages/Home.jsx';
import { Blogs } from './Pages/Blogs.jsx';
import { Contact } from './Pages/Contact.jsx';
import { About } from './Pages/About.jsx';
import { Services } from './Pages/Services.jsx';
import SingleBlog from './Pages/SingleBlog.jsx';
import Login from './Pages/Login.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/blogs',
        element:<Blogs/>
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/services',
        element:<Services/>
      },
      {
        path:'/contact',
        element:<Contact/>
      },
      {
        path:'/singleblogs/:id',
        element:<SingleBlog/>,
        loader:({params})=>fetch(`http://localhost:3030/blogs/${params.id}`)
      },
      {
        path:'/login',
        element:<Login/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
