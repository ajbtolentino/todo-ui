import { useState } from "react";
import { AuthContext } from "./authContext";

export const AuthContextProvider: React.FC<{}> = (props) => {
    const [authenticated, setAuthenticated] = useState<boolean>(false);
    
    const login = () => {
        setAuthenticated(true);
    };

    return (
        <AuthContext.Provider value={{
            authenticated: authenticated,
            login: login
        }}>
            {props.children}
        </AuthContext.Provider>
    );
}