import { panelService } from "@/http/panel";
import router from "@/router";
import ToggleSnackbar from "../toggle_snackbar";

function CheckFiscalCode(): any {
  panelService
    .getFiscalDetails()
    .then((response) => {
      if (response.data.data.fiscalStatus !== "ACTIVE") {
        router.push({ name: "profile" });
        ToggleSnackbar("error", "کد حافظه مالیاتی شما منقضی شده است");
        return false;
      } else {
        return true;
      }
    })
    .catch((error) => {
      console.log("get fiscal details error:::", error);
      return true;
    });
}

export default CheckFiscalCode;
