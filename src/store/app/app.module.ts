import { Module } from "vuex";
import { RootState } from "..";
import { APP_ACTIONS } from "./app.action";
import { APP_GETTERS } from "./app.getter";
import { APP_MUTATIONS } from "./app.mutation";

export interface AppState {
  // snackbar component
  snackbar: boolean;
  snackbarText: string;
  snackbarColor: string;
}

const INITIAL_APP: AppState = {
  // snackbar component
  snackbar: false,
  snackbarText: "",
  snackbarColor: "",
};

export const app: Module<AppState, RootState> = {
  actions: APP_ACTIONS,
  getters: APP_GETTERS,
  mutations: APP_MUTATIONS,
  state: INITIAL_APP,
  namespaced: true,
};
