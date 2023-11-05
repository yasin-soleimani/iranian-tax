<template>
  <v-card color="#efe7dd" class="pa-3 my-3 rounded-lg">
    <div class="d-flex justify-start">
      <div class="mx-3">
        <label for="">نوع صورت حساب درخواستی</label>
        <v-select
          class="my-2"
          v-model="invoiceListType"
          :value="invoiceListType"
          :items="['همه', 'ارسال نشده', 'ارسال شده', 'تایید شده', 'تایید نشده']"
          outlined
        ></v-select>
      </div>
      <div class="mx-3">
        <label for="">
          شماره منحصر به فرد مالیاتی یا شماره اقتصادی خریدار</label
        >
        <v-text-field
          v-model="search"
          class="my-2"
          variant="outlined"
          outlined
        ></v-text-field>
      </div>
    </div>
    <div>
      <v-btn @click="SubmitGetInvoicesList" variant="tonal" color="success">
        جست وجو
      </v-btn>
    </div>
  </v-card>
</template>

<script lang="ts">
import store from "@/store";
import Vue from "vue";
export default Vue.extend({
  name: "TypeOfInvoiceList",

  methods: {
    getInvoiceListType(type: number) {
      let selectedType;
      switch (type) {
        case 0:
          selectedType = "همه";
          break;
        case 1:
          selectedType = "ارسال نشده";
          break;
        case 2:
          selectedType = "ارسال شده";
          break;
        case 3:
          selectedType = "تایید شده";
          break;
        case 4:
          selectedType = "تایید نشده";
          break;
      }

      return selectedType;
    },

    setInvoiceListType(title: string) {
      let selectedTitle;
      switch (title) {
        case "همه":
          selectedTitle = 0;
          break;
        case "ارسال نشده":
          selectedTitle = 1;
          break;
        case "ارسال شده":
          selectedTitle = 2;
          break;
        case "تایید شده":
          selectedTitle = 3;
          break;
        case "تایید نشده":
          selectedTitle = 4;
          break;
      }

      return selectedTitle;
    },

    SubmitGetInvoicesList() {
      store.dispatch("panel/submitGetInvoicesList");
    },
  },

  computed: {
    invoiceListType: {
      get(): any {
        const type = this.getInvoiceListType(
          store.state.panel.getInvoicesListFilter.type
        );

        return type;
      },

      set(value: string): void {
        store.dispatch(
          "panel/setInvoiceListType",
          this.setInvoiceListType(value)
        );
      },
    },

    search: {
      get(): string {
        return store.state.panel.getInvoicesListFilter.search;
      },
      set(value: string): void {
        store.dispatch("panel/setSerachOfGetInvoicesListFilter", value);
      },
    },
  },
});
</script>