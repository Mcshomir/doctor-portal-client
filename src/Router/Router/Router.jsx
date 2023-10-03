import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Home from "../../Pages/Home/Home/Home";

import Appoinment from "../../Pages/Appoinment/Appoinment/Appoinment";
import SignUp from "../../Pages/SignUp/SignUp";
import SignIn from "../../Pages/SignIn/SignIn";
import PrivetRouter from "../PrivetRouter/PrivetRouter";
import About from "../../Pages/About/About";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import MyAppoinment from "../../Pages/Dashboard/MyAppoinment";
import AllUser from "../../Pages/Dashboard/AllUser";
import AdminRouter from "../AdminRouter/AdminRouter";
import AddDcotor from "../../Pages/Dashboard/AddDcotor";
import ManageDoctors from "../../Pages/Dashboard/ManageDoctors";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import ErrorRouter from "../../Pages/Shared/ErrorRouter/ErrorRouter";

export const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorRouter></ErrorRouter>,
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/apoinment',
                element: <Appoinment></Appoinment>
            },
            {
                path: '/about',
                element: <PrivetRouter><About></About></PrivetRouter>
            },
            {
                path: '/signin',
                element: <SignIn></SignIn>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/*',
                element: <p>Not Found ! 404</p>
            }

        ]
    },

    {
        path: '/dashboard',
        errorElement: <ErrorRouter></ErrorRouter>,
        element: <PrivetRouter><DashboardLayout></DashboardLayout></PrivetRouter>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppoinment></MyAppoinment>
            },
            {
                path: '/dashboard/user',
                element: <AdminRouter> <AllUser></AllUser></AdminRouter>
            },
            {
                path: '/dashboard/adddoctor',
                element: <AdminRouter><AddDcotor></AddDcotor></AdminRouter>
            },
            {
                path: '/dashboard/managedoctors',
                element: <AdminRouter><ManageDoctors></ManageDoctors></AdminRouter>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`https://doctors-portal-server-one-sigma.vercel.app/bookings/${params.id}`)

            }
        ]
    }
])