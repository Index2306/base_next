import Cookies from 'js-cookie';
import { createSlice } from '@reduxjs/toolkit';
import {
  loginAuthAction,
  otpDisabledAction,
  otpEnabledAction,
  otpGenerateAction,
  otpVerifyAction,
  registerAuthAction,
  signInTwoFactorAction,
} from './auth.action';
import { InitAuthStateType } from '~/store/auth/auth.type';
import { STATUS_FULFILLED, STATUS_PENDING, STATUS_REJECTED } from '~/store/store';
import { CookiesKey } from '~/contants/auth';
import { storageRemove } from '~/helper/storage';
import { StorageKey } from '~/contants';
import { cookieSet } from '~/helper';

const initialState: InitAuthStateType = {
  data: null,
  statusAuthAction: '',
  token: '',
  otp: {
    enabled: false,
    verified: false,
    enabledStatus: '',
    recoveryStatus: '',
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logoutAction: (state) => {
      state.data = null;
      // delete data from cookie
      // Cookies.remove('refreshToken');
      Cookies.remove(CookiesKey.TOKEN);
      Cookies.remove(CookiesKey.EXPIRES);
      Cookies.remove(CookiesKey.USER);
      storageRemove(StorageKey.TOKEN);
      storageRemove('converterStatus');
    },
    clearStateAuth: (state) => {
      state.data = null;
      state.statusAuthAction = '';
      state.token = '';
    },
    controlStatusAuth: (state, { payload }) => {
      state.statusAuthAction = payload;
    },
  },
  extraReducers: (builder) => {
    //=============== LOGIN ========================
    builder
      .addCase(loginAuthAction.pending, (state) => {
        state.statusAuthAction = STATUS_PENDING;
      })
      .addCase(loginAuthAction.fulfilled, (state, { payload }: any) => {
        state.statusAuthAction = STATUS_FULFILLED;
        state.data = payload.data.result.user;
        const otpEnable = payload.data.result.otpEnable;

        if (!otpEnable) {
          cookieSet(CookiesKey.TOKEN, payload.data.result.accessToken);
          // cookieSet(CookiesKey.REFRESH_TOKEN, payload.data.result.refresh_token);
          cookieSet(CookiesKey.EXPIRES, payload.data.result.exp);
          cookieSet(CookiesKey.USER, JSON.stringify(payload.data.result.user));
        }
      })
      .addCase(loginAuthAction.rejected, (state, { error }: any) => {
        state.statusAuthAction = STATUS_REJECTED;
      });

    //=========== Register ===========
    builder
      .addCase(registerAuthAction.pending, (state) => {
        state.statusAuthAction = STATUS_PENDING;
      })
      .addCase(registerAuthAction.fulfilled, (state) => {
        state.statusAuthAction = STATUS_FULFILLED;
      })
      .addCase(registerAuthAction.rejected, (state) => {
        state.statusAuthAction = STATUS_REJECTED;
      });

    //=========== OTP ================
    builder
      .addCase(signInTwoFactorAction.pending, (state) => {
        state.statusAuthAction = STATUS_PENDING;
      })
      .addCase(signInTwoFactorAction.fulfilled, (state, { payload }: any) => {
        state.statusAuthAction = STATUS_FULFILLED;
        state.data = payload.data.result.user;
        const otpEnable = payload.data.result.otpEnable;

        if (otpEnable) {
          Cookies.set(CookiesKey.TOKEN, payload.data.result.accessToken);
          // Cookies.set(CookiesKey.REFRESH_TOKEN, payload.data.result.refresh_token);
          Cookies.set(CookiesKey.EXPIRES, payload.data.result.exp);
          Cookies.set(CookiesKey.USER, JSON.stringify(payload.data.result.user));
          Cookies.set(CookiesKey.OTP_ENABLED, JSON.stringify(otpEnable));
        }
      })
      .addCase(signInTwoFactorAction.rejected, (state, { error }: any) => {
        state.statusAuthAction = STATUS_REJECTED;
      });

    builder
      .addCase(otpGenerateAction.pending, (state) => {
      })
      .addCase(otpGenerateAction.fulfilled, (state, { payload }: any) => {
      })
      .addCase(otpGenerateAction.rejected, (state, { error }: any) => {
      });

    builder
      .addCase(otpVerifyAction.pending, (state) => {
        state.otp.enabledStatus = STATUS_PENDING;
      })
      .addCase(otpVerifyAction.fulfilled, (state, { payload }: any) => {
        state.otp.enabledStatus = STATUS_FULFILLED;
      })
      .addCase(otpVerifyAction.rejected, (state, { error }: any) => {
        state.otp.enabledStatus = STATUS_REJECTED;
      });

    builder
      .addCase(otpEnabledAction.pending, (state) => {
        state.otp.recoveryStatus = STATUS_PENDING;
      })
      .addCase(otpEnabledAction.fulfilled, (state, { payload }: any) => {
        state.otp.recoveryStatus = STATUS_FULFILLED;
        state.otp.enabled = true;
        Cookies.set(CookiesKey.OTP_ENABLED, JSON.stringify(true));
      })
      .addCase(otpEnabledAction.rejected, (state, { error }: any) => {
        state.otp.recoveryStatus = STATUS_REJECTED;
      });

    builder
      .addCase(otpDisabledAction.pending, (state) => {
        state.statusAuthAction = STATUS_PENDING;
      })
      .addCase(otpDisabledAction.fulfilled, (state, { payload }: any) => {
        state.statusAuthAction = STATUS_FULFILLED;
        state.otp.enabled = false;
        Cookies.set(CookiesKey.OTP_ENABLED, JSON.stringify(false));
      })
      .addCase(otpDisabledAction.rejected, (state, { error }: any) => {
        state.statusAuthAction = STATUS_REJECTED;
      });
  },
});

export const selectAuth = (state: any) => state.auth;

export const { logoutAction, controlStatusAuth, clearStateAuth } = authSlice.actions;

export default authSlice.reducer;
