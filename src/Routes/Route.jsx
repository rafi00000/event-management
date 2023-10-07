import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import ServiceDetails from "../Components/ServiceDetails";

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
            }
        ]
    }
])

export default route;