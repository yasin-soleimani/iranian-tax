import { Module } from "vuex";
import { RootState } from "..";
import { AUTH_ACTIONS } from "./auth.action";
import { AUTH_Getters } from "./auth.getter";
import { AUTH_MUTATIONS } from "./auth.mutation";

// interfaces

import { RegisterForm } from "@/interface/auth/registerForm.model";
import { LoginForm } from "@/interface/auth/loginForm.model";
import { VerifyAccount } from "@/interface/auth/verifyAccount.model";
import { ResendCode } from "@/interface/auth/resendCode.model";
import { ResetPassword } from "@/interface/auth/resetPassword.model";
import { ForgetPassword } from "@/interface/auth/forgetPassword.model";

export interface AuthState {
  // active page
  activePage: string;

  // showOtpForm forget password
  showOtpForm: boolean;
  // show reset password
  showResetPassword: boolean;
  // register models
  registerForm: RegisterForm;
  // cerify account form
  verifyAccountForm: boolean;
  // login model
  loginForm: LoginForm;
  // verify account
  verifyAccount: VerifyAccount;
  // resend code
  resendCode: ResendCode;
  // reset password
  resetPassword: ResetPassword;
  // forget password
  forgetPassword: ForgetPassword;
}

const INITIAL_AUTH: AuthState = {
  // active page
  activePage: "",

  // showOtpForm forget password
  showOtpForm: false,
  // show reset password form
  showResetPassword: false,

  // register modules

  registerForm: {
    mobile: "",
    password: "",
    confirm: "",
  },

  verifyAccountForm: false,

  // login form

  loginForm: {
    mobile: "",
    password: "",
  },

  // verify account

  verifyAccount: {
    code: "",
  },

  // resend code

  resendCode: {
    mobile: "",
  },

  // forget password

  forgetPassword: {
    mobile: "",
    code: "",
  },

  // reset password

  resetPassword: {
    newPassword: "",
    confirm: "",
  },
};

export const auth: Module<AuthState, RootState> = {
  actions: AUTH_ACTIONS,
  getters: AUTH_Getters,
  mutations: AUTH_MUTATIONS,
  state: INITIAL_AUTH,
  namespaced: true,
};
