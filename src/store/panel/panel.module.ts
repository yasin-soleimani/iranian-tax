import { Module } from "vuex";
import { RootState } from "..";
import { PANEL_ACTIONS } from "./panel.action";
import { PANEL_GETTERS } from "./panel.getter";
import { PANEL_MUTATIONS } from "./panel.mutation";

// interfaces

import { BaseInformation } from "@/interface/panel/baseInformation.model";
import { CustomerRegistrationForm } from "@/interface/panel/customerRegistrationForm.model";

import { ManageInfo } from "@/interface/panel/manageInfo";
import { InvoicePattern } from "@/interface/panel/invoicePattern";
import { MoadianInvoiceHeader } from "@/interface/panel/invoiceHeader";
import { MoadianInvoiceBody } from "@/interface/panel/moadianInvoiceBody";
import { MoadianInvoicePayment } from "../../interface/panel/moadianInvoicePayment";
import { GetInvoicesListFilter } from "@/interface/panel/getInvoicesList.model";

export interface PanelState {
  baseInformation: BaseInformation;
  privateKeyFile: any;
  manageInfo: ManageInfo;
  changeIpAddress: string[];
  customerRegistrationForm: CustomerRegistrationForm;
  invoiceList: string[];
  selectInvoiceType: 0 | 1 | 2;
  selectPatternInvoice: InvoicePattern;
  moadianInvoiceHeader: MoadianInvoiceHeader;
  MoadianInvoiceBody: MoadianInvoiceBody;
  MoadianInvoicePayment: MoadianInvoicePayment;
  moadianInvoicePaymentList: any[];
  getInvoicesListFilter: GetInvoicesListFilter;
  getInvoicesList: any[];
  invoiceUpdating: any;
  invoiceIds: string[];
  statusInvoiceData: any;
  invoicesItemWithId: any[];
}

