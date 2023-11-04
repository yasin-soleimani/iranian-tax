<template>
  <v-card
    color="#efe7dd"
    max-width="70%"
    min-height="100%"
    class="d-flex mx-auto shadow-none align-center px-2 pt-6"
    elevation="0"
  >
    <!-- code fields -->

    <v-card color="#efe7dd" min-width="100%" max-width="100%" elevation="0">
      <!-- page title -->

      <div
        v-if="!showResetPassword"
        class="d-flex justify-center text-centermb-8"
      >
        <v-card-title variant="underlined">{{
          !showOtpForm ? "فراموشی رمز عبور" : "کد ارسال شده را وارد کنید"
        }}</v-card-title>
      </div>

      <!-- form input -->
      <div v-if="!showResetPassword">
        <div v-if="!showOtpForm">
          <div class="pt-2 my-3">
            <v-text-field
              label="شماره موبایل*"
              v-model.trim="$v.mobile.$model"
              variant="underlined"
              maxLength="11"
              hide-details="auto"
              :error-messages="mobileErrors"
            ></v-text-field>
          </div>

          <!-- button submit -->

          <div class="pt-6">
            <v-btn
              @click="submitMobilePhone"
              class="white--text py-2"
              color="#1B1A17"
              block
              :disabled="$v.mobile.$invalid"
            >
              ارسال شماره
            </v-btn>
          </div>
        </div>

        <!-- otp form -->

        <div v-if="showOtpForm">
          <!-- opt code -->

          <div dir="ltr">
            <v-otp-input
              v-model="$v.forgetPasswordCode.$model"
              length="6"
              type="number"
            ></v-otp-input>
          </div>

          <!-- button submit -->

          <div class="pt-6">
            <v-btn
              @click="submitOtpFormForResetPassword"
              class="white--text py-2"
              color="#1B1A17"
              block
              :disabled="$v.forgetPasswordCode.$invalid"
            >
              ارسال کد
            </v-btn>
          </div>
        </div>
      </div>

      <reset-password-form v-if="showResetPassword" />
    </v-card>
  </v-card>
</template>

<script lang="ts">
import store from "@/store";
import Vue from "vue";

// components
import ResetPasswordForm from "@/components/auth/resetPassword/ResetPassword.component.vue";

// validation
import { validationMixin } from "vuelidate";
import { required, minLength, maxLength } from "vuelidate/lib/validators";
export default Vue.extend({
  name: "ForgetPasswordFormComponent",
  mixins: [validationMixin],

  components: { ResetPasswordForm },

  methods: {
    // submit mobile phone form
    submitMobilePhone() {
      store.dispatch("auth/submitMobilePhoneForResendCode");
    },

    // submit reset password form
    submitOtpFormForResetPassword() {
      store.dispatch("auth/submitOtpFormForResetPassword");
    },
  },

  computed: {
    // showOtpForm
    showOtpForm(): boolean {
      return store.state.auth.showOtpForm;
    },

    // show reset password

    showResetPassword(): boolean {
      return store.state.auth.showResetPassword;
    },
    // mobile

    mobile: {
      get(): string {
        return store.state.auth.resendCode.mobile;
      },

      set(value: string): void {
        store.dispatch("auth/setMobileResendCodeData", value);
      },
    },

    // mobile errors
    mobileErrors(): string[] {
      const errors: string[] = [];
      if (!this.$v.mobile?.$dirty) {
        return errors;
      }

      !this.$v.mobile.required && errors.push("تکمیل این فیلد الزامیست");
      !this.$v.mobile.minLength && errors.push("موبایل وارد شده صحیح نمی باشد");
      !this.$v.mobile.maxLength && errors.push("موبایل وارد شده صحیح نمی باشد");

      return errors;
    },

    // forget password code

    forgetPasswordCode: {
      get(): string {
        return store.state.auth.forgetPassword.code;
      },

      set(value: string) {
        store.dispatch("auth/setForgetPasswordCode", value);
      },
    },

    // forget password code errors

    forgetPasswordCodeErrors(): string[] {
      const errors: string[] = [];
      if (!this.$v.forgetPasswordCode?.$dirty) {
        return errors;
      }

      !this.$v.forgetPasswordCode.required &&
        errors.push("وارد کردن کد ارسال شده الزامیست");
      !this.$v.forgetPasswordCode.minLength &&
        errors.push("کد شما حداقل 6 رقم می باشد");

      return errors;
    },
  },

  validations: {
    mobile: {
      required,
      minLength: minLength(11),
      maxLength: maxLength(11),
    },

    forgetPasswordCode: {
      required,
      minLength: minLength(6),
    },
  },

  created() {
    store.state.auth.activePage = "forgetPassword";
  },
});
</script>