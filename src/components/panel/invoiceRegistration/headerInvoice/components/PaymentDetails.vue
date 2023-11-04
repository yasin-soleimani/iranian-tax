<template>
  <div>
    <span class="primary--text"> مشخصات پرداخت</span>
    <v-card
      class="d-flex flex-wrap py-3 px-2 my-3 rounded-lg"
      color="#efe7dd"
      min-width="100%"
      max-width="100%"
      elevation="2"
    >
      <div v-if="false" class="d-flex align-center">
        <span class="pt-0 mx-3"> شماره سوییچ پرداخت : </span>
        <v-text-field
          v-model="$v.iinn.$model"
          class="mx-3 input"
          variant="solo-filled"
          :error-messages="iinnErrors"
        ></v-text-field>
      </div>
      <div v-if="false" class="d-flex align-center">
        <span class="pt-0 mx-3"> شماره پذیرنده فروشگاهی : </span>
        <v-text-field
          v-model="$v.acn.$model"
          class="mx-3 input"
          variant="solo-filled"
          :error-messages="acnErrors"
        ></v-text-field>
      </div>

      <div v-if="false" class="d-flex align-center">
        <span class="pt-0 mx-3">
          شماره/شناسه ملی/کد فراگیر اتباع غیر ایرانی پرداخت کننده صورتحساب :
        </span>
        <v-text-field
          v-model="$v.pid.$model"
          class="mx-3 input"
          variant="solo-filled"
          :error-messages="pidErrors"
        ></v-text-field>
      </div>

      <div class="d-flex align-center">
        <span class="pt-0 mx-3"> شماره پیگیری/شماره مرجع : </span>
        <v-text-field
          v-model="$v.trn.$model"
          class="mx-3 input"
          variant="solo-filled"
          :error-messages="trnErrors"
        ></v-text-field>
      </div>
      <div v-if="false" class="d-flex align-center">
        <span class="pt-0 mx-3"> شماره کارت پرداخت کننده صورتحساب : </span>
        <v-text-field
          v-model="$v.pcn.$model"
          class="mx-3 input"
          variant="solo-filled"
          :error-messages="pcnErrors"
        ></v-text-field>
      </div>
      <div v-if="false" class="d-flex align-center">
        <span class="pt-0 mx-3"> شماره پایانه : </span>
        <v-text-field
          v-model="$v.trmn.$model"
          class="mx-3 input"
          variant="solo-filled"
          :error-messages="trmnErrors"
        ></v-text-field>
      </div>
      <div v-if="false" class="d-flex align-center">
        <span class="pt-0 mx-3"> مبلغ پرداختی : </span>
        <v-text-field
          v-model="$v.pv.$model"
          class="mx-3 input"
          variant="solo-filled"
          :error-messages="pvErrors"
        ></v-text-field>
      </div>
      <div v-if="false" class="d-flex align-center">
        <span class="pt-0 mx-3"> تاریخ و زمان پرداخت : </span>

        <date-picker v-model="$v.pdt.$model" />
      </div>
    </v-card>
    <div class="text-center">
      <v-btn
        @click="pushNewPaymentInformation()"
        class="white--text mx-1"
        color="blue"
        :disabled="$v.trn.$invalid"
        >افزودن مشخصات پرداخت</v-btn
      >
    </div>

    <!-- show submit payment information  -->
    <v-card
      v-for="item of getPaymentInformationList"
      :key="item.id"
      class="d-flex justify-space-between py-4 px-2 my-3 rounded-lg"
      color="white"
      min-width="100%"
      max-width="100%"
      elevation="2"
    >
      <div v-if="item?.iinn" class="d-flex align-center">
        <span class="pt-0 mx-3 primary--text align-center">
          شماره سوییچ پرداخت :
        </span>
        <span class="align-center"> {{ item.iinn }} </span>
      </div>
      <div v-if="item?.acn" class="d-flex align-center">
        <span class="pt-0 mx-3 primary--text align-center">
          شماره پذیرنده فروشگاهی :
        </span>
        <span class="align-center"> {{ item.acn }} </span>
      </div>

      <div v-if="item?.pid" class="d-flex align-center">
        <span class="pt-0 mx-3 primary--text align-center">
          شماره/شناسه ملی/کد فراگیر اتباع غیر ایرانی پرداخت کننده صورتحساب :
        </span>
        <span class="align-center"> {{ item.pid }} </span>
      </div>

      <div v-if="item?.trn" class="d-flex align-center">
        <span class="pt-0 mx-3 primary--text"> شماره پیگیری/شماره مرجع : </span>
        <span class="align-center"> {{ item.trn }} </span>
      </div>
      <div v-if="item?.pcn" class="d-flex align-center">
        <span class="pt-0 mx-3 primary--text">
          شماره کارت پرداخت کننده صورتحساب :
        </span>
        <span class="align-center"> {{ item.pcn }} </span>
      </div>
      <div v-if="item?.trmn" class="d-flex align-center">
        <span class="pt-0 mx-3 primary--text"> شماره پایانه : </span>
        <span class="align-center"> {{ item.trmn }} </span>
      </div>
      <div v-if="item?.pv" class="d-flex align-center">
        <span class="pt-0 mx-3 primary--text"> مبلغ پرداختی : </span>
        <span class="align-center"> {{ item.pv }} </span>
      </div>
      <div v-if="item?.pdt" class="d-flex align-center">
        <span class="pt-0 mx-3 primary--text"> تاریخ و زمان پرداخت : </span>
        <span class="align-center"> {{ item.pdt }} </span>
      </div>
    </v-card>
  </div>
