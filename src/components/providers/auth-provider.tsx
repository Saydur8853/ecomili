import { createContext } from "react";
import useAuth from "../../hooks/useAuth";

const authContext = createContext();

const AuthProvider = ({ children }) => {
    const auth = useAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

export default AuthProvider;
