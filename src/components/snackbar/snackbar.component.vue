<template>
  <div class="text-center ma-2">
    <v-snackbar :color="snackbarColor" v-model="snackbarShow">
      <span class="text--white">{{ snackbarText }}</span>

      <!-- <template v-slot:actions>
        <v-btn color="pink" variant="text"> بستن </v-btn>
      </template> -->
    </v-snackbar>
  </div>
</template>

<script lang="ts">
import store from "@/store";
import Vue from "vue";
export default Vue.extend({
  name: "snackbarComponent",

  computed: {
    snackbarShow() {
      return store.state.app.snackbar;
    },

    snackbarColor() {
      return store.state.app.snackbarColor;
    },

    snackbarText() {
      return store.state.app.snackbarText;
    },
  },
});
</script>