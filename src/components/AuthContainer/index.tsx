import React from 'react';
import classNames from 'classnames/bind';
import {Watermark} from 'antd/lib'

import styles from './AuthContainer.module.scss'
import {useTranslation} from "next-i18next";

type AuthContainerPropsType = {
    children: React.ReactNode;
    title: string
}

const cx = classNames.bind(styles);

const AuthContainer: React.FC<AuthContainerPropsType> = ({children, title}) => {
    const {t} = useTranslation(["auth"]);

    return (
        <Watermark content={process.env.NEXT_PUBLIC_APP_NAME}>
            <div className={cx('auth-container')}>
                <div className={cx('auth-card')}>
                    <h1 className={cx('title')}>{t(title)}</h1>
                    {children}
                </div>
            </div>
        </Watermark>

    );
};

export default AuthContainer;