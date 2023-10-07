import { FaXing } from "react-icons/fa";


const Header = () => {


    return (
        <div className="flex justify-center items-center gap-2 text-orange-500">
            <FaXing className="text-3xl"></FaXing>
            <h2 className="text-4xl text-orange-500 font-bold">Menegerio</h2>
        </div>
    );
};

export default Header;