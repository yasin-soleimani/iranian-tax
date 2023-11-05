<template>
  <v-card color="#efe7dd" elevation="3" class="parent py-3 rounded-lg">
    <div
      class="d-flex flex-wrap parent-invoice px-0 mx-0"
      v-for="(item, index) in body"
      :key="item.index"
    >
      <div class="invoice-box ma-2 mx-2 pa-0">
        <span>شناسه کالا/خدمات</span>
        <v-text-field
          class="px-2"
          :value="body[index].sstid"
          @change="setSstidValue($event, index)"
          minLength="13"
          maxLength="13"
          :error-messages="sstidErrors"
        >
          {{ item.sstid }}
        </v-text-field>
      </div>
      <div class="invoice-box ma-2 pa-0">
        <span>شرح کالا/خدمات</span>
        <v-text-field
          class="px-2"
          :value="body[index].sstt"
          @change="setSsttValue($event, index)"
          maxLength="400"
          :error-messages="ssttErrors"
        >
          {{ item.sstt }}
        </v-text-field>
      </div>
      <div class="invoice-box ma-2 pa-0">
        <span>تعداد /مقدار</span>
        <v-text-field
          class="px-2"
          :value="body[index].am"
          @change="setAmValue($event, index)"
          :error-messages="amErrors"
        >
          {{ item.am }}
        </v-text-field>
      </div>
      <div class="invoice-box ma-2 pa-0">
        <span>واحد اندازه گیری</span>
        <v-text-field
          class="px-2"
          :value="body[index].mu"
          @change="setMuValue($event, index)"
          maxLength="8"
          :error-messages="muErrors"
        >
          {{ item.mu }}
        </v-text-field>
      </div>
      <div v-if="showNw()" class="invoice-box ma-2 pa-0">
        <span>وزن خالص</span>
        <v-text-field
          class="px-2"
          :value="body[index].nw"
          @change="setNwValue($event, index)"
          maxLength="24"
          :error-messages="nwErrors"
        >
          {{ item.nw }}
        </v-text-field>
      </div>
      <div class="invoice-box ma-2 pa-0">
        <span>مبلغ(ریال/ارز)</span>
        <v-text-field
          class="px-2"
          :value="body[index].fee"
          @change="setFeeValue($event, index)"
        >
          {{ item.fee }}
        </v-text-field>
      </div>
      <div class="invoice-box ma-2 pa-0">
        <span>مبلغ ارز</span>
        <v-text-field
          class="px-2"
          :value="body[index].cfee"
          @change="setCfeeValue($event, index)"
        >
          {{ item.cfee }}
        </v-text-field>
      </div>
      <div v-if="showCut()" class="invoice-box ma-2 pa-0">
        <span>نوع ارز</span>
        <v-text-field
          class="px-2"
          :value="body[index].cut"
          @change="setCutValue($event, index)"
        >
          {{ item.cut }}
        </v-text-field>
      </div>
      <div v-if="showExr()" class="invoice-box ma-2 pa-0">
        <span>نرخ برابری ارز با ریال</span>
        <v-text-field
          class="px-2"
          :value="body[index].exr"
          @change="setExrValue($event, index)"
          maxLength="18"
          :error-messages="exrErrors"
        >
          {{ item.exr }}
        </v-text-field>
      </div>
      <div v-if="showSsrv()" class="invoice-box ma-2 pa-0">
        <span>ارزش ریالی کالا</span>
        <v-text-field
          class="px-2"
          :value="body[index].ssrv"
          @change="setSsrvValue($event, index)"
          maxLength="18"
          :error-messages="ssrvErrors"
        >
          {{ item.ssrv }}
        </v-text-field>
      </div>
      <div v-if="showSscv()" class="invoice-box ma-2 pa-0">
        <span>ارزش ارزی کالا</span>
        <v-text-field
          class="px-2"
          :value="body[index].sscv"
          @change="setSscvValue($event, index)"
          maxLenngth="20"
          :error-messages="sscvErrors"
        >
          {{ item.sscv }}
        </v-text-field>
      </div>
      <div v-if="showPrdis()" class="invoice-box ma-2 pa-0">
        <span>مبلغ قبل از تخفیف</span>
        <v-text-field
          class="px-2"
          :value="body[index].prdis"
          @change="setPrdisValue($event, index)"
          maxLength="18"
          :error-messages="prdisErrors"
        >
          {{ item.prdis }}
        </v-text-field>
      </div>
      <div v-if="showDis()" class="invoice-box ma-2 pa-0">
        <span>مبلغ تخفیف</span>
        <v-text-field
          class="px-2"
          :value="body[index].dis"
          @change="sedivisValue($event, index)"
          maxLength="18"
          :error-messages="disErrors"
        >
          {{ item.dis }}
        </v-text-field>
      </div>
      <div v-if="showAdis()" class="invoice-box ma-2 pa-0">
        <span>مبلغ بعد از تخفیف</span>
        <v-text-field
          class="px-2"
          :value="body[index].adis"
          @change="setAdisValue($event, index)"
          maxLength="18"
          :error-messages="adisErrors"
        >
          {{ item.adis }}
        </v-text-field>
      </div>
      <div class="invoice-box ma-2 pa-0">
        <span>نرخ مالیات بر ارزش افزوده</span>
        <v-text-field
          class="px-2"
          :value="body[index].vra"
          @change="setVraValue($event, index)"
          maxLength="6"
          :error-messages="vraErrors"
        >
          {{ item.vra }}
        </v-text-field>
      </div>
      <div class="invoice-box ma-2 pa-0">
        <span>موضوع سایر مالیات,عوارض</span>
        <v-text-field
          class="px-2"
          :value="body[index].odt"
          @change="setOdtValue($event, index)"
          maxLength="255"
          :error-messages="odtErrors"
        >
          {{ item.odt }}
        </v-text-field>
      </div>
      <div class="invoice-box ma-2 pa-0">
        <span>نرخ سایر مالیات,عوارض</span>
        <v-text-field
          class="px-2"
          :value="item.odr"
          @change="setOdrValue($event, index)"
          maxLength="6"
          :error-messages="odrErrors"
        >
          {{ item.odr }}
        </v-text-field>
      </div>
      <div class="invoice-box ma-2 pa-0">
        <span>موضوع سایر وجوه قانونی</span>
        <v-text-field class="px-2" v-model="item.olt" :value="item.olt">
          {{ item.olt }}
        </v-text-field>
      </div>
      <div class="invoice-box ma-2 pa-0">
        <span>نرخ سایر وجوه قانونی</span>
        <v-text-field
          class="px-2"
          @change="setOlrValue($event, index)"
          :value="item.olr"
        >
          {{ item.olr }}
        </v-text-field>
      </div>
      <div v-if="showConsfee()" class="invoice-box ma-2 pa-0">
        <span>اجرت ساخت</span>
        <v-text-field
          class="px-2"
          @change="setConsfeeValue($event, index)"
          :value="item.consfee"
        >
          {{ item.consfee }}
        </v-text-field>
      </div>
      <div v-if="showSpro()" class="invoice-box ma-2 pa-0">
        <span>سود فروشنده</span>
        <v-text-field
          class="px-2"
          @change="setSproValue($event, index)"
          :value="item.spro"
          type="number"
        >
          {{ item.spro }}
        </v-text-field>
      </div>
      <div v-if="showBros()" class="invoice-box ma-2 pa-0">
        <span>حق العمل</span>
        <v-text-field
          class="px-2"
          @change="setBrosValue($event, index)"
          :value="item.bros"
        >
          {{ item.bros }}
        </v-text-field>
      </div>

      <div class="invoice-box ma-2 pa-0">
        <span>مبلغ مالیات بر ارزش افزوده</span>
        <v-text-field
          class="px-2"
          @change="setVamValue($event, index)"
          :value="item.vam"
        >
          {{ item.vam }}
        </v-text-field>
      </div>
      <div class="invoice-box ma-2 pa-0">
        <span>مبلغ کل کالا/خدمات</span>
        <v-text-field
          class="px-2"
          @change="setTsstamValue($event, index)"
          :value="item.tsstam"
        >
          {{ item.tsstam }}
        </v-text-field>
      </div>
      <div v-if="false" class="invoice-box ma-2 pa-0">
        <span>سهم نقدی از پرداخت</span>
        <v-text-field
          class="px-2"
          @change="setCopValue($event, index)"
          :value="item.cop"
        >
          {{ item.cop }}
        </v-text-field>
      </div>
      <div v-if="showOdam()" class="invoice-box ma-2 pa-0">
        <span>مبلغ سایر مالیات,عوارض</span>
        <v-text-field
          class="px-2"
          @change="setOdamValue($event, index)"
          :value="item.odam"
        >
          {{ item.odam }}
        </v-text-field>
      </div>

      <div v-if="showTcpbs()" class="invoice-box ma-2 pa-0">
        <span>مجموع اجرت,سود و حق العمل</span>
        <v-text-field
          class="px-2"
          @change="setTcpbsValue($event, index)"
          :value="item.tcpbs"
        >
          {{ item.tcpbs }}
        </v-text-field>
      </div>
      <div v-if="showOlam()" class="invoice-box ma-2 pa-0">
        <span>مبلغ سایر وجوه قانونی</span>
        <v-text-field
          class="px-2"
          @change="setOlamValue($event, index)"
          :value="item.olam"
        >
          {{ item.olam }}
        </v-text-field>
      </div>
      <div v-if="false" class="invoice-box ma-2 pa-0">
        <span>سهم مالیت بر ارزش افزوده از پرداخت</span>
        <v-text-field
          class="px-2"
          @change="setVopValue($event, index)"
          :value="item.vop"
        >
          {{ item.vop }}
        </v-text-field>
      </div>
      <div v-if="false" class="invoice-box ma-2 pa-0">
        <span>شناسه یکتای ثبت قرار داد حقالعمل کاری</span>
        <v-text-field
          class="px-2"
          @change="setBsrnValue($event, index)"
          :value="item.bsrn"
        >
          {{ item.bsrn }}
        </v-text-field>
      </div>
    </div>

    <v-card
      class="justify-center mx-auto tex-center my-5"
      color="transparent"
      min-width="100%"
      max-width="100%"
      elevation="0"
    >
      <v-btn
        @click="addNewInvoice()"
        class="white--text mx-1 my-2"
        color="blue"
        block
      >
        <span class="white--text">افزودن کالا جدید +</span>
        <!-- <v-icon color="info" icon="mdi-plus" size="x-large"></v-icon> -->
      </v-btn>

      <v-btn
        @click="submitInvoice()"
        class="white--text mx-1 my-2"
        color="green"
        :disabled="getInvoicesListBodyDataBeforeSubmit.length === 0"
        block
        >ثبت صورت حساب</v-btn
      >
    </v-card>
  </v-card>
