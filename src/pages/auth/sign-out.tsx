import React, {useEffect} from 'react';
import {useRouter} from "next/router";
import AppLoading from "@/components/AppLoading";
import {useAppContext} from "@/context/AppContext";

const SignOut = () => {
    const {push} = useRouter()
    const {setLoading} = useAppContext()

    useEffect(() => {
        push('/sign-in').then(() => {
            setLoading(false)
        })
    }, []);

    return (
        <div>
            <AppLoading/>
        </div>
    );
};

export default SignOut;