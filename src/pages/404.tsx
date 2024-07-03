import React from 'react'
import classNames from 'classnames/bind'
import Link from 'next/link'
import Image from 'next/image'
import {useTranslation} from 'next-i18next'
import { GetStaticProps} from 'next'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import {Result, Button} from 'antd/lib'
import {BiLeftArrow} from "react-icons/bi";

import styles from '@/styles/404.module.scss'

const cx = classNames.bind(styles)

const page404Icon = '/assets/icons/icon_break-01.svg'
const leftArrowIcon = '/assets/icons/icon_arrow-left_thin.svg'

const NotFoundPage = () => {
    const {t} = useTranslation()

    return (
        <div className={cx('page-404')}>
            <Result
                icon={
                    <div className={cx('page-404__page-icon-wrapper')}>
                        <Image src={page404Icon} width={120} height={120} alt='page_404' style={{margin: '0 auto'}}/>
                    </div>
                }
                title={<div className={cx('page-404__title-wrapper')}>404</div>}
                subTitle={
                    <div className={cx('page-404__sub-title-wrapper')}>{t('page_not_found')}</div>
                }
                extra={
                    <div className={cx('page-404__btn-wrapper')}>
                        <Link href='/'>
                            <Button
                                icon={<BiLeftArrow/>}
                            >
                                {t('back')}
                            </Button>
                        </Link>
                    </div>
                }
            />
        </div>
    )
}

export default NotFoundPage

export const getStaticProps: GetStaticProps = async ({locale}) => {
    return {
        props: {
            ...(await serverSideTranslations(locale ?? 'en', ['common'])),
        },
    }
}
