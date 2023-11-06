<template>
  <div>
    <span class="primary--text">مشخصات فروشنده</span>
    <v-card
      class="d-flex flex-wrap py-3 px-2 my-3 rounded-lg"
      color="#efe7dd"
      min-width="100%"
      max-width="100%"
      elevation="2"
    >
      <div v-if="showSetm()" class="d-flex align-center mx-2">
        <v-select
          label="روش تسویه"
          v-model="$v.setm.$model"
          :value="setm"
          :items="['نقدی', 'نسیه', 'نقدی/نسیه']"
        ></v-select>
      </div>
      <div v-if="false" class="d-flex align-center mx-2 mx-2">
        <span class="pt-0 mx-3"> شماره کوتاژ اظهارنامه گمرکی : </span>
        <v-text-field
          v-model="$v.cdcn.$model"
          class="mx-3 input"
          variant="solo-filled"
          maxLength="14"
          :error-messages="cdcnErrors"
        ></v-text-field>
      </div>
      <div v-if="showCrn()" class="d-flex align-center mx-2">
        <span class="pt-0 mx-3"> شناسه یکتای ثبت قرار داد : </span>
        <v-text-field
          v-model="$v.crn.$model"
          class="mx-3 input"
          variant="solo-filled"
          maxLength="12"
          :error-messages="crnErrors"
        ></v-text-field>
      </div>
      <div v-if="false" class="d-flex align-center parent-input mx-2">
        <span class="pt-0 mx-3"> تاریخ کوتاژ اظهار نامه گمرکی : </span>

        <!-- <div>
          <date-picker v-model="$v.cdcd.$model" />
        </div> -->
      </div>

      <div v-if="false" class="d-flex align-center parent-input mx-2">
        <span class="pt-0 mx-3"> کد شعبه : </span>
        <v-text-field
          v-model="$v.sbc.$model"
          class="mx-3 input"
          variant="solo-filled"
          maxLength="10"
          :error-messages="sbcErrors"
        ></v-text-field>
      </div>

      <div class="d-flex align-center parent-input mx-2">
        <span class="pt-0 mx-3"> شناسه ملی : </span>
        <v-text-field
          v-model="$v.tins.$model"
          class="mx-3 input"
          variant="solo-filled"
          minLength="11"
          maxLength="14"
          :error-messages="tinsErrors"
          disabled
        ></v-text-field>
      </div>
      <div v-if="false" class="d-flex align-center parent-input mx-2">
        <span class="pt-0 mx-3"> شماره پروانه گمرکی : </span>
        <v-text-field
          v-model="$v.scln.$model"
          class="mx-3 input"
          variant="solo-filled"
          maxLength="14"
          :error-messages="sclnErrors"
        ></v-text-field>
      </div>
      <div v-if="false" class="d-flex align-center parent-input mx-2">
        <span class="pt-0 mx-3"> کد گمرک محل اظهار : </span>
        <v-text-field
          v-model="$v.scc.$model"
          class="mx-3 input"
          variant="solo-filled"
          minLength="5"
          maxLength="5"
          :error-messages="sccErrors"
        ></v-text-field>
      </div>
    </v-card>
  </div>
</template>

