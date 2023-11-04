<template>
  <div>
    <span class="primary--text"> مشخصات خریدار </span>
    <v-card
      class="d-flex flex-wrap py-3 px-2 my-3 rounded-lg"
      color="#efe7dd"
      min-width="100%"
      max-width="100%"
      elevation="2"
    >
      <div v-if="showTinb()" class="d-flex align-center">
        <span class="pt-0 mx-3"> شناسه ملی : </span>
        <v-text-field
          v-model="$v.tinb.$model"
          class="mx-3 input"
          variant="solo-filled"
          minLength="11"
          maxLength="14"
          :error-messages="tinbErrors"
        ></v-text-field>
      </div>
      <div v-if="showBid()" class="d-flex align-center">
        <span class="pt-0 mx-3 input"
          >شناسه ملی(حقوقی), شماره ملی(حقیقی)/شناسه مشارکت مدنی/کد فراگیر اتباع
          غیر ایرانی :
        </span>
        <v-text-field
          v-model="$v.bid.$model"
          class="mx-3 input"
          variant="solo-filled"
          minLength="10"
          maxLength="12"
          :error-messages="bidErrors"
        ></v-text-field>
      </div>
      <div
        v-if="this.type === 1 && this.pattern === 5 ? true : false"
        class="d-flex align-center"
      >
        <span class="pt-0 mx-3"> شماره اشتراک/شناسه قبض بهره بردار : </span>
        <v-text-field
          v-model="$v.billid.$model"
          class="mx-3 input"
          variant="solo-filled"
          maxLength="19"
          :error-messages="billidErrors"
        ></v-text-field>
      </div>
      <div v-if="false" class="d-flex align-center">
        <span class="pt-0 mx-3"> مالیات موضوع ماده 17: </span>
        <v-text-field
          v-model="$v.tax17.$model"
          class="mx-3 input"
          variant="solo-filled"
          maxLength="19"
          :error-messages="tax17Errors"
        ></v-text-field>
      </div>

      <div v-if="false" class="d-flex align-center">
        <span class="pt-0 mx-3"> کد شعبه : </span>
        <v-text-field
          v-model="$v.bbc.$model"
          class="mx-3 input"
          variant="solo-filled"
          maxLength="10"
          :error-messages="bbcErrors"
        ></v-text-field>
      </div>
      <div v-if="false" class="d-flex align-center">
        <span class="pt-0 mx-3"> کد پستی : </span>
        <v-text-field
          v-model="$v.bpc.$model"
          class="mx-3 input"
          variant="solo-filled"
          minLength="10"
          maxLength="10"
          :error-messages="bpcErrors"
        ></v-text-field>
      </div>
      <div
        v-if="this.type === 1 && this.pattern === 6 ? true : false"
        class="d-flex align-center"
      >
        <span class="pt-0 mx-3"> نوع پرواز : </span>
        <v-text-field
          v-model="$v.ft.$model"
          class="mx-3 input"
          variant="solo-filled"
          minLength="1"
          maxLength="1"
          :error-messages="ftErrors"
        ></v-text-field>
      </div>

      <div v-if="showCap()" class="d-flex align-center">
        <span class="pt-0 mx-3"> مبلغ پرداختی نقدی : </span>
        <v-text-field
          v-model="$v.cap.$model"
          class="mx-3 input"
          variant="solo-filled"
          maxLength="18"
          :error-messages="capErrors"
        ></v-text-field>
      </div>
      <div v-if="false" class="d-flex align-center">
        <span class="pt-0 mx-3"> شماره گذرنامه : </span>
        <v-text-field
          v-model="$v.bpn.$model"
          class="mx-3 input"
          variant="solo-filled"
          minLength="9"
          maxLength="9"
          :error-messages="bpnErrors"
        ></v-text-field>
      </div>
      <div v-if="showInsp()" class="d-flex align-center">
        <span class="pt-0 mx-3"> مبلغ نسیه : </span>
        <v-text-field
          v-model="$v.insp.$model"
          class="mx-3 input"
          variant="solo-filled"
          maxLength="18"
          :error-messages="inspErrors"
        ></v-text-field>
      </div>

      <div v-if="nameTrade !== ''" class="d-flex align-center">
        <span class="pt-0 mx-3"> نام شرکت : </span>
        <span> {{ nameTrade }} </span>
      </div>
    </v-card>
  </div>
</template>

