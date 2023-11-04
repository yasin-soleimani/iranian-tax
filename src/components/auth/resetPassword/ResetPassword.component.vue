<template>
  <v-card
    color="#efe7dd"
    max-width="100%"
    min-height="100%"
    class="d-flex mx-auto shadow-none align-center pt-6"
    elevation="0"
  >
    <!-- code fields -->

    <v-card color="#efe7dd" min-width="100%" max-width="100%" elevation="0">
      <!-- page title -->

      <div class="d-flex justify-center text-centermb-8">
        <v-card-title variant="underlined">بازیابی رمز عبور</v-card-title>
      </div>

      <!-- reset password form -->

      <div class="pt-2 my-3">
        <v-text-field
          label="رمز عبور جدید*"
          v-model="$v.newPassword.$model"
          variant="underlined"
          hide-details="auto"
          :error-messages="newPasswordErrors"
        ></v-text-field>
      </div>

      <div class="pt-2 my-3">
        <v-text-field
          label="تکرار رمز عبور جدید*"
          v-model="$v.confirm.$model"
          variant="underlined"
          hide-details="auto"
          :error-messages="confirmErrors"
        ></v-text-field>
      </div>

      <!-- button submit -->

      <div class="pt-6">
        <v-btn
          @click="submitResetPasswordForm"
          class="white--text py-2"
          color="#1B1A17"
          block
          :disabled="$v.$invalid"
        >
          ثبت رمز عبور
        </v-btn>
      </div>
    </v-card>
  </v-card>
</template>

<script lang="ts">
import store from "@/store";
import Vue from "vue";
import { validationMixin } from "vuelidate";
import { required, minLength } from "vuelidate/lib/validators";
export default Vue.extend({
  name: "ResetPasswordComponent",
  mixins: [validationMixin],

  methods: {
    submitResetPasswordForm() {
      store.dispatch("auth/submitResetPasswordForm");
    },
  },

  computed: {
    // password

    newPassword: {
      get(): string {
        return store.state.auth.resetPassword.newPassword;
      },

      set(value: string): void {
        store.dispatch("auth/setNewPasswordResetPassword", value);
      },
    },

    // new password errors
    newPasswordErrors(): string[] {
      const errors: string[] = [];
      if (!this.$v.newPassword?.$dirty) {
        return errors;
      }

      !this.$v.newPassword.required && errors.push("تکمیل این فیلد الزامیست");
      !this.$v.newPassword.minLength &&
        errors.push("گذروازه شما باید حداقل 8 حرف داشته باشد");

      return errors;
    },

    confirm: {
      get(): string {
        return store.state.auth.resetPassword.confirm;
      },

      set(value: string): void {
        store.dispatch("auth/setConfirmResetPassword", value);
      },
    },

    // confirm password

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
    newPassword: {
      required,
      minLength: minLength(8),
    },

    confirm: {
      required,
      minLength: minLength(8),
    },
  },
});
</script>