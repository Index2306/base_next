import React from 'react';
import Image from 'next/image';

import {SvgIconPropsType} from "@/model/svgIcon";

const SvgIcon = (props: SvgIconPropsType) => {
    const {src, width = 200, height = 80} = props;

    return (
        <Image width={width} height={height} src={src} alt="loading"/>
    );
};

export default SvgIcon;