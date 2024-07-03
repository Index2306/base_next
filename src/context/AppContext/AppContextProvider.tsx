import React, {ReactNode, useState} from 'react';
import {ContextProvider} from "@/context/AppContext/index";

const AppContextProvider = ({children}: { children: ReactNode }) => {
    const [loading, setLoading] = useState(false);

    const valueContext = {
        loading,
        setLoading
    }

    return (
        <ContextProvider value={valueContext}>
            {children}
        </ContextProvider>
    );
};

export default AppContextProvider;