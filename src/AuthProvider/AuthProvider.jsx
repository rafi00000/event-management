import { createContext } from "react";


const AuthContext = createContext(null);
const AuthProvider = ({children}) => {

    const authInfo = {}
    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;