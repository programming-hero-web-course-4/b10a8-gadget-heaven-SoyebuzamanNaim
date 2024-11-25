import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './assets/components/Root/Root';
import ErrorPage from './assets/components/ErrorPage/ErrorPage';
import Dashboard from './assets/components/Dashboard/Dashboard';
import Statistics from './assets/components/Statistics/Statistics';
import Wishlist from './assets/components/Wishlist/Wishlist';
import Cart from './assets/components/Cart/Cart';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      
      {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        
        children:[
          {
            index: true,
            element:<Cart></Cart>
          },
          {
            path: 'wishlist',
            element: <Wishlist></Wishlist>
          },
          {
            path: 'cart',
            element: <Cart></Cart>
          },
          
        ]

      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '*',
        element: <ErrorPage></ErrorPage>
      },
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
