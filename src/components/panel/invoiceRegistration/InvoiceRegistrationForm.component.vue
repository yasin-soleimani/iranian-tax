<template>
  <v-card
    class="pa-0 pa-3 rounded-lg"
    color="transparent"
    min-width="100%"
    max-width="500px"
    elevation="0"
  >
    <div class="d-flex">
      <span> صورت حساب الکترونیکی </span>
      <span class="mx-2 primary--text"
        >({{ getInvoiceType === 1 ? "نوع اول" : "نوع دوم" }})</span
      >

      <span class="mx-2 primary--text">({{ getInvoicePattern.title }})</span>
    </div>

    <!-- moadian header invoice -->
    <moadian-header-invoice />

    <!-- moadian body invoice -->

    <!-- invoices list before submit (send to database) -->

    <invoices-list-before-submit
      v-if="getInvoicesListBeforeSubmit.length > 0"
    />

    <span class="primary--text">مشخصات کالا یا خدمات مورد معامله</span>
    <invoices-table-component class="mt-5" />
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";

// components
import InvoicesTableComponent from "@/components/panel/invoiceRegistration/InvoicesTable.component.vue";
import store from "@/store";
import { InvoicePattern } from "@/interface/panel/invoicePattern";
import MoadianHeaderInvoice from "@/components/panel/invoiceRegistration/headerInvoice/MoadianHeaderInvoice.vue";
import router from "@/router";
import InvoicesListBeforeSubmit from "@/components/panel/invoiceRegistration/bodyInvoice/InvoicesListBeforeSubmit.vue";

export default Vue.extend({
  name: "InvoiceRegistrationComponent",

  computed: {
    getInvoiceType(): number {
      return store.state.panel.selectInvoiceType;
    },

    getInvoicePattern(): InvoicePattern {
      return store.state.panel.selectPatternInvoice;
    },

    getInvoicesListBeforeSubmit() {
      return store.state.panel.invoiceList;
    },
  },

  created() {
    if (this.getInvoiceType === null || this.getInvoiceType === 0) {
      router.push({ name: "selectInvoiceType" });
    }
  },

  components: {
    InvoicesTableComponent,
    MoadianHeaderInvoice,
    InvoicesListBeforeSubmit,
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

span {
  font-size: 15px !important;
}
</style>