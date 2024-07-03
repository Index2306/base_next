import React from 'react';
import classNames from 'classnames/bind';

import styles from './Layout.module.scss';
import {LayoutProps} from "@/model";

const cx = classNames.bind(styles);

const EmptyLayout = ({children}: LayoutProps) => {
    return (
        <>{children}</>
    );
};

export default EmptyLayout;