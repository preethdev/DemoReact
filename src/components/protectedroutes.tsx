import { Navigate } from "react-router-dom";
import { useIsAuthenticated } from "@azure/msal-react";
import store from "../store/store";


export const ProtectedRoute = ({ children }: any) => {
    const accountIdentifiers = {
        username: store.getState().login.username
    }
    const isAuthenticated = useIsAuthenticated(accountIdentifiers);
    console.log('authenticated' + isAuthenticated);
    if (!isAuthenticated) {
        // user is not authenticated
        return <Navigate to="/" />;
    }
    return children;
};
