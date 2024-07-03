/** @type {import('next').NextConfig} */
import {createRequire} from 'module';

const require = createRequire(import.meta.url);

const {i18n} = require('./next-i18next.config');

// import {i18n} from './next-i18next.config.js'

const nextConfig = {
    reactStrictMode: false,
    swcMinify: true,
    i18n,
};

export default nextConfig;
