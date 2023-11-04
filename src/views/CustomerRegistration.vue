<template>
  <v-card class="mx-auto" color="transparent" max-width="90%" elevation="0">
    <!-- component -->

    <customer-registration-form />
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";

// components

import CustomerRegistrationForm from "@/components/panel/customerRegistration/customerRegistrationForm.component.vue";

export default Vue.extend({
  name: "CustomerRegistrationPage",

  components: { CustomerRegistrationForm },
});
</script>