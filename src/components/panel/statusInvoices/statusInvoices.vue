<template>
  <v-card
    color="#efe7dd"
    class="ma-2 pa-3 rounded-lg overflow-auto"
    min-width="100%"
    max-width="100%"
  >
    <h3 class="font-weight-medium mx-3 py-2">
      مشاهده آخرین وضعیت صورت حساب ها
    </h3>
    <v-card
      v-for="invoice in getStatusInvoicesData?.data"
      :key="invoice"
      class="ma-2 pa-3 rounded-lg overflow-auto"
      color="white"
    >
      <!-- info -->

      <div class="pa-2">
        <h4 class="font-weight-medium my-2">مشخصات صورت حساب:</h4>
      </div>

      <v-card
        class="overflow-auto rounded-lg"
        color="#efe7dd"
        elevation="1"
        max-height="350"
      >
        <div class="d-flex justify-space-around pa-2">
          <div class="d-flex my-2">
            <span>شناسه صورت حساب:</span>
            <span class="mx-2">{{
              findInvoiceInStatusList(invoice.invoice)._id
            }}</span>
          </div>
          <div class="d-flex my-2">
            <span>تاریخ ایجاد صورت حساب:</span>
            <span class="mx-2">{{
              convertToPersianDate(
                findInvoiceInStatusList(invoice.invoice).header.Indati2m
              )
            }}</span>
          </div>
          <div class="d-flex my-2">
            <span> مجموع صورت حساب:</span>
            <span class="mx-2">{{
              findInvoiceInStatusList(invoice.invoice).header.tbill + "ریال"
            }}</span>
          </div>
          <div class="d-flex my-2">
            <span> نوع صورت حساب:</span>
            <span class="mx-2 success--text">{{
              findInvoiceInStatusList(invoice.invoice).header.inty === 1
                ? "نوع اول"
                : "نوع دوم"
            }}</span>
          </div>
        </div>
      </v-card>

      <!-- error -->

      <div class="pa-2">
        <h4 class="font-weight-medium my-2">لیست خطا های صورت حساب:</h4>
      </div>

      <v-card
        class="overflow-auto rounded-lg"
        color="#efe7dd"
        elevation="1"
        max-height="350"
      >
        <div class="pa-2" v-for="item in invoice?.data?.error" :key="item">
          <div class="d-flex my-2">
            <span>موقعیت فیلد:</span>
            <span class="mx-2 primary--text">{{
              item?.position === "header" ? "سرآمد" : "بدنه"
            }}</span>
          </div>
          <div class="d-flex my-2">
            <span>متن خطا:</span>
            <span class="mx-2 error--text">{{ item?.message }}</span>
          </div>
        </div>
      </v-card>

      <!-- warning -->

      <div class="pa-2 mt-5">
        <h4 class="font-weight-medium">لیست هشدار های صورت حساب:</h4>
      </div>

      <v-card class="overflow-auto rounded-lg" elevation="1" max-height="350">
        <v-card
          color="#efe7dd"
          class="text-center py-3"
          v-if="invoice?.data?.warning.length < 1"
        >
          <span class="text-center">هیچ هشداری برای صورت حساب وجود ندارد</span>
        </v-card>
        <div class="pa-2" v-for="item in invoice?.data?.warning" :key="item">
          <div class="d-flex my-2">
            <span>موقعیت فیلد:</span>
            <span class="mx-2 primary--text">{{
              item?.position === "header" ? "سرآمد" : "بدنه"
            }}</span>
          </div>
          <div class="d-flex my-2">
            <span>متن خطا:</span>
            <span class="mx-2 error--text">{{ item?.message }}</span>
          </div>
        </div>
      </v-card>
    </v-card>
  </v-card>
</template>

<script lang="ts">
import router from "@/router";
import store from "@/store";
import moment from "jalali-moment";
import Vue from "vue";
export default Vue.extend({
  name: "statusInvoices",

  data() {
    return {};
  },

  methods: {
    findInvoiceInStatusList(invoiceId: string) {
      const findInvoice = this.getInvoicesStatusList.find(
        (element) => element._id === invoiceId
      );

      console.log("find invoice:::", findInvoice);
      if (findInvoice !== "" || findInvoice !== null) {
        return findInvoice;
      }
    },

    convertToPersianDate(time: any): any {
      const m = moment(time).locale("fa").format("YYYY/MM/DD");

      return m;
    },
  },

  computed: {
    getStatusInvoicesData() {
      return store.state.panel.statusInvoiceData;
    },

    getInvoicesStatusList() {
      return store.state.panel.invoicesItemWithId;
    },
  },

  created() {
    if (!this.getStatusInvoicesData) {
      router.push({ name: "invoicesList" });
    }
  },
});
</script>