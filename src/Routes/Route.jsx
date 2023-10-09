import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import ServiceDetails from "../Components/ServiceDetails";
import AboutUs from "../Components/AboutUs";
import ContactUs from "../Components/ContactUs";
import LoginForm from "../Components/form/LoginForm";
import RegisterForm from "../Components/form/RegisterForm";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import ErrorPage from "../Components/ErrorPage";

const route = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch('/data.json')
            }, 
            {
                path: '/service/:id',
                element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>
            },
            {
                path: '/about',
                element: <PrivateRoute><AboutUs></AboutUs></PrivateRoute>
            },
            {
                path: '/contactus',
                element: <PrivateRoute><ContactUs></ContactUs></PrivateRoute>
            },
            {
                path: '/login',
                element: <LoginForm></LoginForm>
            },
            {
                path: '/register',
                element: <RegisterForm></RegisterForm>
            }
        ]
    }
])

export default route;