<template>
  <div class="background-auth d-flex align-center">
    <v-card class="mx-auto d-flex text-center" elevation="0">
      <div>
        <v-card
          v-if="!showForgetPassword"
          class="card-auth"
          height="528px"
          width="528px"
          cover
          elevation="0"
        >
          <!-- components -->

          <register-form
            @clickForgetPassword="showForgetPassword = true"
            v-if="!authControler"
          />
          <login-form
            @clickForgetPassword="showForgetPassword = true"
            v-if="authControler"
          />
        </v-card>

        <!-- forget password card -->

        <v-card
          v-if="showForgetPassword"
          class="card-auth"
          height="528px"
          width="528px"
          cover
          elevation="0"
        >
          <!-- components -->

          <forget-password-form />
        </v-card>
      </div>

      <!-- card image -->

      <div class="image-parent">
        <v-img
          src="../assets/images/background/background-logo.png"
          height="528px"
          width="528px"
          cover
        >
          <v-btn
            class="login-button px-6 rounded-s-xl"
            :class="authControler ? 'black--text' : 'white--text'"
            :color="authControler ? '#efe7dd' : '#1B1A17'"
            min-width="90px"
            max-width="90px"
            @click="loginButton"
          >
            ورود
          </v-btn>
          <br />
          <v-btn
            class="register-button px-6 rounded-s-xl"
            :class="authControler ? 'white--text' : 'black--text'"
            :color="authControler ? '#1B1A17' : '#efe7dd'"
            min-width="90px"
            max-width="90px"
            @click="registerButton"
          >
            ثبت نام
          </v-btn>
          <v-card-text
            class="card-title white--text font-weight-medium text-h6"
          >
            سامانه جامع مالیاتی ایرانیان
          </v-card-text>
        </v-img>
      </div>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import RegisterForm from "../components/auth/RegisterForm.component.vue";
import LoginForm from "../components/auth/LoginForm.component.vue";
import ForgetPasswordForm from "../components/auth/forgetPassword/ForgetPasswordForm.component.vue";
import store from "@/store";
export default Vue.extend({
  name: "AuthPage",

  data() {
    return {
      authControler: true,
      showForgetPassword: false,
    };
  },

  components: {
    RegisterForm,
    LoginForm,
    ForgetPasswordForm,
  },

  methods: {
    loginButton() {
      this.authControler = true;
      this.showForgetPassword = false;
      store.state.auth.verifyAccountForm = false;
    },

    registerButton() {
      this.authControler = false;
      this.showForgetPassword = false;
      store.state.auth.verifyAccountForm = false;
    },
  },
});
</script>

<style lang="scss" scoped>
.background-auth {
  background-image: url("../assets/images/background/background-white.png");
  width: 100%;
  height: 100%;
  background-size: cover;
}

.card-auth {
  background-color: #efe7dd;
}

.image-parent {
  position: relative;
}

.card-title {
  position: absolute;
  bottom: 50px;
}

// buttons

.login-button {
  position: absolute;
  top: 50px;
  right: 0px;
  left: auto;
  bottom: auto;
}

.register-button {
  position: absolute;
  top: 90px;
  right: 0px;
  left: auto;
  bottom: auto;
}
</style>