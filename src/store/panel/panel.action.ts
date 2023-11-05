import { ActionTree } from "vuex";
import { RootState } from "..";
import { PanelState } from "./panel.module";
import { MUTATIONS } from "@/constants/mutations";
import { panelService } from "@/http/panel";
import ToggleSnackbar from "@/Utils/toggle_snackbar";
import { InvoicePattern } from "@/interface/panel/invoicePattern";
import router from "@/router";

export const PANEL_ACTIONS: ActionTree<PanelState, RootState> = {
  // base information

  setCompanyNameOfBaseInformation(context, value: string): void {
    context.commit(MUTATIONS.panel.setCompanyNameOfBaseInformation, value);
  },

  setRegistrationNumberOfBaseInformation(context, value: string): void {
    context.commit(
      MUTATIONS.panel.setRegistrationNumberOfBaseInformation,
      value
    );
  },

  setTaxMemoryCodeOfBaseInformation(context, value: string): void {
    context.commit(MUTATIONS.panel.setTaxMemoryCodeOfBaseInformation, value);
  },

  setNationalIdOfBaseInformation(context, value: string): void {
    context.commit(MUTATIONS.panel.setNationalIdOfBaseInformation, value);
  },

  setEcoonomicalNumberOfBaseInformation(context, value: string): void {
    context.commit(
      MUTATIONS.panel.setEcoonomicalNumberOfBaseInformation,
      value
    );
  },

  setEncryptionIdOfBaseInformation(context, value: string): void {
    context.commit(MUTATIONS.panel.setEncryptionIdOfBaseInformation, value);
  },

  // invoice
  setInvoiceListBodyData(context, value: string[]): void {
    context.commit(MUTATIONS.panel.setInvoiceListBodyData, value);
  },

  // submit base information form (send request)

  submitBaseInformationForm(context, file) {
    const data = context.state.baseInformation;
    panelService
      .sendBaseInformation(data)
      .then((response) => {
        // set snackbar data
        ToggleSnackbar("success", response.data.message);

        panelService
          .uploadPrivateKey(file)
          .then((response) => {
            console.log("upload private key response:::", response);
          })
          .catch((error) => {
            console.log("upload private key error:::", error);
          });
      })
      .catch((error) => {
        // set snackbar data
        ToggleSnackbar("error", error.response.data.message);
      });

    // :TODO:
    // var data = new FormData();
    // data.append("private_key", this.private_key);
  },

  // submit get profile information (send request)

  submitGetProfileInformation(context): void {
    panelService
      .getProfileInformation()
      .then((response) => {
        // update base information module in store
        context.state.baseInformation = response.data.data;
        // set snackbar data
        // ToggleSnackbar("success", response.data.message);
      })
      .catch((error) => {
        // set snackbar data
        ToggleSnackbar("error", error.response.data.message);
      });
  },

  // get manage info (request)

  submitGetManageInfo(context): void {
    panelService
      .getManageInfo()
      .then((response) => {
        // update manage info module in store
        context.state.manageInfo = response.data.data;
        context.state.changeIpAddress = response.data.data.ipAddresses;
        // set snackbar data
        // ToggleSnackbar("success", response.data.message);
      })
      .catch((error) => {
        // set snackbar data
        ToggleSnackbar("error", error.response.data.message);
      });
  },

  // submit refresh api key (request)

  submitRefreshApiKey(context): void {
    panelService
      .refreshApiKey()
      .then((response) => {
        // update api key module in store
        context.state.manageInfo.apiKey = response.data.data;
        // set snackbar data
        ToggleSnackbar("success", response.data.message);
      })
      .catch((error) => {
        // set snackbar data
        ToggleSnackbar("error", error.response.data.message);
      });
  },

  // set new ip address data
  setNewIpAddressData(context, value: string): void {
    context.commit(MUTATIONS.panel.setNewIpAddressData, value);
  },

  // delete ip address data
  deleteIpAddressData(context, value: string): void {
    context.commit(MUTATIONS.panel.deleteIpAddressData, value);
  },

  // submit update ip addreses (request)
  submitUpdateIpAddresses(context): void {
    const data = context.state.changeIpAddress;

    panelService
      .updateIpAddress(data)
      .then((response) => {
        console.log("response:::", response);
        // set snackbat data
        ToggleSnackbar("success", response.data.message);
      })
      .catch((error) => {
        console.log("error:::", error.response);
        // set snackbar data
        ToggleSnackbar("error", error.response.data.message);
      });
  },

  // delete item of invoices list before submit
  deleteInvoiceItemOfInvoiceBodyDataBeforeSubmit(context, index: number): void {
    context.commit(
      MUTATIONS.panel.deleteInvoiceItemOfInvoiceBodyDataBeforeSubmit,
      index
    );
  },

  // set invoice type value => 1 || 2

  setInvoiceTypeValue(context, value: 0 | 1 | 2): void {
    context.commit(MUTATIONS.panel.setInvoiceTypeValue, value);
  },

  // set invoice pattern
  setInvoicePatternType(context, value: InvoicePattern): void {
    context.commit(MUTATIONS.panel.setInvoicePatternType, value);
  },

  // set taxid in invoice
  setTaxidInInvoice(context, value: string): void {
    context.commit(MUTATIONS.panel.setTaxidInInvoice, value);
  },

  // set indatim in invoice
  setIndatimInInvoice(context, value: number): void {
    context.commit(MUTATIONS.panel.setIndatimInInvoice, value);
  },

  // set tob in invoice
  setTobInInvoice(context, value: number): void {
    context.commit(MUTATIONS.panel.setTobInInvoice, value);
  },

  // set Indati2m in invoice
  setIndati2mInInvoice(context, value: number): void {
    context.commit(MUTATIONS.panel.setIndati2mInInvoice, value);
  },

  // set inno in invoice
  setInnoInInvoice(context, value: string | null): void {
    context.commit(MUTATIONS.panel.setInnoInInvoice, value);
  },

  // set tins
  setTinsInInvoice(context, value: string | null): void {
    context.commit(MUTATIONS.panel.setTinsInInvoice, value);
  },

  // set bid
  setBidInInvoice(context, value: number): void {
    context.commit(MUTATIONS.panel.setBidInInvoice, value);
  },

  // set irtaxid
  setIrtaxidInInvoice(context, value: string | null): void {
    context.commit(MUTATIONS.panel.setIrtaxidInInvoice, value);
  },

  // set sbc
  setSbcInInvoice(context, value: string): void {
    context.commit(MUTATIONS.panel.setSbcInInvoice, value);
  },

  // set crn
  setCrnInInvoice(context, value: number): void {
    context.commit(MUTATIONS.panel.setCrnInInvoice, value);
  },

  // set tinb
  setTinbInInvoice(context, value: number): void {
    context.commit(MUTATIONS.panel.setTinbInInvoice, value);
  },

  // set scc
  setSccInInvoice(context, value: number): void {
    context.commit(MUTATIONS.panel.setSccInInvoice, value);
  },

  // set scln
  setSclnInInvoice(context, value: number): void {
    context.commit(MUTATIONS.panel.setSclnInInvoice, value);
  },

  // set cdcn
  setCdcnInInvoice(context, value: string): void {
    context.commit(MUTATIONS.panel.setCdcnInInvoice, value);
  },

  // set cdcd
  setCdcdInInvoice(context, value: number): void {
    context.commit(MUTATIONS.panel.setCdcdInInvoice, value);
  },

  // set setm
  setSetmInInvoice(context, value: number): void {
    context.commit(MUTATIONS.panel.setSetmInInvoice, value);
  },

  // set billid
  setBillidInInvoice(context, value: number): void {
    context.commit(MUTATIONS.panel.setBillidInInvoice, value);
  },

  // set tax17
  setTax17InInvoice(context, value: number): void {
    context.commit(MUTATIONS.panel.setTax17InInvoice, value);
  },

  // set ft
  setFtInInvoice(context, value: number): void {
    context.commit(MUTATIONS.panel.setFtInInvoice, value);
  },

  // set bpc
  setBpcInInvoice(context, value: number): void {
    context.commit(MUTATIONS.panel.setBpcInInvoice, value);
  },

  // set bbc
  setBbcInInvoice(context, value: number): void {
    context.commit(MUTATIONS.panel.setBbcInInvoice, value);
  },

  // set bpn
  setBpnInInvoice(context, value: string | null): void {
    context.commit(MUTATIONS.panel.setBpnInInvoice, value);
  },

  // set cap
  setCapInInvoice(context, value: number): void {
    context.commit(MUTATIONS.panel.setCapInInvoice, value);
  },

  // set insp
  setInspInInvoice(context, value: number): void {
    context.commit(MUTATIONS.panel.setInspInInvoice, value);
  },

  // set invoice body

  // set sstid
  setSstidInInvoiceBody(context, value: number): void {
    context.commit(MUTATIONS.panel.setSstidInInvoiceBody, value);
  },

  // set sstt
  setSsttInInvoiceBody(context, value: string): void {
    context.commit(MUTATIONS.panel.setSsttInInvoiceBody, value);
  },

  // set am
  setAmInInvoiceBody(context, value: number): void {
    context.commit(MUTATIONS.panel.setAmInInvoiceBody, value);
  },

  // set mu
  setMuInInvoiceBody(context, value: number): void {
    context.commit(MUTATIONS.panel.setMuInInvoiceBody, value);
  },

  // set nw
  setNwInInvoiceBody(context, value: number): void {
    context.commit(MUTATIONS.panel.setNwInInvoiceBody, value);
  },

  // set pedis
  setPrdisInInvoicebody(context, value: number): void {
    context.commit(MUTATIONS.panel.setPrdisInInvoicebody, value);
  },

  // set dis
  setDisInInvoiceBody(context, value: number): void {
    context.commit(MUTATIONS.panel.setDisInInvoiceBody, value);
  },

  // set vra
  setVraInInvoiceBody(context, value: number): void {
    context.commit(MUTATIONS.panel.setVraInInvoiceBody, value);
  },

  // set exr
  setExrInInvoiceBody(context, value: number): void {
    context.commit(MUTATIONS.panel.setExrInInvoiceBody, value);
  },

  // set ssrv
  setSsrvInInvoiceBody(context, value: number): void {
    context.commit(MUTATIONS.panel.setSsrvInInvoiceBody, value);
  },

  // set sscv
  setSscvInInvoiceBody(context, value: number): void {
    context.commit(MUTATIONS.panel.setSscvInInvoiceBody, value);
  },

  // set odt
  setOdtInInvoiceBody(context, value: string): void {
    context.commit(MUTATIONS.panel.setOdtInInvoiceBody, value);
  },

  // set odr
  setOdrInInvoiceBody(context, value: number): void {
    context.commit(MUTATIONS.panel.setOdrInInvoiceBody, value);
  },

  // set iinn in payment
  setIinnInInvoicePayment(context, value: number): void {
    context.commit(MUTATIONS.panel.setIinnInInvoicePayment, value);
  },

  // set acn in payment
  setAcnInInvoicePayment(context, value: number): void {
    context.commit(MUTATIONS.panel.setAcnInInvoicePayment, value);
  },

  // set piud in payment
  setPidInInvoicePayment(context, value: number): void {
    context.commit(MUTATIONS.panel.setPidInInvoicePayment, value);
  },

  // set trn in payment
  setTrnInInvoicePayment(context, value: number): void {
    context.commit(MUTATIONS.panel.setTrnInInvoicePayment, value);
  },

  // set pcn in payment
  setPcnInInvoicePayment(context, value: number): void {
    context.commit(MUTATIONS.panel.setPcnInInvoicePayment, value);
  },

  // set trmn
  setTrmnInInvoicePayment(context, value: number): void {
    context.commit(MUTATIONS.panel.setTrmnInInvoicePayment, value);
  },

  // set pv
  setPvInInvoicePayment(context, value: number): void {
    context.commit(MUTATIONS.panel.setPvInInvoicePayment, value);
  },

  // set pdt
  setPdtInInvoicePayment(context, value: number): void {
    context.commit(MUTATIONS.panel.setPdtInInvoicePayment, value);
  },

  // push data to payment information list
  pushPaymentInformationToPaymentList(context): void {
    context.commit(MUTATIONS.panel.pushPaymentInformationToPaymentList);
  },

  // cal create new invoice (request)
  callCreateNewInvoiceRequest(context): void {
    const moadianInvoiceHeader = context.state.moadianInvoiceHeader;
    const moadianInvoiceBody = context.state.invoiceList;
    const moadianInvoicePayment = context.state.moadianInvoicePaymentList;
    panelService
      .createNewInvoice(
        moadianInvoiceHeader,
        moadianInvoiceBody,
        moadianInvoicePayment
      )
      .then((response) => {
        ToggleSnackbar("success", response.data.message);
      })
      .catch((error) => {
        console.log(
          "error message:::",
          error.response.data.message,
          error.response.data?.errors[0].message
        );
        const errorMessage =
          error.response.data.message +
          ", " +
          error.response.data?.errors[0].message;
        ToggleSnackbar("error", errorMessage);
      });
  },

  // choose invoice list type for get invoice list (select box)
  setInvoiceListType(context, value: number): void {
    context.commit(MUTATIONS.panel.setInvoiceListType, value);
  },

  // set search of get invoices list filter
  setSerachOfGetInvoicesListFilter(context, value: string): void {
    context.commit(MUTATIONS.panel.setSerachOfGetInvoicesListFilter, value);
  },

  // submit get invoices list (request)
  submitGetInvoicesList(context): void {
    const filter = context.state.getInvoicesListFilter;
    panelService
      .GetInvoicesList(filter)
      .then((response) => {
        console.log("get invoices list response:::", response);
        // context.state.getInvoicesList = response.data.data;

        context.commit(
          MUTATIONS.panel.submitGetInvoicesList,
          response.data.data
        );
      })
      .catch((error) => {
        ToggleSnackbar("error", error.response.data.message);
        if (error.response.data.status === 403) {
          router.push({ name: "auth" });
          localStorage.removeItem("accessToken");
        }
      });
  },

  // (request)
  invoiceUpdatingCallRequest(context, invoiceId): void {
    panelService
      .getInvoiceDetails(invoiceId)
      .then((response) => {
        context.commit(
          MUTATIONS.panel.invoiceUpdatingCallRequest,
          response.data.data
        );

        const data = { ids: [invoiceId] };
        panelService
          .getStatusInvoices(data)
          .then((response) => {
            context.state.errorListSingleInvoice = response?.data?.data[0];
          })
          .catch((error) => {
            ToggleSnackbar("error", error.response.data.message);
          });

        router.push({ name: "invoiceUpdating" });
      })
      .catch((error) => {
        ToggleSnackbar("error", error.response.data.message);
      });
  },

  // update fields of invoice updating (header invoice)
  // update tinb
  updateTinbOfInvoiceUpdating(context, value: string): void {
    context.commit(MUTATIONS.panel.updateTinbOfInvoiceUpdating, value);
  },

  // update fields of invoice updating (body invoice)
  updateSstidBodyOfInvoiceUpdating(context, value: number): void {
    context.commit(MUTATIONS.panel.updateSstidBodyOfInvoiceUpdating, value);
  },

  // send updated invoice to database (request)
  sendUpdatedInvoice(context): void {
    const data = {
      header: context.state.invoiceUpdating.header,
      body: context.state.invoiceUpdating.body,
      payments: context.state.invoiceUpdating.payments,
    };
    const invoiceId = context.state.invoiceUpdating._id;

    panelService
      .updatedInvoice(data, invoiceId)
      .then((response) => {
        ToggleSnackbar("success", response.data.message);
        // window.location.href = "";
        router.push({ name: "invoicesList" });
      })
      .catch((error) => {
        console.log("send updated invoice error:::", error);
      });
  },

  // send invoice to moadian for submit invoice (request)
  submitInvoiceForMoadian(context, invoiceId: string): void {
    panelService
      .submitOneInvoice(invoiceId)
      .then((response) => {
        console.log("send one invoice response:::", response.data);
        ToggleSnackbar("success", response.data.message);
      })
      .catch((error) => {
        console.log("send one invoice error:::", error.response.response);
        if (error.response.data.status === 403) {
          router.push({ name: "auth" });
          localStorage.removeItem("accessToken");
        }
      });
  },

  // add invoice is to invoice ids list for submit to moadian
  setInvoiceIdsForSubmitToMoadian(context, value: string): void {
    context.commit(MUTATIONS.panel.setInvoiceIdsFromSubmitToMoadian, value);
  },

  // pop invoice id from invoice ids list for submit moadian
  popInvoiceIdsForSubmitToMoadian(context, value: string): void {
    context.commit(MUTATIONS.panel.popInvoiceIdsForSubmitToMoadian, value);
  },

  // call request send invoice ids list to moadian for submit invoices
  callRequestSendInvoiceIdsList(context): void {
    const data = { ids: context.state.invoiceIds };
    panelService
      .sendInvoiceIdsList(data)
      .then((response) => {
        ToggleSnackbar("success", response.data.message);
      })
      .catch((error) => {
        ToggleSnackbar("error", error.response.data.message);
      });
  },

  callRequestGetStatusInvoices(context): void {
    const data = { ids: context.state.invoiceIds };
    panelService
      .getStatusInvoices(data)
      .then((response) => {
        console.log("get status invoices response:::", response.data);
        context.state.statusInvoiceData = response.data;
        ToggleSnackbar("success", response.data.message);
        router.push({ name: "statusInvoices" });
      })
      .catch((error) => {
        console.log("get status invoices:::", error.response);
        ToggleSnackbar("error", error.response.data.message);
      });
  },

  callRequestGetDetailsInvoice(context, invoiceId): void {
    const data = { ids: [invoiceId] };
    panelService
      .getStatusInvoices(data)
      .then((response) => {
        console.log("get details invoice response:::", response);
      })
      .catch((error) => {
        console.log("get details invoice error:::", error);
      });
  },

  pushItemToInvoiceStatusList(context, value: any): void {
    context.commit(MUTATIONS.panel.pushItemToInvoiceStatusList, value);
  },

  popItemFromInvoiceStatusList(context, value: any): void {
    context.commit(MUTATIONS.panel.popItemFromInvoiceStatusList, value);
  },
};
