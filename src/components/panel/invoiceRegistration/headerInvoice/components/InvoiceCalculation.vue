<template>
  <div>
    <span class="primary--text">محاسبات صورت حساب</span>
    <v-card
      class="d-flex flex-wrap py-3 px-2 my-3 rounded-lg"
      color="#efe7dd"
      min-width="100%"
      max-width="100%"
      elevation="2"
    >
      <div v-if="false" class="d-flex align-center mb-3">
        <span class="pt-0 mx-3">
          مجموع سهم مالیات بر ارزش افزوده از پرداخت :
        </span>
        <v-text-field
          class="mx-3 input"
          variant="solo-filled"
          v-model="tvop"
          disabled
        ></v-text-field>
      </div>
      <div
        v-if="this.type === 1 && this.pattern !== 6"
        class="d-flex align-center mb-3"
      >
        <span class="pt-0 mx-3">
          مجموع سایر مالیات، عوارض و وجوه قانونی :
        </span>
        <v-text-field
          v-model="todam"
          class="mx-3 input"
          variant="solo-filled"
          maxLength="18"
          disabled
        ></v-text-field>
      </div>
      <div v-if="showTprdis()" class="d-flex align-center mb-3">
        <span class="pt-0 mx-3"> مجموع مبلغ قبل از کسر تخفیف : </span>
        <v-text-field
          v-model="tprdis"
          class="mx-3 input"
          variant="solo-filled"
          disabled
        ></v-text-field>
      </div>
      <div v-if="showTadis()" class="d-flex align-center mb-3">
        <span class="pt-0 mx-3"> مجموع مبلغ پس از کسر تخفیف : </span>
        <v-text-field
          v-model="tadis"
          class="mx-3 input"
          variant="solo-filled"
          disabled
        ></v-text-field>
      </div>

      <div class="d-flex align-center mb-3">
        <span class="pt-0 mx-3"> مجموع مالیات بر ارزش افزوده : </span>
        <v-text-field
          v-model="tvam"
          class="mx-3 input"
          variant="solo-filled"
          disabled
        ></v-text-field>
      </div>
      <div
        v-if="this.type === 1 && this.pattern === 7 ? true : false"
        class="d-flex align-center mb-3"
      >
        <span class="pt-0 mx-3"> مجموع وزن خالص : </span>
        <v-text-field
          v-model="tonw"
          class="mx-3 input"
          variant="solo-filled"
          disabled
        ></v-text-field>
      </div>

      <div class="d-flex align-center mb-3">
        <span class="pt-0 mx-3"> مجموع صورتحساب : </span>
        <v-text-field
          v-model="tbill"
          class="mx-3 input"
          variant="solo-filled"
          disabled
        ></v-text-field>
      </div>

      <div
        v-if="this.type === 1 && this.pattern === 7 ? true : false"
        class="d-flex align-center mb-3"
      >
        <span class="pt-0 mx-3 input">مجموع ارزش ارزی: </span>
        <v-text-field
          class="mx-3 input"
          variant="solo-filled"
          v-model="tocv"
          disabled
        ></v-text-field>
      </div>
      <div
        v-if="this.type === 1 && this.pattern === 7 ? true : false"
        class="d-flex align-center mb-3"
      >
        <span class="pt-0 mx-3"> مجموع ارزش ریالی : </span>
        <v-text-field
          v-model="torv"
          class="mx-3 input"
          variant="solo-filled"
          disabled
        ></v-text-field>
      </div>
      <div v-if="false" class="d-flex align-center mb-3">
        <span class="pt-0 mx-3"> مجموع تخفیفات : </span>
        <v-text-field
          v-model="tdis"
          class="mx-3 input"
          variant="solo-filled"
          disabled
        ></v-text-field>
      </div>
    </v-card>
  </div>
</template>

<script lang="ts">
import store from "@/store";
import Vue from "vue";
export default Vue.extend({
  name: "InvoiceCalculation",

  methods: {
    showTprdis() {
      if (
        (this.type === 1 && this.pattern === 6) ||
        (this.type === 1 && this.pattern === 7)
      ) {
        return false;
      } else {
        return true;
      }
    },

    showTadis() {
      if (
        (this.type === 1 && this.pattern === 6) ||
        (this.type === 1 && this.pattern === 7)
      ) {
        return false;
      } else {
        return true;
      }
    },
  },

  computed: {
    type() {
      return store.state.panel.selectInvoiceType;
    },

    pattern() {
      return store.state.panel.selectPatternInvoice.id;
    },
    tvop(): string {
      return store.state.panel.moadianInvoiceHeader.tvop;
    },

    todam(): string {
      return store.state.panel.moadianInvoiceHeader.todam;
    },

    tprdis(): string {
      return store.state.panel.moadianInvoiceHeader.tprdis;
    },

    tadis(): string {
      return store.state.panel.moadianInvoiceHeader.tadis;
    },

    tvam(): string {
      return store.state.panel.moadianInvoiceHeader.tvam;
    },

    tonw(): string {
      return store.state.panel.moadianInvoiceHeader.tonw;
    },

    tbill(): string {
      return store.state.panel.moadianInvoiceHeader.tbill;
    },

    tocv(): string {
      return store.state.panel.moadianInvoiceHeader.tocv;
    },

    torv(): string {
      return store.state.panel.moadianInvoiceHeader.torv;
    },

    tdis(): string {
      return store.state.panel.moadianInvoiceHeader.tdis;
    },
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
</style>