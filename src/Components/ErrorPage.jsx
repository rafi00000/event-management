import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <div className="flex h-screen items-center justify-center">
            <div className="text-center space-y-7">
                <h1 className="font-bold text-center">Something went wrong</h1>
                <button className="btn btn-outline " onClick={()=> navigate('/')}>Go Home</button>
            </div>
            
        </div>
    );
};

export default ErrorPage;