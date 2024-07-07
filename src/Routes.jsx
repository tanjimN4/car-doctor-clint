import {
        createBrowserRouter,
  } from "react-router-dom";
import Main from "./Layout/Main";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Checkout from "./pages/Checkout/Checkout";
import Booking from "./pages/Booking/Booking";
import Private from "./Private";
  
const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
        },
        {
            path:'/login',
            element:<Login></Login>,
        },
        {
            path:'/signup',
            element:<Signup></Signup>,
        },
        {
            path:'/checkout/:id',
            element:<Checkout></Checkout>,
            loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
            path:'/booking',
            element:<Private><Booking></Booking></Private>,
            
        },
      ]
    },
  ]);

export default router