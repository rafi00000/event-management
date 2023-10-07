import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const MainLayout = () => {

    return (
        <div className="container mx-auto">
            <Header></Header>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;