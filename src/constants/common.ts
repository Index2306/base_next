import {ThemeConfig} from "antd/lib";

export const GLOBAL = {
    PRIMARY_COLOR: '#4a4948',
    FONTS: `BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`,
} as const

export const ANT_THEME: ThemeConfig = {
    token: {
        // fontFamily: GLOBAL.FONTS,
        colorPrimary: GLOBAL.PRIMARY_COLOR,
    }
}