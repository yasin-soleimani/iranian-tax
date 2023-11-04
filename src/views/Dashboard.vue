<template>
  <div class="mx-10">
    <!-- navbar -->

    <nav-bar />

    <!-- sidebar -->

    <v-card color="transparent" class="mt-4" elevation="0">
      <v-layout>
        <side-bar />
        <v-main style="height: 100%">
          <router-view />
        </v-main>
      </v-layout>
    </v-card>
  </div>
</template>

<script lang="ts">
// import router from "@/router";
import Vue from "vue";
import NavBar from "@/components/panel/dashboard/NavBar.component.vue";
import SideBar from "@/components/panel/dashboard/SideBar.component.vue";
// import router from "@/router";
export default Vue.extend({
  name: "DashboardPage",

  components: { NavBar, SideBar },

  created(): void {
    // router.push({ name: "profile" });
  },
});
</script>