import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Menu from "../pages/menu/Menu";
import Order from "../pages/order/Order";
import Login from "../pages/login/Login";
import Resister from "../pages/resister/Resister";
import DashBoard from "../layout/DashBoard";
import MyCrt from "../pages/dashboard/MyCrt";
import AllUsers from "../pages/dashboard/AllUsers";
import AddItem from "../pages/dashboard/AddItem";
import AdminRoute from "./AdminRoute";


const router = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:'/menu',
                element:<Menu></Menu>
            },
            {
                path:'/order/:category',
                element:<Order></Order>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/resister',
                element:<Resister></Resister>
            }
        ]
    },
    {
        path:'dashBoard',
        element:<DashBoard></DashBoard>,
        children:[
            {
                path:'mycart',
                element:<MyCrt></MyCrt>
            },
            {
                path:'allusers',
                element:<AllUsers></AllUsers>
            },
            {
                path:'additem',
                element:<AdminRoute><AddItem></AddItem></AdminRoute>
            }
        ]
            
    }
])
export default router;