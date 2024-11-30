import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./assets/components/Root/Root";
import ErrorPage from "./assets/components/ErrorPage/ErrorPage";
import Dashboard from "./assets/components/Dashboard/Dashboard";
import Statistics from "./assets/components/Statistics/Statistics";
import Wishlist from "./assets/components/Wishlist/Wishlist";
import Cart from "./assets/components/Cart/Cart";
import HomePage from "./assets/components/HomePage/HomePage";
import { GadgetProvider } from "./assets/contexts/GadgetProvider";
import Details from "./assets/components/Details/Details";
import { HelmetProvider } from "react-helmet-async";
import AccountLogin from "./assets/components/AccountLogin/AccountLogin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,

    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "products/:id",
        element: <Details></Details>,
      },

      {
        path: "dashboard",
        element: <Dashboard></Dashboard>,

        children: [
          {
            index: true,
            element: <Cart></Cart>,
          },
          {
            path: "wishlist",
            element: <Wishlist></Wishlist>,
          },
          {
            path: "cart",
            element: <Cart></Cart>,
          },
        ],
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "account",
        element: <AccountLogin></AccountLogin>,
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <GadgetProvider>
        <RouterProvider router={router} />
      </GadgetProvider>
    </HelmetProvider>
  </StrictMode>
);
