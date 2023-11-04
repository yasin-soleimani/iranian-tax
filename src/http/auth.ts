import axiosUtil from "@/Utils/axios.util";
import { AxiosResponse } from "axios";
import API from "@/constants/api";
import { RegisterForm } from "@/interface/auth/registerForm.model";
import { VerifyAccount } from "@/interface/auth/verifyAccount.model";
import { LoginForm } from "@/interface/auth/loginForm.model";
import { ResendCode } from "@/interface/auth/resendCode.model";
import { ResetPassword } from "@/interface/auth/resetPassword.model";

// register request
async function register(data: RegisterForm): Promise<AxiosResponse> {
  const url = API.auth.register;
  const body = {
    mobile: data.mobile,
    password: data.password,
  };

  return axiosUtil.post(url, body);
}

// verify account request
async function verifyAccount(
  data: RegisterForm | LoginForm,
  verifyData: VerifyAccount
): Promise<AxiosResponse> {
  const url = API.auth.verifyAccount;
  const body = {
    mobile: data.mobile,
    password: data.password,
    code: verifyData.code,
  };

  return axiosUtil.post(url, body);
}

// login request
async function login(data: LoginForm): Promise<AxiosResponse> {
  const url = API.auth.login;
  const body = {
    mobile: data.mobile,
    password: data.password,
  };

  return axiosUtil.post(url, body);
}

// resend code request

async function resendCode(data: ResendCode): Promise<AxiosResponse> {
  const url = API.auth.resendCode;
  const body = {
    mobile: data.mobile,
  };

  return axiosUtil.post(url, body);
}

// verify code for forget password

async function verifyCode(
  verifyCode: VerifyAccount,
  resendCode: ResendCode
): Promise<AxiosResponse> {
  const url = API.auth.verifyCode;
  const body = {
    mobile: resendCode.mobile,
    code: verifyCode.code,
  };

  return axiosUtil.post(url, body);
}

async function resetPassword(
  mobileData: ResendCode,
  resetPasswordData: ResetPassword,
  codeData: VerifyAccount
): Promise<AxiosResponse> {
  const url = API.auth.resetPassword;
  const body = {
    mobile: mobileData.mobile,
    password: resetPasswordData.newPassword,
    code: codeData.code,
  };

  return axiosUtil.post(url, body);
}

export const authService = {
  register,
  verifyAccount,
  login,
  resendCode,
  verifyCode,
  resetPassword,
};
