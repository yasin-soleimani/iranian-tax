// http://109.206.252.237:3020/v1/docs#/

const API = {
  auth: {
    register: "v1/users/register",
    verifyAccount: "v1/users/verify",
    login: "v1/users/login",
    resendCode: "v1/users/code/resend",
    verifyCode: "v1/users/verify/code",
    resetPassword: "v1/users/reset/password",
  },

  panel: {
    baseInformation: "v1/users/manage/kyc",
    getProfileInformation: "v1/users/manage/kyc",
    getManageInfo: "v1/users/manage/info",
    refreshApiKey: "v1/users/manage/api-key",
    updateIpAddress: "v1/users/manage/api-key/ip",
    uploadPrivateKey: "v1/users/manage/private-key",
    // moadian invoice
    createNewInvoice: "v1/invoices",
    // get invoices list
    getInvoicesList: "v1/invoices",
    // get invoice details
    getInvoiceDetails: "v1/invoices",
    // send updated invoice
    sendUpdatedInvoice: "v1/invoices",
    // send one invoice
    sendOneInvoice: "v1/moadian/invoices/send",
    // send invoice ids list
    sendInvoiceIdsList: "v1/moadian/invoices/send",
    // get economic details
    getEconomicCodeDetails: "v1/moadian/common/economic/",
    // get fiscal details
    getFiscalDetails: "v1/moadian/common/fiscal",
    // get status invoices
    getStatusInvoices: "v1/moadian/invoices/status",
  },
};

export default API;
