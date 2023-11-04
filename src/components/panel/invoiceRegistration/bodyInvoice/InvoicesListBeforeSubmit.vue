<template>
  <div>
    <div class="my-3">
      <span class="primary--text">لیست فاکتور های ایجاد شده</span>
    </div>
    <v-card color="#efe7dd" class="pa-2" elevation="0">
      <v-card
        class="d-flex justify-space-between pa-3 ma-3 rounded-lg"
        v-for="(item, index) of getInvoicesList"
        :key="item.id"
      >
        <div class="d-flex align-center">
          <span>شناسه کالا/خدمت :</span>
          <span class="mx-2 primary--text">{{ item.sstid }}</span>
        </div>
        <div class="d-flex align-center">
          <span>شرح کالا/خدمت :</span>
          <span class="mx-2 primary--text">{{ item.sstt }}</span>
        </div>
        <div class="d-flex align-center">
          <span>تعدا/مقدار :</span>
          <span class="mx-2 primary--text">{{ item.am }}</span>
        </div>
        <div class="d-flex align-center">
          <span>واحد اندازه گیری :</span>
          <span class="mx-2 primary--text">{{ item.mu }}</span>
        </div>
        <div class="d-flex">
          <v-btn class="white--text mx-1" color="success">مشاهده</v-btn>
          <v-btn
            @click="deleteInvoice(index)"
            class="white--text mx-1"
            color="red"
            >حذف</v-btn
          >
        </div>
      </v-card>
    </v-card>
  </div>
</template>

<script lang="ts">
import store from "@/store";
import Vue from "vue";
export default Vue.extend({
  name: "InvoicesListBeforeSubmit",

  computed: {
    getInvoicesList() {
      return store.state.panel.invoiceList;
    },
  },

  methods: {
    deleteInvoice(index: number) {
      store.dispatch(
        "panel/deleteInvoiceItemOfInvoiceBodyDataBeforeSubmit",
        index
      );
    },
  },
});
</script>