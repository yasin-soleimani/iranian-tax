<template>
  <v-card color="transparent" class="ma-2 pa-3 rounded-lg" elevation="0">
    <span class="ma-2 pt-5">سرآمد صورت حساب</span>
    <!-- header invoice updating -->
    <header-invoice />

    <!-- <span class="ma-2 pt-5">مشخصات پرداخت صورت حساب</span> -->

    <!-- payment invoice updating -->
    <!-- <payment-invoice /> -->

    <span class="ma-2 pt-5">بدنه صورت حساب</span>

    <!-- body invoice updating -->

    <body-invoice />

    <div class="text-center my-3">
      <v-btn @click="submitInvoiceUpdatingForm()" color="success"
        >اعمال ویرایش</v-btn
      >
    </div>
  </v-card>
</template>

<script lang="ts">
import router from "@/router";
import store from "@/store";
import Vue from "vue";
import HeaderInvoice from "@/components/panel/invoiceUpdating/headerInvoice.vue";
// import PaymentInvoice from "@/components/panel/invoiceUpdating/paymentInvoice.vue";
import BodyInvoice from "@/components/panel/invoiceUpdating/bodyInvoice.vue";
export default Vue.extend({
  name: "InvoiceUpdating",

  methods: {
    submitInvoiceUpdatingForm() {
      store.dispatch("panel/sendUpdatedInvoice");
    },
  },

  computed: {
    getInvoiceUpdating() {
      return store.state.panel.invoiceUpdating;
    },
  },

  created() {
    if (this.getInvoiceUpdating === null) {
      router.push({ name: "invoicesList" });
    }
  },

  components: { HeaderInvoice, BodyInvoice },
});
</script>