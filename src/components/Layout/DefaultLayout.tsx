import React from 'react';
import classNames from 'classnames/bind';

import styles from './Layout.module.scss';
import {LayoutProps} from "@/model";

const cx = classNames.bind(styles);

const DefaultLayout = ({children}: LayoutProps) => {
    return (
        <div className={cx('layout-wrapper')}>
            {children}
        </div>
    );
};

export default DefaultLayout;