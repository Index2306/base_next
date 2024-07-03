import React from "react";
import {appWithTranslation} from "next-i18next";
import {ConfigProvider} from "antd/lib";

import "@/styles/globals.scss";
import AppLoading from "@/components/AppLoading";
import EmptyLayout from "@/components/Layout/EmptyLayout";
import HeadAppTitle from "@/components/HeadAppTitle";
import StoreProviders from "@/store/StoreProviders";
import {ANT_THEME} from "@/constants";
import {AppPropsWithLayout} from "@/model";
import AppContextProvider from "@/context/AppContext/AppContextProvider";
import PrivateLayout from "@/components/Layout/PrivateLayout";

const App = ({Component, pageProps}: AppPropsWithLayout) => {
    const Layout = Component.Layout ?? EmptyLayout;

    return (
        <main>
            <StoreProviders>
                <HeadAppTitle title={''}/>
                <ConfigProvider theme={ANT_THEME}>
                    <AppContextProvider>
                        <PrivateLayout>
                            <Layout>
                                <AppLoading/>
                                <Component {...pageProps} />
                            </Layout>
                        </PrivateLayout>
                    </AppContextProvider>
                </ConfigProvider>
            </StoreProviders>
        </main>
    );

}


export default appWithTranslation(App)