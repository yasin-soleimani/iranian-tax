<template>
  <v-app>
    <!-- <navbar-component class="main" /> -->

    <v-main class="main">
      <snackbar />
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
// import router from "./router";
// import router from "./router";
// import NavbarComponent from "./components/navbar/Navbar.component.vue";
import Snackbar from "@/components/snackbar/snackbar.component.vue";

export default Vue.extend({
  name: "App",

  components: { Snackbar },

  data: () => ({
    //
  }),

  created() {
    // router.push({ name: "dashboard" });
  },
});
</script>

<style scoped>
.main {
  background-image: url("./assets/images/background/background-white.png");
  width: 100%;
  height: 100%;
  background-size: cover;
}
</style>

