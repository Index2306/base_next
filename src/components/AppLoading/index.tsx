import React, {useEffect} from 'react';
import classNames from 'classnames/bind';
import {useRouter} from "next/router";

import {svgIconSrc} from "@/assets";
import styles from './AppLoading.module.scss';
import SvgIcon from "@/components/SvgIcon/LoadingSvg";
import {useAppContext} from "@/context/AppContext";

const cx = classNames.bind(styles);

const AppLoading = () => {
    const router = useRouter()

    const {loading, setLoading} = useAppContext()

    useEffect(() => {
        const handleRouteChange = (url: any) => {
            if (setLoading) setLoading(true)
            return
        }

        const handleRouteComplete = (url: any) => {
            if (setLoading) setLoading(false)
            return
        }

        router.events.on('routeChangeStart', handleRouteChange)
        router.events.on('routeChangeComplete', handleRouteComplete) // If the component is unmounted, unsubscribe

        // from the event with the `off` method:
        return () => {
            router.events.off('routeChangeStart', handleRouteChange)
            router.events.off('routeChangeComplete', handleRouteComplete)
        }
    }, [setLoading])

    if (!loading) return null;

    return (
        <div className={cx('app-loading')}>
            <div className={cx('loading-block')}>
                <SvgIcon src={svgIconSrc.loading}/>
            </div>
        </div>
    );
};

export default AppLoading;