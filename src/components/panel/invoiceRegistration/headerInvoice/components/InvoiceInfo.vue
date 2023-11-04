<template>
  <v-card
    class="d-flex flex-wrap justify-space-between py-3 my-3 rounded-lg"
    color="#efe7dd"
    min-width="100%"
    max-width="100%"
    elevation="2"
  >
    <!-- first input -->
    <!-- <div class="d-flex align-center">
        <span class="pt-0 mx-3"> شماره منحصر به فرد مالیاتی: </span>
        <v-text-field
          v-model.trim="$v.taxid.$model"
          class="mx-3 input"
          variant="solo-filled"
          minLength="22"
          maxLength="22"
          :error-messages="taxidErrors"
        ></v-text-field>
      </div> -->
    <div v-if="showTob()" class="d-flex align-center mx-2 px-2">
      <v-select
        label="نوع شخص خریدار"
        v-model="$v.tob.$model"
        :value="tob"
        :items="['حقیقی', 'حقوقی', 'مشارکت مدنی', 'اتباع غیر ایرانی']"
      ></v-select>
    </div>
    <div v-if="true" class="d-flex align-center mx-2">
      <span class="pt-0 mx-3">شماره منحصر به فرد صورت حساب مرجع : </span>
      <v-text-field
        v-model="$v.irtaxid.$model"
        class="mx-3 input"
        variant="solo-filled"
        minLength="22"
        maxLength="22"
        :error-messages="irtaxidErrors"
      ></v-text-field>
    </div>
    <div v-if="false" class="d-flex align-center mx-2">
      <span class="pt-0 mx-4"> سریال صورت حساب داخلی حافظه مالیاتی : </span>
      <v-text-field
        v-model="$v.inno.$model"
        class="input"
        variant="solo-filled"
        minLength="10"
        maxLength="10"
        :error-messages="innoErrors"
      ></v-text-field>
    </div>

    <div v-if="true" class="d-flex align-center mx-2">
      <span class="pt-0 mx-3 input"
        >تاریخ و زمان ایجاد صورت حساب الکترونیکی :
      </span>

      <date-picker v-model="$v.Indati2m.$model" />
    </div>
    <div class="d-flex align-center mx-2">
      <span class="pt-0 mx-3"> تاریخ و زمان صدور صورت حساب الکترونیکی: </span>

      <date-picker v-model="$v.indatim.$model" />
    </div>
  </v-card>
</template>

