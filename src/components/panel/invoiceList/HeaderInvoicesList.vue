<template>
  <v-card
    color="#efe7dd"
    class="my-3 pa-3 rounded-lg overflow-x-auto"
    min-width="100%"
    max-width="100%"
  >
    <h4 v-if="invoicesList.length < 1" class="text-center">
      هیچ موردی یافت نشد
    </h4>

    <v-table>
      <thead>
        <tr>
          <th
            v-for="header of HeaderTabel"
            :key="header.key"
            class="th text-center"
          >
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in invoicesList"
          :key="index"
          class="tr"
          :class="{
            cyan: getInvoiceIds.includes(item._id),
          }"
        >
          <td class="text-center">
            <v-btn
              class="button"
              @click="selectInvoiceId(item, index)"
              :class="{
                primary: getInvoiceIds.includes(item._id),
              }"
            >
              {{ getInvoiceIds.includes(item._id) ? "انتخاب شده" : "انتخاب" }}
            </v-btn>
          </td>
          <!-- <td class="primary--text text-center">
            {{ showBuyerType(item.header.tob) }}
          </td>
          
          <td class="text-center">
            {{ item.header.tbill + " ریال " }}
          </td> -->
          <!-- <td class="text-center">
            {{ convertToPersianDate(item.header.Indati2m) }}
          </td>
          <td class="text-center">
            {{ convertToPersianDate(item.header.indatim) }}
          </td>
          <td class="text-center">
            {{ item.header.tins }}
          </td> -->
          <td class="text-center">
            {{ item.header.tvam + " ریال " }}
          </td>

          <td
            class="text-center"
            :class="!item.header.trn ? 'error--text' : 'success--text'"
          >
            {{ !item.payments.trn ? "ندارد" : item.header.trn }}
          </td>
          <td
            class="text-center"
            :class="!item.header.irtaxid ? 'error--text' : 'success--text'"
          >
            {{ !item.header.irtaxid ? "ندارد" : item.header.irtaxid }}
          </td>
          <td class="primary--text text-center">
            {{ item.header.inty === 1 ? "نوع اول" : "نوع دوم" }}
          </td>
          <td class="text-center">
            {{ "شماره " + item.header.inp }}
          </td>
          <td class="text-center">
            {{ showStatus(item.status) }}
          </td>
          <td class="text-center">
            <v-btn
              class="ma-2"
              @click="pushToInvoiceUpdating(item._id)"
              color="success"
            >
              ویرایش
            </v-btn>
          </td>

          <td class="text-center">
            <v-btn @click="submitInvoice(item._id)" color="primary">
              ارسال
            </v-btn>
          </td>
        </tr>
      </tbody>
      <div class="text-center my-5">
        <div>
          <v-btn
            class="mx-2"
            @click="getStatusInvoices()"
            color="success"
            :disabled="getInvoiceIds.length < 1"
          >
            استعلام صورت حساب های انتخاب شده
          </v-btn>
          <v-btn
            class="mx-2"
            @click="sendInvoiceIdsList()"
            color="primary"
            :disabled="getInvoiceIds.length < 1"
          >
            ارسال صورت حساب های انتخاب شده
          </v-btn>
        </div>
      </div>
    </v-table>
  </v-card>
</template>

<script lang="ts">
import store from "@/store";
import Vue from "vue";
import moment from "jalali-moment";

export default Vue.extend({
  name: "HeaderInvoicesList",

  data() {
    return {
      HeaderTabel: [
        "ارسال گروهی",
        "نوع شخص خریدار",
        "مجموع صورت حساب",
        "تاریخ ایجاد صورت حساب",
        "تاریخ صدور صورت حساب",
        "شماره اتقصادی فروشنده",
        "مالیات بر ارزش افزوده",
        "شماره پیگیری پرداخت",
        "شماره منحصر به فرد مرجع",
        "نوع صورت حساب",
        "الگو صورت حساب",
        "وضعیت",
        "خدمات",
        "ثبت صورت حساب",
      ],
    };
  },

  methods: {
    convertToPersianDate(time: any): any {
      const m = moment(time).locale("fa").format("YYYY/MM/DD");

      return m;
    },
    pushToInvoiceUpdating(invoiceId: string): void {
      store.dispatch("panel/invoiceUpdatingCallRequest", invoiceId);
    },

    submitInvoice(invoiceId: string) {
      // const access = CheckFiscalCode();
      // if (access) {
      store.dispatch("panel/submitInvoiceForMoadian", invoiceId);
      // }
    },

    showBuyerType(type: number): string | unknown {
      let buyer;
      switch (type) {
        case 1:
          buyer = "حقیقی";
          break;
        case 2:
          buyer = "حقوقی";
          break;
        case 3:
          buyer = "مشارکت مدنی";
          break;
        case 4:
          buyer = "اتباع غیر ایرانی";
          break;
      }

      return buyer;
    },

    showStatus(status: string): string | unknown {
      let state;
      switch (status) {
        case "NOT_SEND":
          state = "ارسال نشده";
          break;
        case "PENDING":
          state = "در انتظار";
          break;
        case "SUCCESS":
          state = "ارسال شده";
          break;
        case "FAILED":
          state = "رد شده";
          break;
      }

      return state;
    },

    selectInvoiceId(item: any): void {
      !this.getInvoiceIds.includes(item._id)
        ? store.dispatch("panel/setInvoiceIdsForSubmitToMoadian", item._id)
        : store.dispatch("panel/popInvoiceIdsForSubmitToMoadian", item._id);

      !this.getInvoicesStatusList.includes(item)
        ? store.dispatch("panel/pushItemToInvoiceStatusList", item)
        : store.dispatch("panel/popItemFromInvoiceStatusList", item);
    },

    getStatusInvoices() {
      store.dispatch("panel/callRequestGetStatusInvoices");
    },

    sendInvoiceIdsList(): void {
      store.dispatch("panel/callRequestSendInvoiceIdsList");
    },
  },

  computed: {
    invoicesList() {
      return store.state.panel.getInvoicesList;
    },

    getInvoiceIds() {
      return store.state.panel.invoiceIds;
    },

    getInvoicesStatusList() {
      return store.state.panel.invoicesItemWithId;
    },
  },
});
</script>

<style lang="scss" scoped>
.th {
  min-width: 180px !important;
  max-width: 180px !important;
  border: 0.25px solid teal;
  color: teal;
}

tr {
  height: 50px;
  border: 2px solid teal !important;

  td {
    border: 0.25px solid #735f32;
  }
}
</style>