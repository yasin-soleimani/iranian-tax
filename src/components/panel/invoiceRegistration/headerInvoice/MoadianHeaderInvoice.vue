<template>
  <div>
    <!-- invoice info -->
    <invoice-info />

    <!-- seller details -->
    <seller-details />

    <!-- buyer details -->
    <buyer-details v-if="getInvoiceType === 1" />

    <!-- invoice calculation -->
    <invoice-calculation />

    <!-- payment details -->
    <payment-details />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import InvoiceInfo from "@/components/panel/invoiceRegistration/headerInvoice/components/InvoiceInfo.vue";
import SellerDetails from "@/components/panel/invoiceRegistration/headerInvoice/components/SellerDetails.vue";
import BuyerDetails from "@/components/panel/invoiceRegistration/headerInvoice/components/BuyerDetails.vue";
import InvoiceCalculation from "@/components/panel/invoiceRegistration/headerInvoice/components/InvoiceCalculation.vue";
import PaymentDetails from "@/components/panel/invoiceRegistration/headerInvoice/components/PaymentDetails.vue";
import store from "@/store";
export default Vue.extend({
  name: "MoadianHeaderInvoice",

  computed: {
    getInvoiceType(): number {
      return store.state.panel.selectInvoiceType;
    },
  },

  components: {
    InvoiceInfo,
    SellerDetails,
    BuyerDetails,
    InvoiceCalculation,
    PaymentDetails,
  },
});
</script>