<template>
  <v-card
    color="transparent"
    class="px-4 py-3"
    min-width="50%"
    max-width="50%"
    min-height="200px"
    elevation="0"
  >
    <!-- first card -->
    <v-card
      class="py-3 px-8"
      color="#efe7dd"
      min-width="100%"
      max-width="100%"
      elevation="0"
    >
      <!-- first input -->
      <div class="d-flex align-center">
        <span class="pt-4 mx-3">نام و نام خانوادگی : </span>
        <v-text-field class="mx-3" variant="solo-filled"></v-text-field>
      </div>

      <!-- secoud input -->

      <div class="d-flex align-center pt-2">
        <span class="pt-4 mx-4">کد ملی‌ شخصی : </span>
        <v-text-field class="mx-4" variant="underlined"></v-text-field>
      </div>

      <!-- three input -->

      <div class="d-flex align-center pt-2">
        <span class="pt-4 mx-4">شماره اقتصادی : </span>
        <v-text-field class="mx-4" variant=""></v-text-field>
      </div>

      <!-- submit button -->

      <div class="mx-3 my-5">
        <v-btn class="white--text" color="black" block>ثبت مشتری</v-btn>
      </div>
    </v-card>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "customerRegistrationFormComponent",
});
</script>