import { MutationTree } from "vuex";
import { AuthState } from "./auth.module";
import { MUTATIONS } from "@/constants/mutations";

export const AUTH_MUTATIONS: MutationTree<AuthState> = {
  // register form

  [MUTATIONS.auth.setMobileDataRegisterForm](state, value: string): void {
    state.registerForm.mobile = value;
  },
  [MUTATIONS.auth.setPasswordDataRegisterForm](state, value: string): void {
    state.registerForm.password = value;
  },
  [MUTATIONS.auth.setConfirmDataRegisterForm](state, value: string): void {
    state.registerForm.confirm = value;
  },

  //   login form

  [MUTATIONS.auth.setMobileDataLoginForm](state, value: string): void {
    state.loginForm.mobile = value;
  },
  [MUTATIONS.auth.setPasswordDataLoginForm](state, value: string): void {
    state.loginForm.password = value;
  },

  //   verify account

  [MUTATIONS.auth.setVerifyAccountData](state, value: string): void {
    state.verifyAccount.code = value;
  },

  //   resend code

  [MUTATIONS.auth.setMobileResendCodeData](state, value: string): void {
    state.resendCode.mobile = value;
  },

  // forget password

  [MUTATIONS.auth.setForgetPasswordCode](state, value: string): void {
    state.forgetPassword.code = value;
  },

  //   reset password

  [MUTATIONS.auth.setNewPasswordResetPassword](state, value: string): void {
    state.resetPassword.newPassword = value;
  },
  [MUTATIONS.auth.setConfirmResetPassword](state, value: string): void {
    state.resetPassword.confirm = value;
  },
};
