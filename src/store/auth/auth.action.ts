import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  PayloadDisabled,
  PayloadLoginType,
  PayloadRegisterType,
  PayloadTwoFactorLogin,
  PayloadVerify,
} from '~/store/auth/auth.type';
import api from '~/api';

export const loginAuthAction = createAsyncThunk(
  'auth/login',
  async (payload: PayloadLoginType, thunkAPI) => {
    try {
      const response = await api.post(`api/v1/auth/sign-in`, payload);
      return response;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err);
    }
  },
);

export const registerAuthAction = createAsyncThunk(
  'auth/signup',
  async (payload: PayloadRegisterType, thunkAPI) => {
    try {
      const { token, ...restPayload } = payload;
      const response = await api.post(`api/v1/auth/sign-up?token=${token}`, {
        ...restPayload,
      });
      return response;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err);
    }
  },
);

export const signInTwoFactorAction = createAsyncThunk(
  'auth/signin-two-factor',
  async (payload: PayloadTwoFactorLogin) => {
    const response = await api.post(`api/v1/auth/signin-two-factor`, payload);
    return response;
  },
);

export const otpGenerateAction = createAsyncThunk(
  'user/two-factor-auth/generate',
  async () => {
    const response = await api.post(`api/v1/user/two-factor-auth/generate`);
    return response;
  },
);

export const otpVerifyAction = createAsyncThunk(
  'user/two-factor-auth/verify',
  async (payload: PayloadVerify) => {
    const response = await api.post(`api/v1/user/two-factor-auth/verify`, payload);
    return response;
  },
);

export const otpDisabledAction = createAsyncThunk(
  'user/two-factor-auth/disable',
  async (payload: PayloadDisabled) => {
    const response = await api.post(`api/v1/user/two-factor-auth/disable`, payload);
    return response;
  },
);

export const createRecoveryAction = createAsyncThunk(
  'user/two-factor-auth/create-recovery',
  async () => {
    const response = await api.post(`api/v1/user/two-factor-auth/create-recovery`);
    return response;
  },
);

export const downloadRecoveryAction = createAsyncThunk(
  'user/two-factor-auth/download-recovery',
  async () => {
    const response = await api.get(`api/v1/user/two-factor-auth/download-recoveryv2`);
    return response;
  },
);

export const otpEnabledAction = createAsyncThunk(
  'user/two-factor-auth/otp-enabled',
  async () => {
    const response = await api.post(`api/v1/user/two-factor-auth/otp-enabled`);
    return response;
  },
);
