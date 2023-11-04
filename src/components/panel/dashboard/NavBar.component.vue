<template>
  <v-card color="transparent" elevation="0">
    <v-layout>
      <v-app-bar color="transparent" elevation="0">
        <v-toolbar-title>
          <img
            class="mt-2"
            src="../../../assets/images/logo/logo.png"
            alt="logo"
            width="50px"
            height="50px"
          />
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <!-- search box -->

        <!-- <v-card class="mx-auto" max-width="400">
            <v-text-field
              :loading="loading"
              density="compact"
              variant="solo"
              label="Search templates"
              append-inner-icon="mdi-magnify"
              single-line
              hide-details
              @click:append-inner="onClick"
            ></v-text-field>
          </v-card> -->

        <!-- logout button -->

        <v-btn
          @click="pushUserToLastPage()"
          class="mx-3"
          outlined
          color="#735F32"
          variant="text"
          >بازگشت</v-btn
        >

        <v-btn @click="goToAuthPage()" outlined color="#735F32" variant="text"
          >خروج</v-btn
        >
      </v-app-bar>
    </v-layout>

    <v-divider class="border-opacity-200 mx-4" color="#efe7dd"></v-divider>
  </v-card>
</template>

<script lang="ts">
import router from "@/router";
import Vue from "vue";
export default Vue.extend({
  name: "NavBarComponent",

  methods: {
    goToAuthPage(): void {
      router.push({ name: "auth" });
    },

    pushUserToLastPage() {
      window.location.href = "";
    },
  },
});
</script>