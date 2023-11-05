<template>
  <v-navigation-drawer
    class="rounded-lg"
    color="black"
    v-model="drawer"
    :rail="rail"
    permanent
    @click="rail = false"
    height="80vh"
  >
    <v-list-item
      prepend-avatar="../../assets/images/background/background-logo.png"
      title="John Leider"
      nav
    >
      <div class="py-6">
        <span class="white--text">محمد یاسین سلیمانی</span>
      </div>
    </v-list-item>

    <v-divider></v-divider>

    <!-- hr -->

    <hr />

    //TODO:

    <!-- create menu loop and add path route -->

    <v-list density="compact" nav>
      <v-list-item
        @click="sidebarItemSelected(item)"
        v-for="item of sideBarMenu"
        :key="item.title"
        class="font-weight-light white--text"
      >
        {{ item.title }}</v-list-item
      >
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import router from "@/router";
import Vue from "vue";

// interfaces
import { SidebarMenu } from "@/interface/panel/sidebarMenu.model";
export default Vue.extend({
  name: "SideBarComponent",

  data() {
    return {
      drawer: true,
      rail: true,

      sideBarMenu: [
        { title: "تنظیمات حساب کاربری", pathName: "profile" },
        { title: "ثبت نام مشتری", pathName: "customerRegistration" },
        { title: "ثبت صورت حساب", pathName: "selectInvoiceType" },
        { title: "لیست صورت حساب ها", pathName: "invoicesList" },
        //TODO:
        // { title: "گزارشات صورت حساب ها", pathName: "" },
        // { title: "مالی", pathName: "" },
        // { title: "درباره ما", pathName: "" },
      ],
    };
  },

  methods: {
    sidebarItemSelected(item: SidebarMenu) {
      let activeRoute = this.$route.path.split("/")[2];
      if (activeRoute !== item.pathName) {
        router.push({ name: item.pathName });
      }
    },
  },
});
</script>