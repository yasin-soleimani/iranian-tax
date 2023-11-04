import Vue from "vue";
import Vuex from "vuex";
import { AppState, app } from "./app/app.module";
import { AuthState, auth } from "./auth/auth.module";
import { PanelState, panel } from "./panel/panel.module";

export interface RootState {
  app: AppState;
  auth: AuthState;
  panel: PanelState;
}

Vue.use(Vuex);

export default new Vuex.Store<RootState>({
  modules: { auth, panel, app },
});
