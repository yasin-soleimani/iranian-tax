<template>
  <v-card
    class="mx-auto pa-2 rounded-lg overflow-auto"
    color="transparent"
    min-width="100%"
    max-width="100%"
    min-height="200px"
    max-height="85vh"
    elevation="0"
  >
    <!-- components -->
    <invoice-registration-form />
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";

// components
import InvoiceRegistrationForm from "@/components/panel/invoiceRegistration/InvoiceRegistrationForm.component.vue";

export default Vue.extend({
  name: "InvoiceRegistration",

  components: { InvoiceRegistrationForm },
});
</script>