import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,createRoutesFromElements,RouterProvider} from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout.jsx'
import { Home,About,Contact,User,Github } from './components/index.js'
import { githubInfoLoader } from './components/Github/Github.jsx';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element:<Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route 
        // can make a direct api call form here with help of loader can also use fetch directly here 
        loader={githubInfoLoader}
        path='github'
        element={<Github />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} 
      />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
