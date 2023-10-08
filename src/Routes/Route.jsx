import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import ServiceDetails from "../Components/ServiceDetails";
import AboutUs from "../Components/AboutUs";
import ContactUs from "../Components/ContactUs";

const route = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch('/data.json')
            }, 
            {
                path: '/service/:id',
                element: <ServiceDetails></ServiceDetails>
            },
            {
                path: '/about',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/contactus',
                element: <ContactUs></ContactUs>
            }
        ]
    }
])

export default route;