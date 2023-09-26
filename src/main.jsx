import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import Home from './Components/Home/Home.jsx';
import Donation from './Components/Donation/Donation.jsx';
import Statistics from './Components/Statistics/Statistics.jsx';
import CardDetails from './Components/CardDetails/CardDetails.jsx';
import SearchProducts from './Components/SearchProducts/SearchProducts.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
        loader: () => fetch('../data.json')
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
        loader: () => fetch('../data.json')
      },
      {
        path: "/featuredCard/:id",
        element: <CardDetails></CardDetails>,
        loader: () => fetch('../data.json')
      },
      {
        path: "/search",
        element: <SearchProducts></SearchProducts>
      }
    ]
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
