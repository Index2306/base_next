import React from 'react';
import classNames from 'classnames/bind';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {useTranslation} from 'next-i18next';
import {Form, Input, Button, Checkbox, Row} from 'antd/lib';

import styles from './AuthContainer.module.scss';
import {regexEmail, regexPassword8to16} from '@/constants';
import {useAppDispatch} from "@/store/store";

const cx = classNames.bind(styles);

const FormSignin = () => {
    // --Dispatch--
    const dispatch = useAppDispatch();
    // --Translation--
    const {t} = useTranslation(["auth"]);

    // --Router--
    const {push, locale} = useRouter();


    const handleFinish = async (values: any) => {
        // setLoginData(values);
        //
        // dispatch(loginAuthAction(values))
        //     .then(unwrapResult)
        //     .then((data: any) => {
        //
        //     })
        //     .catch((error: any) => {
        //         notification.destroy('failed');
        //         notification.error({
        //             key: 'failed',
        //             message: error.message || t('net_work_error'),
        //         });
        //     })
        //     .finally(() => {
        //
        //     });
    };

    return (
        <>
            <Form onFinish={handleFinish} layout="vertical">
                <Form.Item
                    label={<p className={cx('custom-label')}>{t('auth.user_name')}:</p>}
                    name={'username'}
                    rules={[
                        {
                            required: true,
                            message: t('auth.user_name_is_require'),
                        },
                        {
                            pattern: regexEmail,
                            message: t('auth.incorrect_email_format'),
                        },
                    ]}
                >
                    <Input size={'large'} className={cx('custom-input')}/>
                </Form.Item>

                <Form.Item
                    label={<p className={cx('custom-label')}>{t('auth.password')}:</p>}
                    name={'password'}
                    rules={[
                        {
                            required: true,
                            message: t('auth.password_is_require'),
                        },
                    ]}
                >
                    <Input.Password size={'large'} className={cx('custom-input')}/>
                </Form.Item>

                {/*<Row justify={'space-between'} align={'middle'} style={{marginBottom: 20}}>*/}
                {/*    <Checkbox style={{margin: 0}}>{t('auth.remember_me')}</Checkbox>*/}

                {/*    <Link href={'/'} className={cx('custom-link')}>*/}
                {/*        <p>{t('auth.forgot_password')}?</p>*/}
                {/*    </Link>*/}
                {/*</Row>*/}

                <Form.Item style={{textAlign: 'center'}}>
                    <Button
                        htmlType="submit"
                        className={cx('submit-btn')}
                        size={'large'}
                        loading={false}
                        type={'primary'}
                    >
                        {t('auth.login')}
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default FormSignin;