const INITIAL_panel: PanelState = {
  // profile {}

  baseInformation: {
    type: 0,
    companyName: "",
    regNumber: "",
    memoryCode: "",
    nationalCode: "",
    economicCode: "",
    encriptionKeyId: "",
  },

  // file uploader input
  privateKeyFile: {
    privateKey: "",
  },

  // manage info

  manageInfo: {
    mobile: "",
    apiKey: "",
    balance: 0,
    activated: true,
    ipAddresses: [],
  },

  // change ip address
  changeIpAddress: [],

  // customer registration

  customerRegistrationForm: {
    fullname: "",
    nationalId: "",
    ecoonomicalNumber: "",
  },

  // invoice

  // select invoice type => 1 or 2
  selectInvoiceType: 0,

  // select pattern invoice => 1 ,...., 7
  selectPatternInvoice: {
    title: "",
    id: 1,
  },

  invoiceList: [],

  // model invoice header
  moadianInvoiceHeader: {
    taxid: "0", // شماره منحصر به فرد  مالیاتی
    indatim: "0", // تاریخ و زمان صدور  صورتحساب(میلادی)
    Indati2m: "0", //تاریخ و زمان ایجاد  صورتحساب(میلادی)
    inty: 0, //نوع صورتحساب
    inno: "0", // سریال صورتحساب  داخلی حافظه مالیاتی
    irtaxid: "0", // شماره منحصر به فرد  مالیاتی صورتحساب  مرجع
    inp: "0", // الگوی صورتحساب
    ins: "1", // موضوع صورتحساب
    tins: "0", // شماره اقتصادی  فروشنده
    tob: "1", // نوع شخص خریدار
    bid: "0", // شماره/شناسه  ملی/شناسه مشاركت  مدنی/كد فراگیر خریدار
    tinb: "0", //شماره اقتصادی خریدار
    sbc: "0", //كد شعبه فروشنده
    bpc: "0", // كد پستی خریدار
    bbc: "0", // كد شعبه خریدار
    ft: "0", // نوع پرواز
    bpn: "0", // شماره گذرنامه خریدار
    scln: "0", // شماره پروانه گمركی
    cdcd: "0", // تاریخ کوتاژ
    cdcn: "0", // شماره کوتاژ
    scc: "0", // كد گمرک محل اظهار
    crn: "0", //شناسه یکتای ثبت  قرارداد فروشنده
    billid: "0", // شماره اشتراک/ شناسه  قبض بهره بردار
    tprdis: "0", // مجموع مبلغ قبل از  كسر تخفیف
    tdis: "0", // مجموع تخفیفات
    tadis: "0", // مجموع مبلغ پس از  كسر تخفیف
    tvam: "0", // مجموع مالیات بر ارزش  افزوده
    todam: "0", // مجموع سایر مالیات،  عوارض و وجوه قانونی
    tbill: "0", // مجموع صورتحساب
    tonw: "0", // مجموع وزن خالص
    torv: "0", // مجموع ارزش ریالی
    tocv: "0", // مجموع ارزش ارزی
    setm: "1", // روش تسویه
    cap: "0", // مبلغ پرداختی نقدی
    insp: "0", // مبلغ پرداختی نسیه
    tvop: "0", // مجموع سهم مالیات بر  ارزش افزوده از پرداخت
    tax17: "0", // مالیات موضوع ماده17
  },

  // model invoice body
  MoadianInvoiceBody: {
    sstid: 0, // شناسه كالا/خدمت
    sstt: null, // شرح كالا/خدمت
    am: 0, // تعداد/مقدار
    mu: null, // واحد اندازهگیری
    nw: null, // وزن خالص
    fee: 0, // مبلغ واحد
    cfee: null, // میزان ارز
    cut: null, // نوع ارز
    exr: null, // نرخ برابری ارز با ریال
    ssrv: null, // ارزش ریالی کالا
    sscv: null, // ارزش ارزی کالا
    prdis: 0, // مبلغ قبل از تخفیف
    dis: 0, // مبلغ تخفیف
    adis: 0, // مبلغ بعد از تخفیف
    vra: 0, // نرخ مالیات بر  ارزشافزوده
    vam: 0, // مبلغ مالیات بر ارزش  افزوده
    odt: null, // موضوع سایر مالیات و  عوارض
    odr: null, // نرخ سایر مالیات و  عوارض
    odam: null, // مبلغ سایر مالیات و  عوارض
    olt: null, // موضوع سایر وجوه  قانونی
    olr: null, // نرخ سایروجوه قانونی
    olam: null, // مبلغ سایر وجوه قانونی
    consfee: null, // اجرت ساخت
    spro: null, // سود فروشنده
    bros: null, // حق العمل
    tcpbs: null, // جمع كل اجرت،حق-  العمل و سود
    cop: null, // سهم نقدی از پرداخت
    vop: null, // سهم ارزش افزوده از  پرداخت
    bsrn: "0", // شناسه یکتای ثبت  قرارداد حق العملکاری
    tsstam: 0, // مبلغ كل كالا/خدمت
  },

  MoadianInvoicePayment: {
    iinn: "0", // شماره سوییچ پرداخت
    acn: "0", // شماره پذیرنده  فروشگاهی
    trmn: "0", // شماره پایانه
    trn: "0", // شماره پیگیری
    pcn: "0", // شماره كارت پرداخت  كننده صورتحساب
    pid: "0", // شماره/شناسه ملی/كد  فراگیر اتباع غیر ایرانی  پرداخت كننده  صورتحساب
    pdt: 0, // تاریخ و زمان پرداخت  صورتحساب
    pv: 0, // مبلغ پرداختی
  },

  moadianInvoicePaymentList: [],

  // choose invoice type for get invoices list (select box)

  getInvoicesListFilter: {
    type: 0,
    search: "",
    page: 1,
  },

  // save invoices list (request response)
  getInvoicesList: [],

  // invoice updating data from database
  invoiceUpdating: null,

  // invoice ids for send multi ids to server (request data)
  invoiceIds: [],
  invoicesItemWithId: [],

  // status invoice data (get from database)
  statusInvoiceData: null,
};

export const panel: Module<PanelState, RootState> = {
  actions: PANEL_ACTIONS,
  getters: PANEL_GETTERS,
  mutations: PANEL_MUTATIONS,
  state: INITIAL_panel,
  namespaced: true,
};
