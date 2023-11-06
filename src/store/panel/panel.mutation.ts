import { MutationTree } from "vuex";
import { PanelState } from "./panel.module";
import { MUTATIONS } from "@/constants/mutations";
import { InvoicePattern } from "@/interface/panel/invoicePattern";

export const PANEL_MUTATIONS: MutationTree<PanelState> = {
  // base information

  [MUTATIONS.panel.setCompanyNameOfBaseInformation](
    state,
    value: string
  ): void {
    state.baseInformation.companyName = value;
  },
  [MUTATIONS.panel.setRegistrationNumberOfBaseInformation](
    state,
    value: string
  ): void {
    state.baseInformation.regNumber = value;
  },
  [MUTATIONS.panel.setTaxMemoryCodeOfBaseInformation](
    state,
    value: string
  ): void {
    state.baseInformation.memoryCode = value;
  },
  [MUTATIONS.panel.setNationalIdOfBaseInformation](state, value: string): void {
    state.baseInformation.nationalCode = value;
  },
  [MUTATIONS.panel.setEcoonomicalNumberOfBaseInformation](
    state,
    value: string
  ): void {
    state.baseInformation.economicCode = value;
  },
  [MUTATIONS.panel.setEncryptionIdOfBaseInformation](
    state,
    value: string
  ): void {
    state.baseInformation.encriptionKeyId = value;
  },

  // invoice
  [MUTATIONS.panel.setInvoiceListBodyData](state, value: string): void {
    state.invoiceList.push(value);
  },

  // delete item of invoices list before submit
  [MUTATIONS.panel.deleteInvoiceItemOfInvoiceBodyDataBeforeSubmit](
    state,
    index: number
  ): void {
    state.invoiceList.splice(index, 1);
  },

  // set new ip address
  [MUTATIONS.panel.setNewIpAddressData](state, value: string): void {
    state.changeIpAddress.unshift(value);
  },

  // delete ip address data
  [MUTATIONS.panel.deleteIpAddressData](state, value: string): void {
    state.changeIpAddress.splice(Number(value), 1);
  },

  // set invoice type value => 1 | 2
  [MUTATIONS.panel.setInvoiceTypeValue](state, value: 0 | 1 | 2): void {
    state.selectInvoiceType = value;
  },

  // set invoice pattern
  [MUTATIONS.panel.setInvoicePatternType](state, value: InvoicePattern): void {
    state.selectPatternInvoice.title = value.title;
    state.selectPatternInvoice.id = value.id;
  },

  // set taxid in invoice
  [MUTATIONS.panel.setTaxidInInvoice](state, value: string): void {
    state.moadianInvoiceHeader.taxid = value;
  },

  // set indatim
  [MUTATIONS.panel.setIndatimInInvoice](state, value: string): void {
    state.moadianInvoiceHeader.indatim = value;
  },

  // set tob
  [MUTATIONS.panel.setTobInInvoice](state, value: string): void {
    state.moadianInvoiceHeader.tob = value;
  },

  // set Indati2m
  [MUTATIONS.panel.setIndati2mInInvoice](state, value: string): void {
    state.moadianInvoiceHeader.Indati2m = value;
  },

  // set inno
  [MUTATIONS.panel.setInnoInInvoice](state, value: string): void {
    state.moadianInvoiceHeader.inno = value;
  },

  // set tins
  [MUTATIONS.panel.setTinsInInvoice](state, value: string): void {
    state.moadianInvoiceHeader.tins = value;
  },

  // set bid
  [MUTATIONS.panel.setBidInInvoice](state, value: null): void {
    state.moadianInvoiceHeader.bid = value;
  },

  // set irtaxid
  [MUTATIONS.panel.setIrtaxidInInvoice](state, value: string): void {
    state.moadianInvoiceHeader.irtaxid = value;
  },

  // set sbc
  [MUTATIONS.panel.setSbcInInvoice](state, value: string): void {
    state.moadianInvoiceHeader.sbc = value;
  },

  // set crn
  [MUTATIONS.panel.setCrnInInvoice](state, value: string): void {
    state.moadianInvoiceHeader.crn = value;
  },

  // set tinb
  [MUTATIONS.panel.setTinbInInvoice](state, value: string): void {
    state.moadianInvoiceHeader.tinb = value;
  },

  // set scc
  [MUTATIONS.panel.setSccInInvoice](state, value: string): void {
    state.moadianInvoiceHeader.scc = value;
  },

  // set scln
  [MUTATIONS.panel.setSclnInInvoice](state, value: string): void {
    state.moadianInvoiceHeader.scln = value;
  },

  // set cdcn
  [MUTATIONS.panel.setCdcnInInvoice](state, value: string): void {
    state.moadianInvoiceHeader.cdcn = value;
  },

  // set cdcd
  [MUTATIONS.panel.setCdcdInInvoice](state, value: string): void {
    state.moadianInvoiceHeader.cdcd = value;
  },

  // set setm
  [MUTATIONS.panel.setSetmInInvoice](state, value: string): void {
    state.moadianInvoiceHeader.setm = value;
  },

  // set billid
  [MUTATIONS.panel.setBillidInInvoice](state, value: string): void {
    state.moadianInvoiceHeader.billid = value;
  },

  // set tax17
  [MUTATIONS.panel.setTax17InInvoice](state, value: string): void {
    state.moadianInvoiceHeader.tax17 = value;
  },

  // set ft
  [MUTATIONS.panel.setFtInInvoice](state, value: string): void {
    state.moadianInvoiceHeader.ft = value;
  },

  // set bpc
  [MUTATIONS.panel.setBpcInInvoice](state, value: string): void {
    state.moadianInvoiceHeader.bpc = value;
  },

  // set bbc
  [MUTATIONS.panel.setBbcInInvoice](state, value: null): void {
    state.moadianInvoiceHeader.bbc = value;
  },

  // set bpn
  [MUTATIONS.panel.setBpnInInvoice](state, value: string): void {
    state.moadianInvoiceHeader.bpn = value;
  },

  // set cap
  [MUTATIONS.panel.setCapInInvoice](state, value: string): void {
    state.moadianInvoiceHeader.cap = value;
  },

  // set insp
  [MUTATIONS.panel.setInspInInvoice](state, value: string): void {
    state.moadianInvoiceHeader.insp = value;
  },

  // set invoice body

  // set sstid
  [MUTATIONS.panel.setSstidInInvoiceBody](state, value: number): void {
    state.MoadianInvoiceBody.sstid = value;
  },

  // set sstt
  [MUTATIONS.panel.setSsttInInvoiceBody](state, value: string): void {
    state.MoadianInvoiceBody.sstt = value;
  },

  // set am
  [MUTATIONS.panel.setAmInInvoiceBody](state, value: number): void {
    state.MoadianInvoiceBody.am = value;
  },

  // set mu
  [MUTATIONS.panel.setMuInInvoiceBody](state, value: number): void {
    state.MoadianInvoiceBody.mu = value;
  },

  // set nw
  [MUTATIONS.panel.setNwInInvoiceBody](state, value: number): void {
    state.MoadianInvoiceBody.nw = value;
  },

  // set prdis
  [MUTATIONS.panel.setPrdisInInvoicebody](state, value: number): void {
    state.MoadianInvoiceBody.prdis = value;
  },

  // set dis
  [MUTATIONS.panel.setDisInInvoiceBody](state, value: number): void {
    state.MoadianInvoiceBody.dis = value;
  },

  // set vra
  [MUTATIONS.panel.setVraInInvoiceBody](state, value: number): void {
    state.MoadianInvoiceBody.vra = value;
  },

  // set exr
  [MUTATIONS.panel.setExrInInvoiceBody](state, value: number): void {
    state.MoadianInvoiceBody.exr = value;
  },

  // set ssrv
  [MUTATIONS.panel.setSsrvInInvoiceBody](state, value: number): void {
    state.MoadianInvoiceBody.ssrv = value;
  },

  // set sscv
  [MUTATIONS.panel.setSscvInInvoiceBody](state, value: number): void {
    state.MoadianInvoiceBody.sscv = value;
  },

  // set odt
  [MUTATIONS.panel.setOdtInInvoiceBody](state, value: string): void {
    state.MoadianInvoiceBody.odt = value;
  },

  // set odr
  [MUTATIONS.panel.setOdrInInvoiceBody](state, value: number): void {
    state.MoadianInvoiceBody.odr = value;
  },

  // set iinn in payment
  [MUTATIONS.panel.setIinnInInvoicePayment](state, value: string): void {
    state.MoadianInvoicePayment.iinn = value;
  },

  // set acn in payment
  [MUTATIONS.panel.setAcnInInvoicePayment](state, value: string): void {
    state.MoadianInvoicePayment.acn = value;
  },

  // set pid in payment
  [MUTATIONS.panel.setPidInInvoicePayment](state, value: string): void {
    state.MoadianInvoicePayment.pid = value;
  },

  // set trn in payment
  [MUTATIONS.panel.setTrnInInvoicePayment](state, value: string): void {
    state.MoadianInvoicePayment.trn = value;
  },

  // set pcn in payment
  [MUTATIONS.panel.setPcnInInvoicePayment](state, value: string): void {
    state.MoadianInvoicePayment.pcn = value;
  },

  // set trmn in payment
  [MUTATIONS.panel.setTrmnInInvoicePayment](state, value: string): void {
    state.MoadianInvoicePayment.trmn = value;
  },

  // set pv in payment
  [MUTATIONS.panel.setPvInInvoicePayment](state, value: number): void {
    state.MoadianInvoicePayment.pv = value;
  },

  // set pdt in payment
  [MUTATIONS.panel.setPdtInInvoicePayment](state, value: number): void {
    state.MoadianInvoicePayment.pdt = value;
  },

  // push payment details to moadian payments list
  [MUTATIONS.panel.pushPaymentInformationToPaymentList](state): void {
    const paymentDetails = state.MoadianInvoicePayment;
    state.moadianInvoicePaymentList.push(paymentDetails);
  },

  // choose invoice list type for get invoices list (select box)
  [MUTATIONS.panel.setInvoiceListType](state, value: number): void {
    state.getInvoicesListFilter.type = value;
  },

  // set search of get invoices list filter
  [MUTATIONS.panel.setSerachOfGetInvoicesListFilter](
    state,
    value: string
  ): void {
    state.getInvoicesListFilter.search = value;
  },

  // update invoices list after call request
  [MUTATIONS.panel.submitGetInvoicesList](state, data): void {
    state.getInvoicesList = data;
  },

  // push invoice updating data (request)
  [MUTATIONS.panel.invoiceUpdatingCallRequest](state, data): void {
    state.invoiceUpdating = data;
  },

  // update fields of invoice updating (header invoice)
  // update tinb
  [MUTATIONS.panel.updateTinbOfInvoiceUpdating](state, value: string): void {
    state.invoiceUpdating.tinb = value;
  },

  // update fields of invoice updating (body invoice)
  [MUTATIONS.panel.updateSstidBodyOfInvoiceUpdating](
    state,
    value: number
  ): void {
    state.invoiceUpdating.sstid = value;
  },

  // set invoice id to invoice ids
  [MUTATIONS.panel.setInvoiceIdsFromSubmitToMoadian](
    state,
    value: string
  ): void {
    state.invoiceIds.push(value);
  },

  // pop invoice id in invoice ids list
  [MUTATIONS.panel.popInvoiceIdsForSubmitToMoadian](
    state,
    value: string
  ): void {
    if (state.invoiceIds.length >= 1) {
      const index = state.invoiceIds.findIndex((item) => item === value);
      state.invoiceIds.splice(index, 1);
    }
  },

  // push to invoices atatus list
  [MUTATIONS.panel.pushItemToInvoiceStatusList](state, value: any): void {
    state.invoicesItemWithId.push(value);
  },

  // pop item from invoices status list
  [MUTATIONS.panel.popItemFromInvoiceStatusList](state, value: any): void {
    if (state.invoicesItemWithId.length >= 1) {
      const index = state.invoicesItemWithId.findIndex(
        (item) => item === value
      );
      state.invoicesItemWithId.splice(index, 1);
    }
  },
};