<script lang="ts">
import store from "@/store";
import Vue from "vue";
import { validationMixin } from "vuelidate";
import { required, maxLength, minLength } from "vuelidate/lib/validators";
import moment from "jalali-moment";
import VuePersianDatetimePicker from "vue-persian-datetime-picker";
export default Vue.extend({
  name: "InvoiceInfo",
  mixins: [validationMixin],

  methods: {
    showTob() {
      if (this.type === 1 && this.pattern !== 7) {
        return true;
      } else {
        return false;
      }
    },
    getMoadianInvoiceBuyerSelect(buyerType: string) {
      let buyer;
      switch (buyerType) {
        case "1":
          buyer = "حقیقی";
          break;
        case "2":
          buyer = "حقوقی";
          break;
        case "3":
          buyer = "مشارکت مدنی";
          break;
        case "4":
          buyer = "اتباع غیر ایرانی";
          break;
      }

      return buyer;
    },

    moadianInvoiceBuyerSelect(buyerType: string) {
      let buyer;
      switch (buyerType) {
        case "حقیقی":
          buyer = 1;
          break;
        case "حقوقی":
          buyer = 2;
          break;
        case "مشارکت مدنی":
          buyer = 3;
          break;
        case "اتباع غیر ایرانی":
          buyer = 4;
          break;
      }

      return buyer;
    },
  },

  computed: {
    type(): number {
      return store.state.panel.selectInvoiceType;
    },
    pattern(): number {
      return store.state.panel.selectPatternInvoice.id;
    },
    // irtaxid
    irtaxid: {
      get(): string | null {
        return store.state.panel.moadianInvoiceHeader.irtaxid;
      },
      set(value: string): void {
        store.dispatch("panel/setIrtaxidInInvoice", value);
      },
    },

    // irtaxid errors
    irtaxidErrors(): string[] {
      const errors: string[] = [];
      if (!this.$v.irtaxid?.$dirty) {
        return errors;
      }

      !this.$v.irtaxid.required && errors.push("تکمیل این فیلد الزامیست");
      !this.$v.irtaxid.minLength &&
        errors.push("مقدار وارد شده باید حداقل 22 حرف داشته باشد");
      !this.$v.irtaxid.maxLength &&
        errors.push("این فیلد باید حداکثر 22 حرف داشته باشد");

      return errors;
    },

    // inno
    inno: {
      get(): string | null {
        return store.state.panel.moadianInvoiceHeader.inno;
      },
      set(value: string): void {
        store.dispatch("panel/setInnoInInvoice", value);
      },
    },

    // inno errors
    innoErrors(): string[] {
      const errors: string[] = [];
      if (!this.$v.inno?.$dirty) {
        return errors;
      }

      // !this.$v.inno.required && errors.push("تکمیل این فیلد الزامیست");
      !this.$v.inno.minLength &&
        errors.push("مقدار وارد شده باید حداقل 10 حرف داشته باشد");
      !this.$v.inno.maxLength &&
        errors.push("این فیلد باید حداکثر 10 حرف داشته باشد");

      return errors;
    },

    // indati2m
    Indati2m: {
      get(): string {
        var datetime = store.state.panel.moadianInvoiceHeader.Indati2m; // anything
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

        store.dispatch("panel/setIndati2mInInvoice", new Date(time).getTime());
      },
    },

    // Indati2m errors
    Indati2mErrors(): string[] {
      const errors: string[] = [];

      if (!this.$v.Indati2m?.$dirty) {
        return errors;
      }

      !this.$v.Indati2m.required && errors.push("تکمیل این فیلد الزامیست");
      !this.$v.Indati2m.minLength &&
        errors.push("مقدار وارد شده باید حداقل 13 حرف داشته باشد");
      !this.$v.Indati2m.maxLength &&
        errors.push("این فیلد باید حداکثر 13 حرف داشته باشد");

      return errors;
    },

    // indatim
    indatim: {
      get(): string {
        var datetime = store.state.panel.moadianInvoiceHeader.indatim; // anything
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

        store.dispatch("panel/setIndatimInInvoice", new Date(time).getTime());
      },
    },

    // indatim errors
    indatimErrors(): string[] {
      const errors: string[] = [];
      if (!this.$v.indatim?.$dirty) {
        return errors;
      }

      !this.$v.indatim.required && errors.push("تکمیل این فیلد الزامیست");
      !this.$v.indatim.minLength &&
        errors.push("مقدار وارد شده باید حداقل 13 حرف داشته باشد");
      !this.$v.indatim.maxLength &&
        errors.push("این فیلد باید حداکثر 13 حرف داشته باشد");

      return errors;
    },

    // tob
    tob: {
      get(): any {
        const buyer = this.getMoadianInvoiceBuyerSelect(
          store.state.panel.moadianInvoiceHeader.tob.toString()
        );

        return buyer;
      },
      set(value: string): void {
        store.dispatch(
          "panel/setTobInInvoice",
          this.moadianInvoiceBuyerSelect(value)
        );
      },
    },

    // tob errors
    tobErrors(): string[] {
      const errors: string[] = [];
      if (!this.$v.tob?.$dirty) {
        return errors;
      }

      !this.$v.tob.required && errors.push("تکمیل این فیلد الزامیست");

      return errors;
    },
  },

  validations: {
    irtaxid: {
      required, // as
      minLength: minLength(22),
      maxLength: maxLength(22),
    },

    inno: {
      // required,
      minLength: minLength(10),
      maxLength: maxLength(10),
    },

    Indati2m: {
      required, // as
      minLength: minLength(13),
      maxLength: maxLength(13),
    },

    indatim: {
      required,
      minLength: minLength(13),
      maxLength: maxLength(13),
    },

    tob: {
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