import store from "@/store";

const ToggleSnackbar = (color: string, message: string) => {
  // set color for snackbar color module in store
  store.state.app.snackbarColor = color;
  // set text for snackbar text module in store
  store.state.app.snackbarText = message;
  // set position for snackbar module in store
  store.state.app.snackbar = true;

  // time out for reset snackbar position
  setTimeout(() => {
    //reset snackbar position
    store.state.app.snackbar = false;
  }, 2500);
};

export default ToggleSnackbar;
