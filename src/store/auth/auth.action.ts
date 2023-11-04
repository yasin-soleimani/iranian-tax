import { ActionTree } from "vuex";
import { AuthState } from "./auth.module";
import store, { RootState } from "..";
import { MUTATIONS } from "@/constants/mutations";
import { authService } from "../../http/auth";
import ToggleSnackbar from "@/Utils/toggle_snackbar";
import router from "@/router";
import Token from "@/Utils/token";

export const AUTH_ACTIONS: ActionTree<AuthState, RootState> = {
  // register form {}
  // update register form mobile
  setMobileDataRegisterForm(context, value: string): void {
    context.commit(MUTATIONS.auth.setMobileDataRegisterForm, value);
  },
  // update register form password
  setPasswordDataRegisterForm(context, value: string): void {
    context.commit(MUTATIONS.auth.setPasswordDataRegisterForm, value);
  },
  // update register form confirm
  setConfirmDataRegisterForm(context, value: string): void {
    context.commit(MUTATIONS.auth.setConfirmDataRegisterForm, value);
  },

  // login form {}
  // update login form mobile
  setMobileDataLoginForm(context, value: string): void {
    context.commit(MUTATIONS.auth.setMobileDataLoginForm, value);
  },
  // update login form password
  setPasswordDataLoginForm(context, value: string): void {
    context.commit(MUTATIONS.auth.setPasswordDataLoginForm, value);
  },

  //  update verify account
  setVerifyAccountData(context, value: string): void {
    context.commit(MUTATIONS.auth.setVerifyAccountData, value);
  },

  // update forget password
  setForgetPasswordCode(context, value: string): void {
    context.commit(MUTATIONS.auth.setForgetPasswordCode, value);
  },

  // update resned code
  setMobileResendCodeData(context, value: string): void {
    context.commit(MUTATIONS.auth.setMobileResendCodeData, value);
  },

  // reset password {}
  // update reset password new password
  setNewPasswordResetPassword(context, value: string): void {
    context.commit(MUTATIONS.auth.setNewPasswordResetPassword, value);
  },
  // update reset password confirm
  setConfirmResetPassword(context, value: string): void {
    context.commit(MUTATIONS.auth.setConfirmResetPassword, value);
  },

  // submit register form

  // call request (register)
  submitRegisterForm(context): void {
    const data = context.state.registerForm;
    authService
      .register(data)
      .then((response) => {
        // set snackbar data
        ToggleSnackbar("success", response?.data.message);
        // update position page for client {}
        // update verify account form module in store
        context.state.verifyAccountForm = true;
      })
      .catch((error) => {
        // set snackbar data
        ToggleSnackbar("error", error?.response.data.message);
      });
  },

  // set data and call request (verify account)
  submitVerifyAccount(context): void {
    const verifyData = context.state.verifyAccount;
    const registerData = context.state.registerForm;
    const loginData = context.state.loginForm;
    // auto selected set data
    const data =
      context.state.activePage === "register" ? registerData : loginData;

    authService
      .verifyAccount(data, verifyData)
      .then((response) => {
        // set snackbar data
        ToggleSnackbar("success", response.data.message);

        authService
          .login(data)
          .then((response) => {
            // save token in local storage for more request
            localStorage.setItem("accessToken", response.data.data.accessToken);
            // check token exist
            const token = Token;
            if (token !== "" || token !== undefined) {
              // puth to panel
              router.push({ name: "profile" });
            }
          })
          .catch((error) => {
            // set snackbar data
            ToggleSnackbar("error", error.response.data.message);
          });
      })
      .catch((error) => {
        // set snackbar data
        ToggleSnackbar("error", error.response.data.message);
      });
  },

  // call request (login)
  submitLoginForm(context): void {
    const data = context.state.loginForm;
    authService
      .login(data)
      .then((response) => {
        // set token in localStorage
        // localStorage.setItem("accessToken", response?.data.data.accessToken);

        // set snackbar data
        ToggleSnackbar("success", response?.data.message);

        // check token exist
        const token = Token;
        if (token !== "" || token !== undefined) {
          localStorage.setItem("accessToken", response?.data.data.accessToken);

          // push to panel
          router.push({ name: "profile" });
        }
      })
      .catch((error) => {
        // check status code response error for change page (verify account => client)
        if (error.response.data.status === 401) {
          // update verify account form module in store
          store.state.auth.verifyAccountForm = true;
          // set data new constant
          const loginData = context.state.loginForm;
          authService
            .resendCode(loginData)
            .then((response) => {
              // set snackbar data
              ToggleSnackbar("success", response.data.message);
            })
            .catch((error) => {
              // set snackbar data
              ToggleSnackbar("error", error.response.data.message);
            });
        }
        // set snackbar data
        ToggleSnackbar("error", error.response.data.message);
      });
  },

  // call request (resend code)
  submitMobilePhoneForResendCode(context): void {
    // set data in new constant {}
    const resendCodeData = context.state.resendCode;
    const loginData = context.state.loginForm;
    // check position for send data to server
    const data =
      context.state.activePage === "forgetPassword"
        ? resendCodeData
        : loginData;
    authService
      .resendCode(data)
      .then((response) => {
        // set snackbar data
        ToggleSnackbar("success", response.data.message);
        // update show otp form module in store
        context.state.showOtpForm = true;
      })
      .catch((error) => {
        // set snackbar data
        ToggleSnackbar("error", error.response.data.message);
      });
  },

  // call request (verify code for reset password)
  submitOtpFormForResetPassword(context): void {
    // set data for new constant {}
    const verifyData = context.state.forgetPassword;
    const resendCodeData = context.state.resendCode;

    authService
      .verifyCode(verifyData, resendCodeData)
      .then((response) => {
        // set snackbar data
        ToggleSnackbar("success", response.data.message);
        // update show reset password module in store
        store.state.auth.showResetPassword = true;
      })
      .catch((error) => {
        // set snackbar data
        ToggleSnackbar("error", error.response.data.message);
      });
  },

  // call request (reset password)
  submitResetPasswordForm(context) {
    // create new constant for data from store {}
    const mobileData = context.state.resendCode;
    const resetPasswordData = context.state.resetPassword;
    const codeData = context.state.forgetPassword;

    authService
      .resetPassword(mobileData, resetPasswordData, codeData)
      .then((response) => {
        // set snackbar data
        ToggleSnackbar("success", response.data.message);
        // set and save token
        localStorage.setItem("accessToken", response.data.data.accessToken);
        // check token exist
        const token = Token;
        if (token !== "" || token !== undefined) {
          // push to profile page
          router.push({ name: "profile" });
        }
      })
      .catch((error) => {
        // set snackbar data
        ToggleSnackbar("error", error.response.data.message);
      });
  },
};