</template>

<script lang="ts">
import store from "@/store";
import Vue from "vue";
import { required } from "vuelidate/lib/validators";
import moment from "jalali-moment";
import VuePersianDatetimePicker from "vue-persian-datetime-picker";
import { validationMixin } from "vuelidate";
export default Vue.extend({
  name: "PaymentDetails",
  mixins: [validationMixin],

  methods: {
    pushNewPaymentInformation() {
      store.dispatch("panel/pushPaymentInformationToPaymentList");
    },
  },

  computed: {
    getPaymentInformationList() {
      return store.state.panel.moadianInvoicePaymentList;
    },
    // iinn
    iinn: {
      get(): string | null {
        return store.state.panel.MoadianInvoicePayment.iinn;
      },
      set(value: number): void {
        store.dispatch("panel/setIinnInInvoicePayment", value);
      },
    },

    // iinn errors
    iinnErrors(): string[] {
      const errors: string[] = [];
      if (!this.$v.iinn?.$dirty) {
        return errors;
      }

      !this.$v.iinn.required && errors.push("تکمیل این فیلد الزامیست");

      return errors;
    },

    // acn
    acn: {
      get(): string | null {
        return store.state.panel.MoadianInvoicePayment.acn;
      },
      set(value: number): void {
        store.dispatch("panel/setAcnInInvoicePayment", value);
      },
    },

    // acn errors
    acnErrors(): string[] {
      const errors: string[] = [];
      if (!this.$v.acn?.$dirty) {
        return errors;
      }

      !this.$v.acn.required && errors.push("تکمیل این فیلد الزامیست");
      // !this.$v.cap.minLength &&
      //   errors.push("مقدار وارد شده باید حداقل 9 حرف داشته باشد");
      // !this.$v.cap.maxLength &&
      //   errors.push("این فیلد باید حداکثر 18 حرف داشته باشد");

      return errors;
    },

    // pid
    pid: {
      get(): string | null {
        return store.state.panel.MoadianInvoicePayment.pid;
      },
      set(value: number): void {
        store.dispatch("panel/setPidInInvoicePayment", value);
      },
    },

    // pid errors
    pidErrors(): string[] {
      const errors: string[] = [];
      if (!this.$v.pid?.$dirty) {
        return errors;
      }

      !this.$v.pid.required && errors.push("تکمیل این فیلد الزامیست");
      // !this.$v.cap.minLength &&
      //   errors.push("مقدار وارد شده باید حداقل 9 حرف داشته باشد");
      // !this.$v.cap.maxLength &&
      //   errors.push("این فیلد باید حداکثر 18 حرف داشته باشد");

      return errors;
    },

    // trn
    trn: {
      get(): string | null {
        return store.state.panel.MoadianInvoicePayment.trn;
      },

      set(value: number): void {
        store.dispatch("panel/setTrnInInvoicePayment", value);
      },
    },

    // trn errors
    trnErrors(): string[] {
      const errors: string[] = [];
      if (!this.$v.trn?.$dirty) {
        return errors;
      }

      !this.$v.trn.required && errors.push("تکمیل این فیلد الزامیست");
      // !this.$v.cap.minLength &&
      //   errors.push("مقدار وارد شده باید حداقل 9 حرف داشته باشد");
      // !this.$v.cap.maxLength &&
      //   errors.push("این فیلد باید حداکثر 18 حرف داشته باشد");

      return errors;
    },

    // pcn
    pcn: {
      get(): string | null {
        return store.state.panel.MoadianInvoicePayment.pcn;
      },
      set(value: number): void {
        store.dispatch("panel/setPcnInInvoicePayment", value);
      },
    },

    // pcn errors
    pcnErrors(): string[] {
      const errors: string[] = [];
      if (!this.$v.pcn?.$dirty) {
        return errors;
      }

      !this.$v.pcn.required && errors.push("تکمیل این فیلد الزامیست");
      // !this.$v.cap.minLength &&
      //   errors.push("مقدار وارد شده باید حداقل 9 حرف داشته باشد");
      // !this.$v.cap.maxLength &&
      //   errors.push("این فیلد باید حداکثر 18 حرف داشته باشد");

      return errors;
    },

    // trmn
    trmn: {
      get(): string | null {
        return store.state.panel.MoadianInvoicePayment.trmn;
      },
      set(value: number): void {
        store.dispatch("panel/setTrmnInInvoicePayment", value);
      },
    },

    // trmn errors
    trmnErrors(): string[] {
      const errors: string[] = [];
      if (!this.$v.trmn?.$dirty) {
        return errors;
      }

      !this.$v.trmn.required && errors.push("تکمیل این فیلد الزامیست");
      // !this.$v.cap.minLength &&
      //   errors.push("مقدار وارد شده باید حداقل 9 حرف داشته باشد");
      // !this.$v.cap.maxLength &&
      //   errors.push("این فیلد باید حداکثر 18 حرف داشته باشد");

      return errors;
    },

    // pv
    pv: {
      get(): number | null {
        return store.state.panel.MoadianInvoicePayment.pv;
      },
      set(value: number): void {
        store.dispatch("panel/setPvInInvoicePayment", value);
      },
    },

    // pv errors
    pvErrors(): string[] {
      const errors: string[] = [];
      if (!this.$v.pv?.$dirty) {
        return errors;
      }

      !this.$v.pv.required && errors.push("تکمیل این فیلد الزامیست");
      // !this.$v.cap.minLength &&
      //   errors.push("مقدار وارد شده باید حداقل 9 حرف داشته باشد");
      // !this.$v.cap.maxLength &&
      //   errors.push("این فیلد باید حداکثر 18 حرف داشته باشد");

      return errors;
    },

    // pdt
    pdt: {
      get(): string {
        var datetime = store.state.panel.MoadianInvoicePayment.pdt; // anything
        var date = new Date(datetime);

        var result = date.toLocaleDateString("en").split("/").reverse(); // 10/29/2013
        const resultTime = result[0] + "/" + result[1] + "/" + result[2];
        const resultDate = moment(resultTime, "YYYY/MM/DD")
          .locale("fa")
          .format("YYYY/MM/DD");
        return resultDate;
      },
      set(value: string): void {
        const time = moment(value, "jYYYY/jMM/jDD").locale("en").toDate();

        store.dispatch(
          "panel/setPdtInInvoicePayment",
          new Date(time).getTime()
        );
      },
    },

    // pdt errors
    pdtErrors(): string[] {
      const errors: string[] = [];
      if (!this.$v.pdt?.$dirty) {
        return errors;
      }

      !this.$v.pdt.required && errors.push("تکمیل این فیلد الزامیست");
      // !this.$v.cap.minLength &&
      //   errors.push("مقدار وارد شده باید حداقل 9 حرف داشته باشد");
      // !this.$v.cap.maxLength &&
      //   errors.push("این فیلد باید حداکثر 18 حرف داشته باشد");

      return errors;
    },
  },

  validations: {
    iinn: {
      required,
    },

    acn: {
      required,
    },

    pid: {
      required,
    },

    trn: {
      required,
    },

    pcn: {
      required,
    },

    trmn: {
      required,
    },

    pv: {
      required,
    },

    pdt: {
      required,
    },
  },

  components: { datePicker: VuePersianDatetimePicker },
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