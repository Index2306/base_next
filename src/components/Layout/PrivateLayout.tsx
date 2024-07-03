import React, {useEffect} from 'react';
import {LayoutProps} from "@/model";

const PrivateLayout = ({children}: LayoutProps) => {

    useEffect(() => {
        //Check token
    }, []);

    return (
        <>
            {children}
        </>
    );
};

export default PrivateLayout;