import React, {lazy ,Suspense }from "react";
import ReactDOM from "react-dom/client";
import Heading from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Cart from "./components/Cart";
import SingleResPage from "./components/singleResPage";
import { createBrowserRouter, RouterProvider, Outlet, useLocation } from "react-router-dom";
import { lazy } from "react";
// import Grocerry from "./components/Grocerry";

// Making project like swiggy
/* 
    -Navbar
        * logo
        * nav links
    -Body
        * Search Bar
        * Reastaurants container
            -restaurant cards
                --img
                --rating
                --title
    -footer
        * copyright
        * contacts
        * address
*/
const Grocerry = lazy(() => import("./components/Grocerry"));


const AppLayout = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const resID = queryParams.get("resID");
  return (
    <div>
      <Heading />
      <Outlet /> 
    </div>
  );
};
// assigning configuration to appRouter
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/Grocerry",
        element: <Suspense fallback = {<h1>loading.....</h1>}><Grocerry /></Suspense>,
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/restaurant/:resID", //dynamic part is written after colon
        element: <SingleResPage />,
      }
    ]
  },
  // {
  //   path: "/about",
  //   element: <About />,
  // },
  // {
  //   path: "/contact",
  //   element: <Contact />,
  // },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
// root.render(<AppLayout />);
