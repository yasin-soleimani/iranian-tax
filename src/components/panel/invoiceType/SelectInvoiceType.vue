<template>
  <div class="px-2">
    <div class="ma-4">
      <span class="text-h6">انتخاب نوع صورت حساب</span>
    </div>

    <v-card
      color="transparent"
      class="d-flex justify-space-around mt-5 rounded-lg"
      max-width="1500px"
      elevation="0"
    >
      <v-card
        class="d-flex justify-space-between"
        color="transparent"
        min-width="60%"
        max-width="60%"
        elevation="0"
      >
        <v-btn
          @click="selectInvoiceTypeValue(1)"
          class="py-6 ml-5"
          min-width="300px"
          max-width="300px"
          :color="invoiceType === 1 ? '#735F32' : '#efe7dd'"
          variant="text"
          type="button"
        >
          <span :class="invoiceType === 1 ? 'white--text' : 'black--text'"
            >صورت حساب نوع اول</span
          >
        </v-btn>
        <v-btn
          @click="selectInvoiceTypeValue(2)"
          class="py-6 ml-5"
          min-width="300px"
          max-width="300px"
          :color="invoiceType === 2 ? '#735F32' : '#efe7dd'"
          variant="text"
          type="button"
        >
          <span :class="invoiceType === 2 ? 'white--text' : 'black--text'"
            >صورت حساب نوع دوم</span
          >
        </v-btn>
      </v-card>
      <!-- <v-sheet
          @click="selectInvoiceTypeValue(1)"
          class="sheet ma-2 text-center pointer"
          :elevation="4"
          :height="80"
          :width="500"
          border
          :color="invoiceType === 1 ? 'success' : 'white'"
          rounded
        >
          <span :class="invoiceType === 1 ? 'white--text' : 'black--text'"
            >صورت حساب نوع اول</span
          >
        </v-sheet>
      </div>
      <div>
        <v-sheet
          @click="selectInvoiceTypeValue(2)"
          class="sheet ma-2 text-center"
          :elevation="4"
          :height="80"
          :width="500"
          border
          :color="invoiceType === 2 ? 'success' : 'white'"
          rounded
        >
          <span :class="invoiceType === 2 ? 'white--text' : 'black--text'"
            >صورت حساب نوع دوم</span
          >
        </v-sheet>
      </div> -->
    </v-card>

    <!-- select invoice pattern title -->

    <div v-if="invoiceType !== 0" class="ma-4">
      <span class="text-h6">انتخاب الگو صورت حساب</span>
    </div>

    <!-- select invoice pattern for invoice type 1 -->

    <v-card
      v-if="invoiceType === 1"
      color="transparent"
      class="d-flex justify-space-around mt-5"
      max-width="1500px"
      elevation="0"
    >
      <div v-for="item of patternListOfFirstInvoice" :key="item.id">
        <v-sheet
          @click="selectPatternInvoice(item)"
          class="sheet ma-2 text-center pointer"
          :elevation="4"
          :height="60"
          :width="150"
          border
          color="#efe7dd"
          rounded
        >
          <span class="black--text">{{ item.title }}</span>
        </v-sheet>
      </div>
    </v-card>

    <!-- select invoice pattern for invoive type 2 -->

    <v-card
      v-if="invoiceType === 2"
      color="transparent"
      class="d-flex justify-space-around mt-5"
      max-width="1500px"
      elevation="0"
    >
      <div v-for="item of patternListOfSecoundInvoice" :key="item.id">
        <v-sheet
          @click="selectPatternInvoice(item)"
          class="sheet ma-2 text-center pointer"
          :elevation="4"
          :height="60"
          :width="500"
          border
          color="#efe7dd"
          rounded
        >
          <span class="black--text">{{ item.title }}</span>
        </v-sheet>
      </div>
    </v-card>
  </div>
</template>

<script lang="ts">
import { InvoicePattern } from "@/interface/panel/invoicePattern";
import router from "@/router";
import store from "@/store";
import Vue from "vue";
export default Vue.extend({
  name: "SelectInvoiceType",

  data() {
    return {
      // first invoice pattern
      patternListOfFirstInvoice: [
        { title: "فروش", id: 1 },
        { title: "فروش ارزی", id: 2 },
        { title: "طلا و جواهر و پلاتین", id: 3 },
        { title: "پیمانکاری", id: 4 },
        { title: "قبوض خدماتی", id: 5 },
        { title: "بلیط هواپیما", id: 6 },
        { title: "صادرات", id: 7 },
      ],

      // secound invoice pattern
      patternListOfSecoundInvoice: [
        { title: "فروش", id: 1 },
        { title: "صورت حساب طلا و جواهر و پلاتین", id: 2 },
      ],
    };
  },

  methods: {
    selectInvoiceTypeValue(value: number): void {
      store.dispatch("panel/setInvoiceTypeValue", value);
      store.state.panel.moadianInvoiceHeader.inty = value;
      localStorage.setItem("invoiceType", value.toString());
    },

    selectPatternInvoice(value: InvoicePattern) {
      store.dispatch("panel/setInvoicePatternType", value);
      store.state.panel.moadianInvoiceHeader.inp = value.id.toString();
      router.push({ name: "invoiceRegistration" });
    },
  },

  computed: {
    invoiceType(): 0 | 1 | 2 {
      return store.state.panel.selectInvoiceType;
    },
  },
});
</script>

<style lang="scss" scoped>
.sheet {
  cursor: pointer !important;

  span {
    line-height: 60px;
  }
}
</style>