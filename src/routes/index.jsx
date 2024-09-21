import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/main/Main";
import Home from "../pages/main/Home";
import Foods from "../pages/main/Foods";
import Food from "../pages/main/Food";
import About from "../pages/main/About";
import TermsAndConditions from "../pages/main/TermsAndConditions";
import Dashboard from "../layouts/dashboard/Dashboard";
import DashboardHome from "../pages/dashboard/DashboardHome";
import AddMenu from "../pages/dashboard/AddMenu";
import Earnings from "../pages/dashboard/Earnings";
import Auth from "../layouts/auth/Auth";
import Login from "../pages/auth/Login";
import ForgetPassword from "../pages/auth/ForgetPassword";
import OtpVerify from "../pages/auth/OtpVerify";
import ResetPassword from "../pages/auth/ResetPassword";
import SignUp from "../pages/auth/SignUp";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/home",
                element: <Home />
            },
            {
                path: "/foods",
                element: <Foods />
            },
            {
                path: "/foods/:id",
                element: <Food />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/terms-and-conditions",
                element: <TermsAndConditions />
            }
        ]
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
            {
                path: "/dashboard",
                element: <DashboardHome />
            },
            {
                path: "add-menu",
                element: <AddMenu />
            },
            {
                path: "earnings",
                element: <Earnings />
            }
        ]
    },
    {
        path: "/auth",
        element: <Auth />,
        children: [
            {
                path: "/auth",
                element: <Login />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "sign-up",
                element: <SignUp />
            },
            {
                path: "forget-password",
                element: <ForgetPassword />
            },
            {
                path: "otp-verify",
                element: <OtpVerify />
            },
            {
                path: "reset-password",
                element: <ResetPassword />
            },
        ]
    },
    {path: "*",
        element: <NotFound />
    }
]);


export default router;