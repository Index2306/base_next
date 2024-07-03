import { STATUS_STORE_TYPE } from '../../store/store';

export type InitAuthStateType = {
  data: null;
  statusAuthAction: STATUS_STORE_TYPE;
  token: string;
  otp: OtpSettings;
};

export type OtpSettings = {
  /**
   * Whether or not OTP is enabled.
   */
  enabled?: boolean;
  /**
   * Whether or not OTP is verified.
   */
  readonly verified?: boolean;
  /**
   * The date and time when the recovery codes were downloaded.
   */
  readonly recoveryCodesDownloadedAt?: string;

  enabledStatus?: STATUS_STORE_TYPE;

  recoveryStatus?: STATUS_STORE_TYPE;
};

export type TwoFactorType = 1 | 2;

export type PayloadLoginType = {
  username: string;
  password: string;
};

export type PayloadRegisterType = PayloadLoginType & {
  firstName: string;
  lastName: string;
  confirmPassword: string;
  company: string
  country: string
  token: string
}

export type PayloadVerify = {
  token: string;
};

export type PayloadDisabled = PayloadVerify;

export type PayloadTwoFactorLogin = {
  token: string;
  twoFactorType: TwoFactorType;
  recovery: any;
  userName: any;
  password: any;
};
