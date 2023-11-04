<template>
  <v-card
    color="transparent"
    class="mx-auto"
    min-width="90%"
    max-width="90%"
    elevation="0"
  >
    <!-- buttons -->

    <v-card color="transparent" class="d-flex my-5" elevation="0">
      <v-btn
        @click="tabControler = true"
        class="px-8 ml-5"
        :color="tabControler ? '#efe7dd' : '#735F32'"
        :outlined="!tabControler ? true : false"
        variant="text"
        type="button"
        >اطلاعات پایه</v-btn
      >
      <v-btn
        @click="tabControler = false"
        class="px-10"
        :outlined="tabControler ? true : false"
        :color="!tabControler ? '#efe7dd' : '#735F32'"
        variant="text"
        type="button"
        >تنظیمات Api Key</v-btn
      >
    </v-card>

    <!-- component -->

    <profile-form v-if="tabControler" />

    <profile-form-api-key-setting v-if="!tabControler" />
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";

// components

import ProfileForm from "@/components/panel/profile/ProfileFormBasicInformation.component.vue";
import ProfileFormApiKeySetting from "@/components/panel/profile/ProfileFormApiKeySetting.component.vue";

export default Vue.extend({
  name: "ProfilePage",

  components: { ProfileForm, ProfileFormApiKeySetting },

  data() {
    return {
      tabControler: true,
    };
  },
});
</script>