<script lang="ts">
import store from "@/store";
import Vue from "vue";
import { validationMixin } from "vuelidate";
import { required, maxLength, minLength } from "vuelidate/lib/validators";
import moment from "jalali-moment";
export default Vue.extend({
  name: "SellerDetails",
  mixins: [validationMixin],

  methods: {
    showCrn() {
      if (this.type === 1 && this.pattern === 4) {
        return true;
      } else {
        return false;
      }
    },

    showSetm() {
      if (this.type === 1 && this.pattern <= 4) {
        return true;
      } else {
        return false;
      }
    },
    setSetmInMoadianInvoice(setmType: string) {
      let setm;
      switch (setmType) {
        case "نقدی":
          setm = 1;
          break;
        case "نسیه":
          setm = 2;
          break;
        case "نقدی/نسیه":
          setm = 3;
          break;
      }

      return setm;
    },

    getSetmInMoadianInvoice(setmType: string) {
      let setm;
      switch (setmType) {
        case "1":
          setm = "نقدی";
          break;
        case "2":
          setm = "نسیه";
          break;
        case "3":
          setm = "نقدی/نسیه";
          break;
      }

      return setm;
    },
  },

  computed: {
    type() {
      return store.state.panel.selectInvoiceType;
    },

    pattern() {
      return store.state.panel.selectPatternInvoice.id;
    },

    nationalNumber() {
      return store.state.panel.baseInformation.nationalCode;
    },

    // economeNumber
    // cdcn
    cdcn: {
      get(): string | null {
        return store.state.panel.moadianInvoiceHeader.cdcn;
      },
      set(value: string): void {
        store.dispatch("panel/setCdcnInInvoice", value);
      },
    },

    // cdcn errors

    cdcnErrors(): string[] {
      const errors: string[] = [];
      if (!this.$v.cdcn?.$dirty) {
        return errors;
      }

      !this.$v.cdcn.required && errors.push("تکمیل این فیلد الزامیست");
      // !this.$v.tinb.minLength &&
      //   errors.push("مقدار وارد شده باید حداقل 11 حرف داشته باشد");
      !this.$v.cdcn.maxLength &&
        errors.push("این فیلد باید حداکثر 14 حرف داشته باشد");

      return errors;
    },

    // crn
    crn: {
      get(): string | null {
        return store.state.panel.moadianInvoiceHeader.crn;
      },
      set(value: number) {
        store.dispatch("panel/setCrnInInvoice", value);
      },
    },

    // crn errors
    crnErrors(): string[] {
      const errors: string[] = [];
      if (!this.$v.crn?.$dirty) {
        return errors;
      }

      !this.$v.crn.required && errors.push("تکمیل این فیلد الزامیست");
      // !this.$v.crn.minLength &&
      //   errors.push("مقدار وارد شده باید حداقل 22 حرف داشته باشد");
      !this.$v.crn.maxLength &&
        errors.push("این فیلد باید حداکثر 12 حرف داشته باشد");

      return errors;
    },

    // cdcd
    // cdcd: {
    //   get(): string {
    //     var datetime = store.state.panel.moadianInvoiceHeader.cdcd; // anything
    //     var date = new Date(datetime);

    //     var result = date.toLocaleDateString("en").split("/").reverse(); // 10/29/2013
    //     const resultTime = result[0] + "/" + result[1] + "/" + result[2];
    //     const resultDate = moment(resultTime, "YYYY/MM/DD")
    //       .locale("fa")
    //       .format("YYYY/MM/DD");
    //     return resultDate;
    //   },
    //   set(value: string): void {
    //     const time = moment(value, "jYYYY/jMM/jDD").locale("en").toDate();

    //     store.dispatch("panel/setCdcdInInvoice", new Date(time).getTime());
    //   },
    // },

    // cdcd errors
    cdcdErrors(): string[] {
      const errors: string[] = [];
      if (!this.$v.cdcd?.$dirty) {
        return errors;
      }

      !this.$v.cdcd.required && errors.push("تکمیل این فیلد الزامیست");
      !this.$v.cdcd.minLength &&
        errors.push("مقدار وارد شده باید حداقل 5 حرف داشته باشد");
      !this.$v.cdcd.maxLength &&
        errors.push("این فیلد باید حداکثر 5 حرف داشته باشد");

      return errors;
    },

    // setm
    setm: {
      get(): any {
        const setmType = this.getSetmInMoadianInvoice(
          store.state.panel.moadianInvoiceHeader.setm.toString()
        );
        return setmType;
      },
      set(value: string): void {
        store.dispatch(
          "panel/setSetmInInvoice",
          this.setSetmInMoadianInvoice(value)
        );
      },
    },

    // setm errors
    setmErrors(): string[] {
      const errors: string[] = [];
      if (!this.$v.setm?.$dirty) {
        return errors;
      }

      !this.$v.setm.required && errors.push("تکمیل این فیلد الزامیست");

      return errors;
    },

    // sbc
    sbc: {
      get(): string | null {
        return store.state.panel.moadianInvoiceHeader.sbc;
      },
      set(value: string): void {
        store.dispatch("panel/setSbcInInvoice", value);
      },
    },

    // sbc errors
    sbcErrors(): string[] {
      const errors: string[] = [];
      if (!this.$v.sbc?.$dirty) {
        return errors;
      }

      // !this.$v.sbc.required && errors.push("تکمیل این فیلد الزامیست");
      // !this.$v.sbc.minLength &&
      //   errors.push("مقدار وارد شده باید حداقل 22 حرف داشته باشد");
      !this.$v.sbc.maxLength &&
        errors.push("این فیلد باید حداکثر 10 حرف داشته باشد");

      return errors;
    },

    // tins
    tins: {
      get(): string | null {
        return store.state.panel.moadianInvoiceHeader.tins;
      },
      set(value: string | null): void {
        store.dispatch("panel/setTinsInInvoice", value);
      },
    },

    // tins errors
    tinsErrors(): string[] {
      const errors: string[] = [];
      if (!this.$v.tins?.$dirty) {
        return errors;
      }

      !this.$v.tins.required && errors.push("تکمیل این فیلد الزامیست");
      !this.$v.tins.minLength &&
        errors.push("مقدار وارد شده باید حداقل 11 حرف داشته باشد");
      !this.$v.tins.maxLength &&
        errors.push("این فیلد باید حداکثر 14 حرف داشته باشد");

      return errors;
    },

    // scln
    scln: {
      get(): string | null {
        return store.state.panel.moadianInvoiceHeader.scln;
      },
      set(value: number): void {
        store.dispatch("panel/setSclnInInvoice", value);
      },
    },

    sclnErrors(): string[] {
      const errors: string[] = [];
      if (!this.$v.scln?.$dirty) {
        return errors;
      }

      !this.$v.scln.required && errors.push("تکمیل این فیلد الزامیست");
      // !this.$v.scln.minLength &&
      //   errors.push("مقدار وارد شده باید حداقل 11 حرف داشته باشد");
      !this.$v.scln.maxLength &&
        errors.push("این فیلد باید حداکثر 14 حرف داشته باشد");

      return errors;
    },

    // scc
    scc: {
      get(): string | null {
        return store.state.panel.moadianInvoiceHeader.scc;
      },
      set(value: number): void {
        store.dispatch("panel/setSccInInvoice", value);
      },
    },

    // scc errors

    sccErrors(): string[] {
      const errors: string[] = [];
      if (!this.$v.scc?.$dirty) {
        return errors;
      }

      !this.$v.scc.required && errors.push("تکمیل این فیلد الزامیست");
      !this.$v.scc.minLength &&
        errors.push("مقدار وارد شده باید حداقل 5 حرف داشته باشد");
      !this.$v.scc.maxLength &&
        errors.push("این فیلد باید حداکثر 5 حرف داشته باشد");

      return errors;
    },
  },

  validations: {
    cdcn: {
      required, // as
      maxLength: maxLength(14),
    },

    crn: {
      required, // as
      maxLength: maxLength(12),
    },

    cdcd: {
      required, // as
      minLength: minLength(5),
      maxLength: maxLength(5),
    },

    setm: {
      required,
    },

    sbc: {
      // required,
      maxLength: maxLength(10),
    },

    tins: {
      required,
      minLength: minLength(11),
      maxLength: maxLength(14),
    },

    scln: {
      required, // as
      maxLength: maxLength(14),
    },

    scc: {
      required, // as
      minLength: minLength(5),
      maxLength: maxLength(5),
    },
  },

  created() {
    store.dispatch("panel/setTinsInInvoice", this.nationalNumber);
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