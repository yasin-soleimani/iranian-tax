<template>
  <v-card
    color="#efe7dd"
    max-width="70%"
    min-height="100%"
    class="d-flex mx-auto shadow-none align-center px-2 pt-6"
    elevation="0"
  >
    <!-- text fields -->

    <v-card
      v-if="!verifyAccountForm"
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
          :error-messages="mobileErrors"
          hide-details="auto"
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
          @click="submitLoginForm"
          class="white--text py-2"
          color="#1B1A17"
          block
          :disabled="$v.$invalid"
        >
          ورود
        </v-btn>
      </div>
    </v-card>

    <!-- verify account form -->

    <verify-account-form v-if="verifyAccountForm" />
  </v-card>
</template>

<script lang="ts">
import store from "@/store";
// validation
import { validationMixin } from "vuelidate";
import Vue from "vue";
import { required, maxLength, minLength } from "vuelidate/lib/validators";
// component
import VerifyAccountForm from "@/components/auth/verifyAccount/VerifyAccountForm.component.vue";
export default Vue.extend({
  name: "LoginFormComponent",
  mixins: [validationMixin],

  components: { VerifyAccountForm },

  methods: {
    submitLoginForm(): void {
      store.dispatch("auth/submitLoginForm");
    },

    forgetPasswordRedirect() {
      // router.push({ name: "forgetPassword" });
      this.$emit("clickForgetPassword");
    },
  },

  computed: {
    // verify account from
    verifyAccountForm() {
      return store.state.auth.verifyAccountForm;
    },
    // mobile

    mobile: {
      get(): string {
        return store.state.auth.loginForm.mobile;
      },

      set(value: string): void {
        store.dispatch("auth/setMobileDataLoginForm", value);
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

    // password

    password: {
      get(): string {
        return store.state.auth.loginForm.password;
      },

      set(value: string): void {
        store.dispatch("auth/setPasswordDataLoginForm", value);
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
  },

  created() {
    // set active page for selecte request data veiryf account
    store.state.auth.activePage = "login";
  },
});
</script>

<style lang="scss" scoped>
.pointer {
  cursor: pointer;
}
</style>
