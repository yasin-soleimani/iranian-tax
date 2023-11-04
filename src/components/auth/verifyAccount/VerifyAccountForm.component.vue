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
        <v-card-title variant="underlined">تایید حساب کاربری</v-card-title>
      </div>

      <!-- opt code -->

      <div dir="ltr">
        <v-otp-input
          length="6"
          v-model="$v.verifyAccount.$model"
          type="number"
        ></v-otp-input>
      </div>

      <!-- button submit -->

      <div class="pt-6">
        <v-btn
          @click="submitVerifyAccount"
          class="white--text py-2"
          color="#1B1A17"
          block
          :disabled="$v.$invalid"
        >
          ارسال کد
        </v-btn>
      </div>
    </v-card>
  </v-card>
</template>

<script lang="ts">
import store from "@/store";
import Vue from "vue";
// validation
import { validationMixin } from "vuelidate";
import { required, minLength } from "vuelidate/lib/validators";
export default Vue.extend({
  name: "VerifyAccountComponent",
  mixins: [validationMixin],

  methods: {
    submitVerifyAccount() {
      store.dispatch("auth/submitVerifyAccount");
    },
  },

  computed: {
    // verify account

    verifyAccount: {
      get(): string {
        return store.state.auth.verifyAccount.code;
      },

      set(value: string): void {
        store.dispatch("auth/setVerifyAccountData", value);
      },
    },

    // verify account errors

    verifyAccountErrors(): string[] {
      const errors: string[] = [];
      if (!this.$v.verifyAccount?.$dirty) {
        return errors;
      }

      !this.$v.verifyAccount.required && errors.push("کد را کامل وارد کنید");
      !this.$v.verifyAccount.minLength && errors.push("کد شما حداقل 6 رقم است");

      return errors;
    },
  },

  validations: {
    verifyAccount: {
      required,
      minLength: minLength(6),
    },
  },
});
</script>