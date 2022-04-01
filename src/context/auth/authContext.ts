import React from "react";

interface IAuthContext {
    authenticated: boolean;
    login?: () => void;
};

export const AuthContext = React.createContext<IAuthContext>({
    authenticated: false
});