</template>

<script lang="ts">
import store from "@/store";
import TadisTotal from "@/Utils/tadisTotal";
import TbillTotal from "@/Utils/tbillTotal";
import TcvTotal from "@/Utils/tcvTotal";
import TnwTotal from "@/Utils/tnwTotal";
import TodamTotal from "@/Utils/todamTotal";
import TprdisTotal from "@/Utils/tprdisTotal";
import TrvTotal from "@/Utils/trvTotal";
import TvamTotal from "@/Utils/tvamTotal";
import TvopTotal from "@/Utils/tvopTotal";
import Vue from "vue";
import { validationMixin } from "vuelidate";
import { maxLength, minLength, required } from "vuelidate/lib/validators";

export default Vue.extend({
  name: "InvoicesTableComponent",
  mixins: [validationMixin],

  data() {
    return {
      singleSelect: false,

      model: {
        sstid: "0",
        sstt: "0",
        am: "0",
        mu: "0",
        nw: "0",
        fee: "0",
        cfee: "0",
        cut: "0",
        exr: "0",
        ssrv: "0",
        sscv: "0",
        prdis: "0",
        dis: "0",
        adis: "0",
        vra: "0",
        vam: "0",
        odt: "0",
        odr: "0",
        odam: "0",
        olt: "0",
        olr: "0",
        olam: "0", // add
        consfee: "0",
        spro: "0",
        bros: "0",
        tcpbs: "0",
        cop: "0",
        tsstam: "0",
        bsrn: "0",
        vop: "0",
      },

      body: [
        {
          sstid: "0",
          sstt: "0",
          am: "0",
          mu: "0",
          nw: "0",
          fee: "0",
          cfee: "0",
          cut: "0",
          exr: "0",
          ssrv: "0",
          sscv: "0",
          prdis: "0",
          dis: "0",
          adis: "0",
          vra: "0",
          vam: "0",
          odt: "0",
          odr: "0",
          odam: "0",
          olt: "0",
          olr: "0",
          olam: "0",
          consfee: "0",
          spro: "0",
          bros: "0",
          tcpbs: "0",
          cop: "0",
          tsstam: "0",
          bsrn: "0",
          vop: "0",
        },
      ],
    };
  },

  methods: {
    addNewInvoice() {
      store.dispatch("panel/setInvoiceListBodyData", this.body[0]);
      this.body[0] = { ...this.model };
    },

    setSstidValue(event: string, index: number) {
      this.body[index].sstid = event;
      return this.body[index].sstid;
    },

    setSsttValue(event: string, index: number) {
      this.body[index].sstt = event;
      return this.body[index].sstt;
    },

    setAmValue(event: string, index: number) {
      this.body[index].am = event;
      return this.body[index].am;
    },

    setMuValue(event: string, index: number) {
      this.body[index].mu = event;
      return this.body[index].mu;
    },

    setNwValue(event: string, index: number) {
      this.body[index].nw = event;
      return this.body[index].nw;
    },

    setFeeValue(event: string, index: number) {
      this.body[index].fee = event;
      return this.body[index].fee;
    },

    setCfeeValue(event: string, index: number) {
      this.body[index].cfee = event;
      return this.body[index].cfee;
    },

    setCutValue(event: string, index: number) {
      this.body[index].cut = event;
      return this.body[index].cut;
    },

    setExrValue(event: string, index: number) {
      this.body[index].exr = event;
      return this.body[index].exr;
    },

    setSsrvValue(event: string, index: number) {
      this.body[index].ssrv = event;
      return this.body[index].ssrv;
    },

    setSscvValue(event: string, index: number) {
      this.body[index].sscv = event;
      return this.body[index].sscv;
    },

    setPrdisValue(event: string, index: number) {
      this.body[index].prdis = event;
      return this.body[index].prdis;
    },

    sedivisValue(event: string, index: number) {
      this.body[index].dis = event;
      return this.body[index].dis;
    },

    setAdisValue(event: string, index: number) {
      this.body[index].adis = event;
      return this.body[index].adis;
    },

    setVraValue(event: string, index: number) {
      this.body[index].vra = event;
      return this.body[index].vra;
    },

    setOdtValue(event: string, index: number) {
      this.body[index].odt = event;
      return this.body[index].odt;
    },

    setOdrValue(event: string, index: number) {
      this.body[index].odr = event;
      return this.body[index].odr;
    },

    setOlrValue(event: string, index: number) {
      this.body[index].olr = event;
      return this.body[index].olr;
    },

    setConsfeeValue(event: string, index: number) {
      this.body[index].consfee = event;
      return this.body[index].consfee;
    },

    setSproValue(event: string, index: number) {
      this.body[index].spro = event;
      return this.body[index].spro;
    },

    setBrosValue(event: string, index: number) {
      this.body[index].bros = event;
      return this.body[index].bros;
    },

    setBsrnValue(event: string, index: number) {
      this.body[index].bsrn = event;
      return this.body[index].bsrn;
    },

    setVamValue(event: string, index: number) {
      this.body[index].vam = event;
      return this.body[index].vam;
    },

    setTsstamValue(event: string, index: number) {
      this.body[index].tsstam = event;
      return this.body[index].tsstam;
    },

    setCopValue(event: string, index: number) {
      this.body[index].cop = event;
      return this.body[index].cop;
    },

    setOdamValue(event: string, index: number) {
      this.body[index].odam = event;
      return this.body[index].odam;
    },

    setVopValue(event: string, index: number) {
      this.body[index].vop = event;
      return this.body[index].vop;
    },

    setTcpbsValue(event: string, index: number) {
      this.body[index].tcpbs = event;
      return this.body[index].tcpbs;
    },

    setOlamValue(event: string, index: number) {
      this.body[index].olam = event;
      return this.body[index].olam;
    },

    // delete invoice

    // submit invoice

    submitInvoice() {
      store.dispatch("panel/setInvoiveLisdivata", this.body);
      TadisTotal(store.state.panel.invoiceList);
      TbillTotal(store.state.panel.invoiceList);
      // divisTotal(store.state.panel.invoiceList);
      TnwTotal(store.state.panel.invoiceList);
      TvopTotal(store.state.panel.invoiceList);
      TvamTotal(store.state.panel.invoiceList);
      TprdisTotal(store.state.panel.invoiceList);
      TrvTotal(store.state.panel.invoiceList);
      TcvTotal(store.state.panel.invoiceList);
      TodamTotal(store.state.panel.invoiceList);
      console.log("invoice body:::", this.body);
      store.dispatch("panel/callCreateNewInvoiceRequest");
    },

    // show
    showNw() {
      if (this.type === 1 && this.pattern === 7) {
        return true;
      } else {
        return false;
      }
    },

    showCut() {
      if (this.type === 1 && this.pattern === 5) {
        return false;
      } else {
        return true;
      }
    },

    showExr() {
      if (this.type === 1 && this.pattern === 5) {
        return false;
      } else {
        return true;
      }
    },

    showSsrv() {
      if (this.type === 1 && this.pattern === 7) {
        return true;
      } else {
        return false;
      }
    },

    showSscv() {
      if (this.type === 1 && this.pattern === 7) {
        return true;
      } else {
        return false;
      }
    },

    showPrdis() {
      if (
        (this.type === 1 && this.pattern === 6) ||
        (this.type === 1 && this.pattern === 7)
      ) {
        return false;
      } else {
        return true;
      }
    },

    showDis() {
      if (
        (this.type === 1 && this.pattern === 6) ||
        (this.type === 1 && this.pattern === 7)
      ) {
        return false;
      } else {
        return true;
      }
    },

    showAdis() {
      if (
        (this.type === 1 && this.pattern === 6) ||
        (this.type === 1 && this.pattern === 7)
      ) {
        return false;
      } else {
        return true;
      }
    },

    showConsfee() {
      if (
        (this.type === 1 && this.pattern === 3) ||
        (this.type === 2 && this.pattern === 2)
      ) {
        return true;
      } else {
        return false;
      }
    },

    showSpro() {
      if (
        (this.type === 1 && this.pattern === 3) ||
        (this.type === 2 && this.pattern === 2)
      ) {
        return true;
      } else {
        return false;
      }
    },

    showBros() {
      if (
        (this.type === 1 && this.pattern === 3) ||
        (this.type === 2 && this.pattern === 2)
      ) {
        return true;
      } else {
        return false;
      }
    },

    showOdam() {
      if (this.type === 1 && this.pattern === 6) {
        return false;
      } else {
        return true;
      }
    },

    showOlam() {
      if (this.type === 1 && this.pattern === 6) {
        return false;
      } else {
        return true;
      }
    },

    showTcpbs() {
      if (
        (this.type === 1 && this.pattern === 3) ||
        (this.type === 2 && this.pattern === 2)
      ) {
        return true;
      } else {
        return false;
      }
    },
  },

  computed: {
    type(): number {
      return store.state.panel.selectInvoiceType;
    },
    pattern(): number {
      return store.state.panel.selectPatternInvoice.id;
    },

    getInvoicesListBodyDataBeforeSubmit() {
      return store.state.panel.invoiceList;
    },
  },

  // computed: {
  //   // sstid
  //   sstid: {
  //     get(): number | null {
  //       return store.state.panel.MoadianInvoiceBody.sstid;
  //     },
  //     set(value: number): void {
  //       store.dispatch("panel/setSstidInInvoiceBody", value);
  //     },
  //   },

  //   // set sstid errors
  //   sstidErrors(): string[] {
  //     const errors: string[] = [];
  //     if (!this.$v.sstid?.$dirty) {
  //       return errors;
  //     }

  //     !this.$v.sstid.required && errors.push("تکمیل این فیلد الزامیست");
  //     !this.$v.sstid.minLength &&
  //       errors.push("مقدار وارد شده باید حداقل 13 حرف داشته باشد");
  //     !this.$v.sstid.maxLength &&
  //       errors.push("این فیلد باید حداکثر 13 حرف داشته باشد");

  //     return errors;
  //   },

  //   // sstt
  //   sstt: {
  //     get(): string | null {
  //       return store.state.panel.MoadianInvoiceBody.sstt;
  //     },
  //     set(value: string): void {
  //       store.dispatch("panel/setSsttInInvoiceBody", value);
  //     },
  //   },

  //   // sstt errors
  //   ssttErrors(): string[] {
  //     const errors: string[] = [];
  //     if (!this.$v.sstt?.$dirty) {
  //       return errors;
  //     }

  //     // !this.$v.sstt.required && errors.push("تکمیل این فیلد الزامیست");
  //     // !this.$v.sstid.minLength &&
  //     //   errors.push("مقدار وارد شده باید حداقل 13 حرف داشته باشد");
  //     !this.$v.sstt.maxLength &&
  //       errors.push("این فیلد باید حداکثر 14 حرف داشته باشد");

  //     return errors;
  //   },

  //   // am
  //   am: {
  //     get(): number | null {
  //       return store.state.panel.MoadianInvoiceBody.am;
  //     },
  //     set(value: number): void {
  //       store.dispatch("panel/setAmInInvoiceBody", value);
  //     },
  //   },

  //   // am errors
  //   amErrors(): string[] {
  //     const errors: string[] = [];
  //     if (!this.$v.am?.$dirty) {
  //       return errors;
  //     }
  //     // !this.$v.am.required && errors.push("تکمیل این فیلد الزامیست");
  //     // !this.$v.am.minLength &&
  //     //   errors.push("مقدار وارد شده باید حداقل 13 حرف داشته باشد");
  //     !this.$v.am.maxLength &&
  //       errors.push("این فیلد باید حداکثر 20 حرف داشته باشد");

  //     return errors;
  //   },

  //   // mu
  //   mu: {
  //     get(): number | null {
  //       return store.state.panel.MoadianInvoiceBody.mu;
  //     },
  //     set(value: number): void {
  //       store.dispatch("panel/setMuInInvoiceBody", value);
  //     },
  //   },

  //   // mu errors
  //   muErrors(): string[] {
  //     const errors: string[] = [];
  //     if (!this.$v.mu?.$dirty) {
  //       return errors;
  //     }

  //     // !this.$v.mu.required && errors.push("تکمیل این فیلد الزامیست");
  //     // !this.$v.mu.minLength &&
  //     //   errors.push("مقدار وارد شده باید حداقل 13 حرف داشته باشد");
  //     !this.$v.mu.maxLength &&
  //       errors.push("این فیلد باید حداکثر 8 حرف داشته باشد");

  //     return errors;
  //   },

  //   // nw
  //   nw: {
  //     get(): number | null {
  //       return store.state.panel.MoadianInvoiceBody.nw;
  //     },
  //     set(value: number): void {
  //       store.dispatch("panel/setNwInInvoiceBody", value);
  //     },
  //   },

  //   nwErrors(): string[] {
  //     const errors: string[] = [];
  //     if (!this.$v.nw?.$dirty) {
  //       return errors;
  //     }

  //     !this.$v.nw.required && errors.push("تکمیل این فیلد الزامیست");
  //     // !this.$v.nw.minLength &&
  //     //   errors.push("مقدار وارد شده باید حداقل 13 حرف داشته باشد");
  //     !this.$v.nw.maxLength &&
  //       errors.push("این فیلد باید حداکثر 24 حرف داشته باشد");

  //     return errors;
  //   },

  //   // prdis
  //   prdis: {
  //     get(): number | null {
  //       return store.state.panel.MoadianInvoiceBody.prdis;
  //     },
  //     set(value: number): void {
  //       store.dispatch("panel/setPrdisInInvoicebody", value);
  //     },
  //   },

  //   // prdis errors
  //   prdisErrors(): string[] {
  //     const errors: string[] = [];
  //     if (!this.$v.prdis?.$dirty) {
  //       return errors;
  //     }

  //     !this.$v.prdis.required && errors.push("تکمیل این فیلد الزامیست");
  //     // !this.$v.prdis.minLength &&
  //     //   errors.push("مقدار وارد شده باید حداقل 13 حرف داشته باشد");
  //     !this.$v.prdis.maxLength &&
  //       errors.push("این فیلد باید حداکثر 18 حرف داشته باشد");

  //     return errors;
  //   },

  //   // dis
  //   dis: {
  //     get(): number | null {
  //       return store.state.panel.MoadianInvoiceBody.dis;
  //     },
  //     set(value: number): void {
  //       store.dispatch("panel/sedivisInInvoiceBody", value);
  //     },
  //   },

  //   // dis errors
  //   disErrors(): string[] {
  //     const errors: string[] = [];
  //     if (!this.$v.dis?.$dirty) {
  //       return errors;
  //     }

  //     !this.$v.dis.required && errors.push("تکمیل این فیلد الزامیست");
  //     // !this.$v.dis.minLength &&
  //     //   errors.push("مقدار وارد شده باید حداقل 13 حرف داشته باشد");
  //     !this.$v.dis.maxLength &&
  //       errors.push("این فیلد باید حداکثر 18 حرف داشته باشد");

  //     return errors;
  //   },

  //   // vra
  //   vra: {
  //     get(): number | null {
  //       return store.state.panel.MoadianInvoiceBody.vra;
  //     },
  //     set(value: number): void {
  //       store.dispatch("panel/setVraInInvoiceBody", value);
  //     },
  //   },

  //   // vra errors
  //   vraErrors(): string[] {
  //     const errors: string[] = [];
  //     if (!this.$v.vra?.$dirty) {
  //       return errors;
  //     }

  //     !this.$v.vra.required && errors.push("تکمیل این فیلد الزامیست");
  //     // !this.$v.vra.minLength &&
  //     //   errors.push("مقدار وارد شده باید حداقل 13 حرف داشته باشد");
  //     !this.$v.vra.maxLength &&
  //       errors.push("این فیلد باید حداکثر 6 حرف داشته باشد");

  //     return errors;
  //   },

  //   // exr
  //   exr: {
  //     get(): number | null {
  //       return store.state.panel.MoadianInvoiceBody.exr;
  //     },
  //     set(value: number): void {
  //       store.dispatch("panel/setExrInInvoiceBody", value);
  //     },
  //   },

  //   exrErrors(): string[] {
  //     const errors: string[] = [];
  //     if (!this.$v.exr?.$dirty) {
  //       return errors;
  //     }

  //     !this.$v.exr.required && errors.push("تکمیل این فیلد الزامیست");
  //     // !this.$v.exr.minLength &&
  //     //   errors.push("مقدار وارد شده باید حداقل 13 حرف داشته باشد");
  //     !this.$v.exr.maxLength &&
  //       errors.push("این فیلد باید حداکثر 18 حرف داشته باشد");

  //     return errors;
  //   },

  //   // ssrv
  //   ssrv: {
  //     get(): number | null {
  //       return store.state.panel.MoadianInvoiceBody.ssrv;
  //     },
  //     set(value: number): void {
  //       store.dispatch("panel/setSsrvInInvoiceBody", value);
  //     },
  //   },

  //   // ssrv errors
  //   ssrvErrors(): string[] {
  //     const errors: string[] = [];
  //     if (!this.$v.ssrv?.$dirty) {
  //       return errors;
  //     }

  //     !this.$v.ssrv.required && errors.push("تکمیل این فیلد الزامیست");
  //     // !this.$v.ssrv.minLength &&
  //     //   errors.push("مقدار وارد شده باید حداقل 13 حرف داشته باشد");
  //     !this.$v.ssrv.maxLength &&
  //       errors.push("این فیلد باید حداکثر 18 حرف داشته باشد");

  //     return errors;
  //   },

  //   // sscv
  //   sscv: {
  //     get(): number | null {
  //       return store.state.panel.MoadianInvoiceBody.sscv;
  //     },
  //     set(value: number): void {
  //       store.dispatch("panel/setSscvInInvoiceBody", value);
  //     },
  //   },

  //   // sscv errors
  //   sscvErrors(): string[] {
  //     const errors: string[] = [];
  //     if (!this.$v.sscv?.$dirty) {
  //       return errors;
  //     }

  //     !this.$v.sscv.required && errors.push("تکمیل این فیلد الزامیست");
  //     // !this.$v.sscv.minLength &&
  //     //   errors.push("مقدار وارد شده باید حداقل 13 حرف داشته باشد");
  //     !this.$v.sscv.maxLength &&
  //       errors.push("این فیلد باید حداکثر 20 حرف داشته باشد");

  //     return errors;
  //   },

  //   // odt
  //   odt: {
  //     get(): string | null {
  //       return store.state.panel.MoadianInvoiceBody.odt;
  //     },
  //     set(value: string): void {
  //       store.dispatch("panel/setOdtInInvoiceBody", value);
  //     },
  //   },

  //   // odt errors
  //   odtErrors(): string[] {
  //     const errors: string[] = [];
  //     if (!this.$v.odt?.$dirty) {
  //       return errors;
  //     }

  //     !this.$v.odt.required && errors.push("تکمیل این فیلد الزامیست");
  //     // !this.$v.odt.minLength &&
  //     //   errors.push("مقدار وارد شده باید حداقل 13 حرف داشته باشد");
  //     !this.$v.odt.maxLength &&
  //       errors.push("این فیلد باید حداکثر 255 حرف داشته باشد");

  //     return errors;
  //   },

  //   // odr
  //   odr: {
  //     get(): number | null {
  //       return store.state.panel.MoadianInvoiceBody.odr;
  //     },
  //     set(value: number): void {
  //       store.dispatch("panel/setOdrInInvoiceBody", value);
  //     },
  //   },

  //   odrErrors(): string[] {
  //     const errors: string[] = [];
  //     if (!this.$v.odr?.$dirty) {
  //       return errors;
  //     }

  //     !this.$v.odr.required && errors.push("تکمیل این فیلد الزامیست");
  //     // !this.$v.odr.minLength &&
  //     //   errors.push("مقدار وارد شده باید حداقل 13 حرف داشته باشد");
  //     !this.$v.odr.maxLength &&
  //       errors.push("این فیلد باید حداکثر 6 حرف داشته باشد");

  //     return errors;
  //   },
  // },

  validations: {
    sstid: {
      required,
      minLength: minLength(13),
      maxLength: maxLength(13),
    },

    sstt: {
      // required,
      maxLength: maxLength(400),
    },

    am: {
      // required,
      maxLength: maxLength(20),
    },

    mu: {
      // required,
      maxLength: maxLength(8),
    },

    nw: {
      required, // as
      maxLength: maxLength(24),
    },

    prdis: {
      required, // as
      maxLength: maxLength(18),
    },

    dis: {
      required, // as
      maxLength: maxLength(18),
    },

    vra: {
      required,
      maxLength: maxLength(6),
    },

    exr: {
      required, // as
      maxLength: maxLength(18),
    },

    ssrv: {
      required, // as
      maxLength: maxLength(18),
    },

    sscv: {
      required, // as
      maxLength: maxLength(20),
    },

    odt: {
      required, // as
      maxLength: maxLength(255),
    },

    odr: {
      required, // as
      maxLength: maxLength(6),
    },
  },
});
</script>

<style lang="scss" scoped>
.invoicesTable {
  min-height: 100%;
  min-width: 100vw;
}

table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
  font-size: 15px !important;
}

div,
th {
  border: 0.5px solid #dddddd;
  text-align: center !important;
  padding: 8px;
  font-size: 15px !important;
}

tr:nth-child(even) {
  background-color: #dddddd;
}

div {
  min-width: 100px;
  max-width: 200px;
  text-align: center;
  align-items: center;
  font-size: 15px !important;
}

.index-div {
  max-width: 50px !important;
  min-width: 50px !important;
  font-size: 15px !important;
}

.parent-invoice {
  min-width: 100% !important;
}

.invoice-box ma-2 {
  // background-color: blue !important;
  min-width: 200px;
  max-width: 200px;
  text-align: right !important;
}

span {
  color: #1876d2 !important;
}

.parent {
  min-width: 100% !important;
}
</style>