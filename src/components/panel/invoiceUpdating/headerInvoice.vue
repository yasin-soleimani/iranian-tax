<template>
  <v-card
    color="#efe7dd"
    class="d-flex flex-wrap justify-space-between my-3 pa-3 rounded-lg"
  >
    <div
      v-for="header of selectPattern()?.header.fields"
      :key="header.id"
      class="invoice-box ma-2 pa-0"
    >
      <span>{{ header.title }}</span>
      <v-text-field
        class="px-2"
        v-model="getInvoiceUpdating.header[header.key]"
        :value="getInvoiceUpdating.header[header.key]"
      >
        <span>{{ getInvoiceUpdating.header[header.key] }}</span>
      </v-text-field>
    </div>
  </v-card>
</template>

<script lang="ts">
import store from "@/store";
import Vue from "vue";
import Pattern_five from "@/Utils/patternStructure/first_invoice/pattern_five.structure";
import Pattern_four from "@/Utils/patternStructure/first_invoice/pattern_four.structure";
import Pattern_one from "@/Utils/patternStructure/first_invoice/pattern_one.structure";
import Pattern_seven from "@/Utils/patternStructure/first_invoice/pattern_seven.structure";
import Pattern_six from "@/Utils/patternStructure/first_invoice/pattern_six.structure";
import Pattern_three from "@/Utils/patternStructure/first_invoice/pattern_three.structure";
import Pattern_two from "@/Utils/patternStructure/first_invoice/pattern_two.structure";
import Pattern_one_one from "@/Utils/patternStructure/secound_invoice/pattern_one.structure";
import Pattern_two_two from "@/Utils/patternStructure/secound_invoice/pattern_two.structure";
export default Vue.extend({
  name: "HeaderInvoice",

  computed: {
    getInvoiceUpdating() {
      return store.state.panel.invoiceUpdating;
    },

    // irtaxid
    tinb: {
      get(): string {
        return store.state.panel.invoiceUpdating.tinb;
      },
      set(value: string): void {
        store.dispatch("panel/updateTinbOfInvoiceUpdating", value);
      },
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