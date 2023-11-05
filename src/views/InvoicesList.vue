<template>
  <div class="mx-3 pa-3">
    <span class="text-h6">لیست صورت حساب های شما</span>
    <!-- choose the type of invoice list -->
    <type-of-invoice-list />

    <!-- show header invoices list -->
    <header-invoices-list />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TypeOfInvoiceList from "@/components/panel/invoiceList/TypeOfInvoiceList.vue";
import HeaderInvoicesList from "@/components/panel/invoiceList/HeaderInvoicesList.vue";
import store from "@/store";

export default Vue.extend({
  name: "InvoicesList",

  computed: {
    invoicesList() {
      return store.state.panel.getInvoicesList;
    },
  },

  components: { TypeOfInvoiceList, HeaderInvoicesList },
});
</script>

<style lang="scss" scoped>
</style>