<script lang="ts">
import { panelService } from "@/http/panel";
import store from "@/store";
import Vue from "vue";
import { validationMixin } from "vuelidate";
import { required, maxLength, minLength } from "vuelidate/lib/validators";
import CheckFiscalCode from "@/Utils/fiscal/check_fiscal_code";
export default Vue.extend({
  name: "BuyerDetails",
  mixins: [validationMixin],

  data() {
    return {
      errorData: "",
      nameTrade: "",
    };
  },

  methods: {
    showTinb() {
      if (this.type === 1 && this.pattern <= 4) {
        return true;
      } else {
        return false;
      }
    },

    showBid() {
      if (
        (this.type === 1 && this.pattern === 2) ||
        (this.type === 1 && this.pattern === 6) ||
        (this.type === 1 && this.buyerType === "1") ||
        (this.type === 1 && this.buyerType === "4")
      ) {
        return true;
      } else {
        return false;
      }
    },

    showCap() {
      if (this.type === 1 && this.pattern <= 4) {
        return true;
      } else {
        return false;
      }
    },

    showInsp() {
      if (this.type === 1 && this.pattern <= 4) {
        return true;
      } else {
        return false;
      }
    },
  },

  computed: {
    type() {
      return store.state.panel.selectInvoiceType;
    },

    pattern() {
      return store.state.panel.selectPatternInvoice.id;
    },

    buyerType() {
      return store.state.panel.moadianInvoiceHeader.tob;
    },
    // tinb
    tinb: {
      get(): string {
        return store.state.panel.moadianInvoiceHeader.tinb;
      },
      set(value: number): void {
        store.dispatch("panel/setTinbInInvoice", value);

        if (
          this.tinb.toString().length >= 11 &&
          this.tinb.toString().length <= 14
        ) {
          //TODO:
          panelService
            .getEconomicCodeDetails(this.tinb.toString())
            .then((response) => {
              const data = response.data.data;
              if (data.length >= 1) {
                for (let i = 0; i <= data.length; i++) {
                  this.errorData = data[i].message;
                }
              } else {
                this.errorData = "";
                this.nameTrade = response.data.data.nameTrade;
              }
            })
            .catch((error) => {
              console.log("get economic code details error:::", error);
            });
        }
      },
    },

    // tinb errors
    tinbErrors(): string[] {
      const errors: string[] = [];
      if (!this.$v.tinb?.$dirty) {
        return errors;
      }

      !this.$v.tinb.required && errors.push("تکمیل این فیلد الزامیست");
      !this.$v.tinb.minLength &&
        errors.push("مقدار وارد شده باید حداقل 11 حرف داشته باشد");
      !this.$v.tinb.maxLength &&
        errors.push("این فیلد باید حداکثر 14 حرف داشته باشد");

      if (this.errorData !== "") {
        errors.push(this.errorData);
      }

      return errors;
    },

    // bid
    bid: {
      get(): string | null {
        return store.state.panel.moadianInvoiceHeader.bid;
      },
      set(value: number): void {
        store.dispatch("panel/setBidInInvoice", value);
      },
    },

    // bid errors
    bidErrors(): string[] {
      const errors: string[] = [];
      if (!this.$v.bid?.$dirty) {
        return errors;
      }

      !this.$v.bid.required && errors.push("تکمیل این فیلد الزامیست");
      !this.$v.bid.minLength &&
        errors.push("مقدار وارد شده باید حداقل 10 حرف داشته باشد");
      !this.$v.bid.maxLength &&
        errors.push("این فیلد باید حداکثر 10 حرف داشته باشد");

      return errors;
    },

    // billid
    billid: {
      get(): string | null {
        return store.state.panel.moadianInvoiceHeader.billid;
      },
      set(value: number): void {
        store.dispatch("panel/setBillidInInvoice", value);
      },
    },

    // billid errors
    billidErrors(): string[] {
      const errors: string[] = [];
      if (!this.$v.billid?.$dirty) {
        return errors;
      }

      !this.$v.billid.required && errors.push("تکمیل این فیلد الزامیست");
      // !this.$v.tinb.minLength &&
      //   errors.push("مقدار وارد شده باید حداقل 11 حرف داشته باشد");
      !this.$v.billid.maxLength &&
        errors.push("این فیلد باید حداکثر 19 حرف داشته باشد");

      return errors;
    },

    // tax17
    tax17: {
      get(): string {
        return store.state.panel.moadianInvoiceHeader.tax17;
      },
      set(value: number): void {
        store.dispatch("panel/setTax17InInvoice", Number(value));
      },
    },

    // tax17 errors
    tax17Errors(): string[] {
      const errors: string[] = [];
      if (!this.$v.tax17?.$dirty) {
        return errors;
      }

      // !this.$v.tax17.required && errors.push("تکمیل این فیلد الزامیست");
      // !this.$v.tax17.minLength &&
      //   errors.push("مقدار وارد شده باید حداقل 11 حرف داشته باشد");
      !this.$v.tax17.maxLength &&
        errors.push("این فیلد باید حداکثر 18 حرف داشته باشد");

      return errors;
    },

    // bbc
    bbc: {
      get(): string | null {
        return store.state.panel.moadianInvoiceHeader.bbc;
      },
      set(value: number): void {
        store.dispatch("panel/setBbcInInvoice", value);
      },
    },

    // bbc errors
    bbcErrors(): string[] {
      const errors: string[] = [];
      if (!this.$v.bbc?.$dirty) {
        return errors;
      }

      !this.$v.bbc.required && errors.push("تکمیل این فیلد الزامیست");
      // !this.$v.tinb.minLength &&
      //   errors.push("مقدار وارد شده باید حداقل 11 حرف داشته باشد");
      !this.$v.bbc.maxLength &&
        errors.push("این فیلد باید حداکثر 10 حرف داشته باشد");

      return errors;
    },

    // bpc
    bpc: {
      get(): string | null {
        return store.state.panel.moadianInvoiceHeader.bpc;
      },
      set(value: number): void {
        store.dispatch("panel/setBpcInInvoice", value);
      },
    },

    // bpc errors
    bpcErrors(): string[] {
      const errors: string[] = [];
      if (!this.$v.bpc?.$dirty) {
        return errors;
      }

      // !this.$v.bpc.required && errors.push("تکمیل این فیلد الزامیست");
      !this.$v.bpc.minLength &&
        errors.push("مقدار وارد شده باید حداقل 10 حرف داشته باشد");
      !this.$v.bpc.maxLength &&
        errors.push("این فیلد باید حداکثر 10 حرف داشته باشد");

      return errors;
    },

    // ft
    ft: {
      get(): string {
        return store.state.panel.moadianInvoiceHeader.ft;
      },
      set(value: number): void {
        store.dispatch("panel/setFtInInvoice", Number(value));
      },
    },

    // ft errors
    ftErrors(): string[] {
      const errors: string[] = [];
      if (!this.$v.ft?.$dirty) {
        return errors;
      }

      !this.$v.ft.required && errors.push("تکمیل این فیلد الزامیست");
      !this.$v.ft.minLength &&
        errors.push("مقدار وارد شده باید حداقل 1 حرف داشته باشد");
      !this.$v.ft.maxLength &&
        errors.push("این فیلد باید حداکثر 1 حرف داشته باشد");

      return errors;
    },

    // cap
    cap: {
      get(): string {
        return store.state.panel.moadianInvoiceHeader.cap;
      },
      set(value: number): void {
        store.dispatch("panel/setCapInInvoice", Number(value));
      },
    },

    capErrors(): string[] {
      const errors: string[] = [];
      if (!this.$v.cap?.$dirty) {
        return errors;
      }

      !this.$v.cap.required && errors.push("تکمیل این فیلد الزامیست");
      // !this.$v.cap.minLength &&
      //   errors.push("مقدار وارد شده باید حداقل 9 حرف داشته باشد");
      !this.$v.cap.maxLength &&
        errors.push("این فیلد باید حداکثر 18 حرف داشته باشد");

      return errors;
    },

    // bpn
    bpn: {
      get(): string | null {
        return store.state.panel.moadianInvoiceHeader.bpn;
      },
      set(value: string): void {
        store.dispatch("panel/setBpnInInvoice", value);
      },
    },

    // bpn errors
    bpnErrors(): string[] {
      const errors: string[] = [];
      if (!this.$v.bpn?.$dirty) {
        return errors;
      }

      !this.$v.bpn.required && errors.push("تکمیل این فیلد الزامیست");
      !this.$v.bpn.minLength &&
        errors.push("مقدار وارد شده باید حداقل 9 حرف داشته باشد");
      !this.$v.bpn.maxLength &&
        errors.push("این فیلد باید حداکثر 9 حرف داشته باشد");

      return errors;
    },

    // insp
    insp: {
      get(): string {
        return store.state.panel.moadianInvoiceHeader.insp;
      },
      set(value: number): void {
        store.dispatch("panel/setInspInInvoice", Number(value));
      },
    },

    inspErrors(): string[] {
      const errors: string[] = [];
      if (!this.$v.insp?.$dirty) {
        return errors;
      }

      !this.$v.insp.required && errors.push("تکمیل این فیلد الزامیست");
      // !this.$v.insp.minLength &&
      //   errors.push("مقدار وارد شده باید حداقل 9 حرف داشته باشد");
      !this.$v.insp.maxLength &&
        errors.push("این فیلد باید حداکثر 18 حرف داشته باشد");

      return errors;
    },
  },

  validations: {
    tinb: {
      required, // as
      minLength: minLength(11),
      maxLength: maxLength(14),
    },

    bid: {
      required, // as
      minLength: minLength(10),
      maxLength: maxLength(12),
    },

    billid: {
      required,
      maxLength: maxLength(19),
    },

    tax17: {
      // required,
      maxLength: maxLength(18),
    },

    bbc: {
      required, // as
      maxLength: maxLength(10),
    },

    bpc: {
      // required,
      minLength: minLength(10),
      maxLength: maxLength(10),
    },

    ft: {
      required, // as
      minLength: minLength(1),
      maxLength: maxLength(1),
    },

    cap: {
      required, // as
      maxLength: maxLength(18),
    },

    bpn: {
      required, // as
      minLength: minLength(9),
      maxLength: maxLength(9),
    },

    insp: {
      required, // as
      maxLength: maxLength(18),
    },
  },

  created() {
    panelService
      .getManageInfo()
      .then((response) => {
        response;
      })
      .catch((error) => {
        error;
      });

    CheckFiscalCode();
  },
});
</script>

<style lang="scss" scoped>
.input {
  padding-top: 0px !important;
  margin-top: 0px !important;
  font-size: 15px !important;
  height: 35px !important;
  align-items: center !important;
}
</style>