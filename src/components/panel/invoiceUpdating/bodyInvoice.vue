<template>
  <v-card color="#efe7dd" class="my-3 pa-3 rounded-lg">
    <div class="overflow-x-auto">
      <v-table>
        <thead>
          <tr>
            <th
              v-for="header of selectPattern().body.fields"
              :key="header.key"
              class="th text-center"
            >
              {{ header.title }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="tr text-center"
            v-for="item in getInvoiceUpdating?.body"
            :key="item.id"
          >
            <td
              class="td text-center"
              v-for="head of selectPattern().body.fields"
              :key="head.id"
            >
              <v-text-field
                class="px-2"
                v-model="item[head.key]"
                :value="item[head.key]"
              >
                <span>{{ item[head.key] }}</span>
              </v-text-field>
            </td>
            <!-- <td class="text-center">
              <v-text-field
                class="px-2"
                v-model="getInvoiceUpdating.header[header.key]"
                :value="getInvoiceUpdating.header[header.key]"
              >
                <span>{{ getInvoiceUpdating.header[header.key] }}</span>
              </v-text-field>
            </td> -->
          </tr>
        </tbody>
      </v-table>
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
  name: "BodyInvoice",

  computed: {
    getInvoiceUpdating() {
      return store.state.panel.invoiceUpdating;
    },

    // sstid
    sstid: {
      get(): number {
        return store.state.panel.invoiceUpdating.body.sstid;
      },
      set(value: number): void {
        store.dispatch("panel/updateSstidBodyOfInvoiceUpdating", value);
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

<style lang="scss" scoped>
.th {
  min-width: 180px !important;
  max-width: 180px !important;
}

.tr {
  height: 50px;
  border: 2px solid teal !important;
}
</style>