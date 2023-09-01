"use client";

import React, {
    createContext,
    useContext,
    Dispatch,
    SetStateAction,
    useState,
} from "react";

interface ContextProps {
    isUserLoggedIn: boolean;
    setIsUserLoggedIn: Dispatch<SetStateAction<boolean>>;
}

const AuthContext = createContext<ContextProps>({
    isUserLoggedIn: false,
    setIsUserLoggedIn: (): boolean => false,
});

export const GlobalAuthContextProvider = ({ children }: any) => {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false);
    return (
        <AuthContext.Provider value={{ isUserLoggedIn, setIsUserLoggedIn }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useGlobalAuthContext = () => useContext(AuthContext);
