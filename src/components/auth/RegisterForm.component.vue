<template>
  <v-card
    color="#efe7dd"
    max-width="70%"
    min-height="100%"
    class="d-flex mx-auto align-center px-2 pt-6"
    elevation="0"
  >
    <!-- text fields -->
    <v-card
      v-if="!verifyAccount"
      color="#efe7dd"
      min-width="100%"
      max-width="100%"
      elevation="0"
    >
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
      <div class="pt-2 my-3">
        <v-text-field
          label="رمز عبور*"
          v-model.trim="$v.password.$model"
          variant="underlined"
          hide-details="auto"
          :error-messages="passwordErrors"
        ></v-text-field>
      </div>
      <div class="pt-2 my-3">
        <v-text-field
          label="تکرار رمز عبور*"
          v-model="$v.confirm.$model"
          variant="underlined"
          hide-details="auto"
          :error-messages="confirmErrors"
        ></v-text-field>
      </div>

      <!-- forget password -->

      <div>
        <v-card-text
          @click="forgetPasswordRedirect"
          class="font-weight-medium text-right px-0 py-6 pointer"
        >
          آیا رمز عبور خود را فراموش کرده اید؟
        </v-card-text>
      </div>

      <!-- button submit -->

      <div class="pt-6">
        <v-btn
          @click="submitRegister"
          class="white--text py-2"
          color="#1B1A17"
          block
          :disabled="$v.$invalid"
        >
          ثبت نام
        </v-btn>
      </div>
    </v-card>

    <!-- verify account component -->

    <verify-account-form v-if="verifyAccount" />
  </v-card>
</template>

<script lang="ts">
// import router from "@/router";
import store from "@/store";
import Vue from "vue";

// validation
import { validationMixin } from "vuelidate";
import { required, minLength, maxLength } from "vuelidate/lib/validators";

// components

import VerifyAccountForm from "../auth/verifyAccount/VerifyAccountForm.component.vue";
export default Vue.extend({
  name: "RegisterFormComponent",
  mixins: [validationMixin],

  // data() {
  //   return {
  //     verifyAccount: false,
  //   };
  // },

  components: { VerifyAccountForm },

  methods: {
    forgetPasswordRedirect() {
      // router.push({ name: "forgetPassword" });
      this.$emit("clickForgetPassword");
    },

    // more validation
    //TODO:
    // check validation password === confirm

    // submit form register

    submitRegister() {
      store.dispatch("auth/submitRegisterForm");
      // this.verifyAccount = true;
    },
  },

  computed: {
    // verify account
    verifyAccount() {
      return store.state.auth.verifyAccountForm;
    },

    // mobile data

    mobile: {
      get(): string {
        return store.state.auth.registerForm.mobile;
      },

      set(value: string): void {
        store.dispatch("auth/setMobileDataRegisterForm", value);
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

    // password data

    password: {
      get(): string {
        return store.state.auth.registerForm.password;
      },

      set(value: string): void {
        store.dispatch("auth/setPasswordDataRegisterForm", value);
      },
    },

    // password errors

    passwordErrors(): string[] {
      const errors: string[] = [];
      if (!this.$v.password?.$dirty) {
        return errors;
      }

      !this.$v.password.required && errors.push("تکمیل این فیلد الزامیست");
      !this.$v.password.minLength &&
        errors.push("گذرواژه شما باید حداقل 8 حرف داشته باشد");

      return errors;
    },

    // confirm data

    confirm: {
      get(): string {
        return store.state.auth.registerForm.confirm;
      },

      set(value: string): void {
        store.dispatch("auth/setConfirmDataRegisterForm", value);
      },
    },

    // confirm errors

    confirmErrors(): string[] {
      const errors: string[] = [];
      if (!this.$v.confirm?.$dirty) {
        return errors;
      }

      !this.$v.confirm.required && errors.push("تکمیل این فیلد الزامیست");
      !this.$v.confirm.minLength &&
        errors.push("تکرار گذرواژه شما باید حداقل 8 حرف داشته باشد");

      return errors;
    },
  },

  validations: {
    mobile: {
      required,
      minLength: minLength(11),
      maxLength: maxLength(11),
    },

    password: {
      required,
      minLength: minLength(8),
    },

    confirm: {
      required,
      minLength: minLength(8),
    },
  },

  created() {
    // set active page for selecte request data veiryf account
    store.state.auth.activePage = "register";
  },
});
</script>

<style lang="scss" scoped>
.pointer {
  cursor: pointer;
}
</style>