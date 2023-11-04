<template>
  <v-card
    class="px-4 py-3"
    color="#efe7dd"
    min-width="80%"
    max-width="80%"
    min-height="200px"
  >
    <!-- first card -->

    <div class="d-flex justify-center">
      <v-card
        class="px-8 text-center"
        color="#efe7dd"
        min-width="20%"
        max-width="20%"
        elevation="0"
      >
        <v-card-text class="text-h6">Api Key</v-card-text>
      </v-card>

      <v-card
        class="d-flex justify-center"
        color="#efe7dd"
        min-width="80%"
        max-width="80%"
        elevation="0"
      >
        <v-card
          @click="submitRefreshApiKey"
          class="d-flex justify-center align-center px-5"
          color="#efe7dd"
          min-width="5%"
          elevation="0"
        >
          <span>refresh</span>
        </v-card>
        <v-card
          class="d-flex justify-center align-center px-8 mt-3"
          color="white"
          min-width="30%"
          max-height="40px"
          elevation="0"
        >
          <span>{{ apiKey }}</span>
        </v-card>
        <v-card
          class="d-flex justify-center align-center px-8"
          color="#efe7dd"
          min-width="30%"
          elevation="0"
        >
          <v-btn
            outlined
            class="black--text py-5"
            color="black"
            type="button"
            block
            >کپی Api</v-btn
          >
        </v-card>
      </v-card>
    </div>

    <!-- secound card -->

    <div class="d-flex justify-center">
      <v-card
        class="px-8 pt-5 text-center"
        color="#efe7dd"
        min-width="20%"
        max-width="20%"
        elevation="0"
      >
        <span>Ip ها</span>
        <v-card
          class="mt-6"
          color="primary"
          min-width="120px"
          max-width="120px"
        >
          <!-- dialog add new ip -->

          <v-row justify="center">
            <v-dialog v-model="dialog" persistent width="500">
              <template v-slot:activator="{ props }">
                <v-btn @click="dialog = true" color="#efe7dd" v-bind="props">
                  افزودن ip جدید
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="text-h5">افزودن ip جدید</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="12" md="12">
                        <v-text-field
                          label="ip*"
                          v-model="ip"
                          required
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="blue-darken-1"
                    variant="text"
                    @click="dialog = false"
                  >
                    بستن
                  </v-btn>
                  <v-btn
                    color="blue-darken-1"
                    variant="text"
                    @click="submitSetNewIp"
                  >
                    ثبت
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-row>
        </v-card>
      </v-card>

      <v-card
        class="d-flex justify-end flex-wrap overflow-auto"
        color="white"
        min-width="80%"
        max-width="80%"
        min-height="300px"
        elevation="0"
      >
        <v-card
          v-for="(item, index) in ipAddresses"
          :key="item.index"
          @click="deleteIpAddress(index)"
          class="d-flex justify-center align-center px-5 ma-4"
          color="#efe7dd"
          min-width="50px"
          max-height="50px"
          elevation="0"
        >
          <span>{{ item }}</span>
        </v-card>
      </v-card>
    </div>

    <!-- three card -->

    <v-card class="mt-5 pa-3" color="white" min-height="100px" elevation="0">
      <h4>توضیحات :</h4>

      <!-- pdf link -->
      <a class="mt-3 py-3" href="file.pdf" download> مشاهده مستندات فنی </a>
    </v-card>
  </v-card>
</template>

<script lang="ts">
import store from "@/store";
import Vue from "vue";
export default Vue.extend({
  name: "ProfileFormApiKeySettingComponent",

  data: () => ({
    tab: null,
    message: "",
    dialog: false,
    ip: "",
  }),

  methods: {
    // call request
    submitRefreshApiKey() {
      store.dispatch("panel/submitRefreshApiKey");
    },

    // add new ip and call request (update ip address)
    submitSetNewIp() {
      store.dispatch("panel/setNewIpAddressData", this.ip);
      store.dispatch("panel/submitUpdateIpAddresses");
    },

    // delete ip address and call request (update ip address)
    deleteIpAddress(index: string) {
      store.dispatch("panel/deleteIpAddressData", index);
      store.dispatch("panel/submitUpdateIpAddresses");
    },
  },

  computed: {
    // get api key of model data in store
    apiKey(): string {
      return store.state.panel.manageInfo.apiKey;
    },

    // get apis list of model data in store
    ipAddresses() {
      return store.state.panel.manageInfo.ipAddresses;
    },
  },
});
</script>


