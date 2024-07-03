import {GetStaticProps} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

import DefaultLayout from '@/components/Layout/DefaultLayout';
import {NextPageWithLayout} from "@/model";
import {useTranslation} from "next-i18next";
import HeadAppTitle from "@/components/HeadAppTitle";

const HomePage: NextPageWithLayout = () => {
    const {t} = useTranslation()

    return (
        <>
            <HeadAppTitle title={t('home')}/>
            Home
        </>
    );
}

HomePage.Layout = DefaultLayout

export default HomePage

export const getStaticProps: GetStaticProps = async ({locale}) => {
    return {
        props: {
            ...(await serverSideTranslations(locale ?? "en", ["common"]))
        }
    }
}
