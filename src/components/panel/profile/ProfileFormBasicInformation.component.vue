<template>
  <v-card class="px-4 py-3" color="#efe7dd" min-width="100%" min-height="200px">
    <div class="d-flex">
      <!-- first card -->
      <v-card class="py-3 px-8" color="#efe7dd" min-width="50%" elevation="0">
        <div class="pt-2">
          <v-text-field
            label="نام شرکت*"
            v-model="$v.companyName.$model"
            variant="underlined"
            :error-messages="companyNameErrors"
          ></v-text-field>
        </div>
        <div class="pt-2">
          <v-text-field
            label="شماره ثبت*"
            v-model="$v.registrationNumber.$model"
            variant="underlined"
            :error-messages="registrationNumberErrors"
          ></v-text-field>
        </div>
        <div class="pt-2">
          <v-text-field
            label="کد حافظه مالیاتی*"
            v-model="$v.taxMemoryCode.$model"
            variant="underlined"
            :error-messages="taxMemoryCodeErrors"
          ></v-text-field>
        </div>
      </v-card>

      <!-- secound card -->

      <v-card class="py-3 px-8" color="#efe7dd" min-width="50%" elevation="0">
        <div class="pt-2">
          <v-text-field
            label="شناسه ملی*"
            v-model="$v.nationalId.$model"
            variant="underlined"
            :error-messages="nationalIdErrors"
          ></v-text-field>
        </div>
        <div class="pt-2">
          <v-text-field
            label="شناسه اقتصادی*"
            v-model="$v.ecoonomicalNumber.$model"
            variant="underlined"
            :error-messages="ecoonomicalNumberErrors"
          ></v-text-field>
        </div>
        <div class="pt-2">
          <v-text-field
            label="شناسه رمز گذاری*"
            v-model="$v.encryptionId.$model"
            variant="underlined"
            :error-messages="encryptionIdErrors"
          ></v-text-field>
        </div>
      </v-card>
    </div>

    <!-- file uploader -->

    <v-card
      class="d-flex align-center px-8"
      color="#efe7dd"
      max-width="400px"
      elevation="0"
    >
      <v-card-text class="font-weight-medium text-right px-0 py-6">
        آپلود فایل کلید خصوصی*
      </v-card-text>
      <v-btn outlined color="#735F32" variant="text" type="button"
        >آپلود فایل
        <v-file-input v-model="private_key" counter></v-file-input>
      </v-btn>
    </v-card>

    <!-- button submit form -->
    <div class="my-3 px-8">
      <v-btn
        @click="submitBaseInformationForm"
        class="white--text py-5"
        color="black"
        type="button"
        block
        :disabled="$v.$invalid"
      >
        ثبت اطلاعات
      </v-btn>
    </div>
  </v-card>
</template>

<script lang="ts">
import store from "@/store";
import Vue from "vue";
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";
export default Vue.extend({
  name: "ProfileFormComponent",
  mixins: [validationMixin],

  data() {
    return {
      private_key: "",
    };
  },

  methods: {
    // call request
    submitBaseInformationForm() {
      console.log("private key:::", this.private_key);

      store.state.panel.privateKeyFile = this.private_key;
      store.dispatch("panel/submitBaseInformationForm", this.private_key);
    },
  },

  computed: {
    // company name
    companyName: {
      get(): string {
        return store.state.panel.baseInformation.companyName;
      },

      set(value: string): void {
        store.dispatch("panel/setCompanyNameOfBaseInformation", value);
      },
    },

    // company name errors

    companyNameErrors(): string[] {
      const errors: string[] = [];
      if (!this.$v.companyName?.$dirty) {
        return errors;
      }

      // chack validation
      !this.$v.companyName.required && errors.push("تگمیل این فیلد الزامیست");

      return errors;
    },

    // registration number

    registrationNumber: {
      get(): string {
        return store.state.panel.baseInformation.regNumber;
      },

      set(value: string): void {
        store.dispatch("panel/setRegistrationNumberOfBaseInformation", value);
      },
    },

    // registrationNumber errors

    registrationNumberErrors(): string[] {
      const errors: string[] = [];
      if (!this.$v.registrationNumber?.$dirty) {
        return errors;
      }

      // chack validation
      !this.$v.registrationNumber.required &&
        errors.push("تکمیل این فیلد الزامیست");

      return errors;
    },

    // tax memory code

    taxMemoryCode: {
      get(): string {
        return store.state.panel.baseInformation.memoryCode;
      },

      set(value: string): void {
        store.dispatch("panel/setTaxMemoryCodeOfBaseInformation", value);
      },
    },

    // taxMemoryCode errors

    taxMemoryCodeErrors(): string[] {
      const errors: string[] = [];
      if (!this.$v.taxMemoryCode?.$dirty) {
        return errors;
      }

      // chack validation
      !this.$v.taxMemoryCode.required && errors.push("تکمیل این فیلد الزامیست");

      return errors;
    },

    // national id

    nationalId: {
      get(): string {
        return store.state.panel.baseInformation.nationalCode;
      },

      set(value: string): void {
        store.dispatch("panel/setNationalIdOfBaseInformation", value);
      },
    },

    // nationalId errors

    nationalIdErrors(): string[] {
      const errors: string[] = [];
      if (!this.$v.nationalId?.$dirty) {
        return errors;
      }

      // check validation
      !this.$v.nationalId.required && errors.push("تکمیل این فیلد الزامیست");

      return errors;
    },

    // ecoonomical number

    ecoonomicalNumber: {
      get(): string {
        return store.state.panel.baseInformation.economicCode;
      },

      set(value: string): void {
        store.dispatch("panel/setEcoonomicalNumberOfBaseInformation", value);
      },
    },

    // ecoonomicalNumber errors

    ecoonomicalNumberErrors(): string[] {
      const errors: string[] = [];
      if (!this.$v.ecoonomicalNumber?.$dirty) {
        return errors;
      }

      // chack validation
      !this.$v.ecoonomicalNumber.required &&
        errors.push("تکمیل این فیلد الزامیست");

      return errors;
    },

    // encryption id

    encryptionId: {
      get(): string {
        return store.state.panel.baseInformation.encriptionKeyId;
      },

      set(value: string): void {
        store.dispatch("panel/setEncryptionIdOfBaseInformation", value);
      },
    },

    // encryptionId errors

    encryptionIdErrors(): string[] {
      const errors: string[] = [];
      if (!this.$v.encryptionId?.$dirty) {
        return errors;
      }

      // check validation
      !this.$v.encryptionId.required && errors.push("تکمیل این فیلد الزامیست");

      return errors;
    },
  },

  // condition all validation

  validations: {
    companyName: {
      required,
    },

    registrationNumber: {
      required,
    },

    taxMemoryCode: {
      required,
    },

    nationalId: {
      required,
    },

    ecoonomicalNumber: {
      required,
    },

    encryptionId: {
      required,
    },
  },

  created(): void {
    // call request
    store.dispatch("panel/submitGetProfileInformation");
    store.dispatch("panel/submitGetManageInfo");
  },
});
</script>