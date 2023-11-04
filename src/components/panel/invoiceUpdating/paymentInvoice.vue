<template>
  <v-card class="my-3 pa-3 rounded-lg">
    <h2>Payment Invoice Page</h2>
    <div
      v-for="header of selectPattern()?.payment.fields"
      :key="header.id"
      class="invoice-box ma-2 pa-0"
    >
      <span>{{ header.title }}</span>
      <v-text-field
        class="px-2"
        v-model="getInvoiceUpdating.payment[header.key]"
        :value="getInvoiceUpdating.payment[header.key]"
      >
        <span>{{ getInvoiceUpdating.payment[header.key] }}</span>
      </v-text-field>
    </div>
  </v-card>
</template>

<script lang="ts">
import store from "@/store";
import Pattern_five from "@/Utils/patternStructure/first_invoice/pattern_five.structure";
import Pattern_four from "@/Utils/patternStructure/first_invoice/pattern_four.structure";
import Pattern_one from "@/Utils/patternStructure/first_invoice/pattern_one.structure";
import Pattern_seven from "@/Utils/patternStructure/first_invoice/pattern_seven.structure";
import Pattern_six from "@/Utils/patternStructure/first_invoice/pattern_six.structure";
import Pattern_three from "@/Utils/patternStructure/first_invoice/pattern_three.structure";
import Pattern_two from "@/Utils/patternStructure/first_invoice/pattern_two.structure";
import Pattern_one_one from "@/Utils/patternStructure/secound_invoice/pattern_one.structure";
import Pattern_two_two from "@/Utils/patternStructure/secound_invoice/pattern_two.structure";
import Vue from "vue";
export default Vue.extend({
  name: "PaymentInvoice",

  computed: {
    getInvoiceUpdating() {
      return store.state.panel.invoiceUpdating;
    },
  },

  methods: {
    selectPattern() {
      let invoicePattern = this.getInvoiceUpdating.header.inp;
      let pattern;
      if (this.getInvoiceUpdating.header.inty === 1) {
        switch (invoicePattern) {
          case 1:
            pattern = Pattern_one;
            break;
          case 2:
            pattern = Pattern_two;
            break;
          case 3:
            pattern = Pattern_three;
            break;
          case 4:
            pattern = Pattern_four;
            break;
          case 5:
            pattern = Pattern_five;
            break;
          case 6:
            pattern = Pattern_six;
            break;
          case 7:
            pattern = Pattern_seven;
            break;
        }

        return pattern;
      } else {
        switch (invoicePattern) {
          case 1:
            pattern = Pattern_one_one;
            break;
          case 2:
            pattern = Pattern_two_two;
            break;
        }

        return pattern;
      }
    },
  },
});
</script>