import React from 'react';
import AuthContainer from "@/components/AuthContainer";
import LoginForm from "@/components/AuthContainer/LoginForm";
import {GetStaticProps} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import HeadAppTitle from "@/components/HeadAppTitle";
import {useTranslation} from "next-i18next";

const SignIn = () => {
    const {t} = useTranslation()
    return (
        <>
            <HeadAppTitle title={t("auth.login", {ns: "auth"})}/>
            <AuthContainer title={'auth.login'}>
                <LoginForm/>
            </AuthContainer>
        </>

    );
};

export default SignIn;

export const getStaticProps: GetStaticProps = async ({locale}) => {
    return {
        props: {
            ...(await serverSideTranslations(locale ?? "en", ["common", "auth"]))
        }
    }
}