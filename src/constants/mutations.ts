export const MUTATIONS = {
  app: {},
  auth: {
    // register form
    setMobileDataRegisterForm: "setMobileDataRegisterForm",
    setPasswordDataRegisterForm: "setPasswordDataRegisterForm",
    setConfirmDataRegisterForm: "setConfirmDataRegisterForm",
    // login form
    setMobileDataLoginForm: "setMobileDataLoginForm",
    setPasswordDataLoginForm: "setPasswordDataLoginForm",
    // verify account
    setVerifyAccountData: "setVerifyAccountData",
    // resend code
    setMobileResendCodeData: "setMobileResendCodeData",
    // forget password
    setForgetPasswordCode: "setForgetPasswordCode",
    // reset password
    setNewPasswordResetPassword: "setNewPasswordResetPassword",
    setConfirmResetPassword: "setConfirmResetPassword",
  },
  panel: {
    // base information
    setCompanyNameOfBaseInformation: "setCompanyNameOfBaseInformation",
    setRegistrationNumberOfBaseInformation:
      "setRegistrationNumberOfBaseInformation",
    setTaxMemoryCodeOfBaseInformation: "setTaxMemoryCodeOfBaseInformation",
    setNationalIdOfBaseInformation: "setNationalIdOfBaseInformation",
    setEcoonomicalNumberOfBaseInformation:
      "setEcoonomicalNumberOfBaseInformation",
    setEncryptionIdOfBaseInformation: "setEncryptionIdOfBaseInformation",
    // invoice
    // delete item of invoices list before submit
    deleteInvoiceItemOfInvoiceBodyDataBeforeSubmit:
      "deleteInvoiceItemOfInvoiceBodyDataBeforeSubmit",
    setInvoiceListBodyData: "setInvoiceListBodyData",
    // set new ip address
    setNewIpAddressData: "setNewIpAddressData",
    // delete ip address data
    deleteIpAddressData: "deleteIpAddressData",
    // set invoice type value
    setInvoiceTypeValue: "setInvoiceTypeValue",
    // set invoice pattern
    setInvoicePatternType: "setInvoicePatternType",
    // set taxid
    setTaxidInInvoice: "setTaxidInInvoice",
    // set datim
    setIndatimInInvoice: "setIndatimInInvoice",
    // set tob
    setTobInInvoice: "setTobInInvoice",
    // set Indati2m
    setIndati2mInInvoice: "setIndati2mInInvoice",
    // set inno
    setInnoInInvoice: "setInnoInInvoice",
    // set tins
    setTinsInInvoice: "setTinsInInvoice",
    // set bid
    setBidInInvoice: "setBidInInvoice",
    // set irtaxid
    setIrtaxidInInvoice: "setIrtaxidInInvoice",
    // set sbc
    setSbcInInvoice: "setSbcInInvoice",
    // set crn
    setCrnInInvoice: "setCrnInInvoice",
    // set tinb
    setTinbInInvoice: "setTinbInInvoice",
    // set scc
    setSccInInvoice: "setSccInInvoice",
    // set scln
    setSclnInInvoice: "setSclnInInvoice",
    // set cdcn
    setCdcnInInvoice: "setCdcnInInvoice",
    // set cdcd
    setCdcdInInvoice: "setCdcdInInvoice",
    // set setm
    setSetmInInvoice: "setSetmInInvoice",
    // set billid
    setBillidInInvoice: "setBillidInInvoice",
    // set tax17
    setTax17InInvoice: "setTax17InInvoice",
    // set ft
    setFtInInvoice: "setFtInInvoice",
    // set bpc
    setBpcInInvoice: "setBpcInInvoice",
    // set bbc
    setBbcInInvoice: "setBbcInInvoice",
    // set bpn
    setBpnInInvoice: "setBpnInInvoice",
    // set cap
    setCapInInvoice: "setCapInInvoice",
    // set insp
    setInspInInvoice: "setInspInInvoice",

    // set invoice body

    // set sstid
    setSstidInInvoiceBody: "setSstidInInvoiceBody",
    // set sstt
    setSsttInInvoiceBody: "setSsttInInvoiceBody",
    // set am
    setAmInInvoiceBody: "setAmInInvoiceBody",
    // set mu
    setMuInInvoiceBody: "setMuInInvoiceBody",
    // set nw
    setNwInInvoiceBody: "setNwInInvoiceBody",
    // set prdis
    setPrdisInInvoicebody: "setPrdisInInvoicebody",
    // set dis
    setDisInInvoiceBody: "setDisInInvoiceBody",
    // set vra
    setVraInInvoiceBody: "setVraInInvoiceBody",
    // set exr
    setExrInInvoiceBody: "setExrInInvoiceBody",
    // set ssrv
    setSsrvInInvoiceBody: "setSsrvInInvoiceBody",
    // set sscv
    setSscvInInvoiceBody: "setSscvInInvoiceBody",
    // set odt
    setOdtInInvoiceBody: "setOdtInInvoiceBody",
    // set odr
    setOdrInInvoiceBody: "setOdrInInvoiceBody",

    // set key in invoice payment
    // set iinn
    setIinnInInvoicePayment: "setIinnInInvoicePayment",
    // set acn
    setAcnInInvoicePayment: "setAcnInInvoicePayment",
    // set pid
    setPidInInvoicePayment: "setPidInInvoicePayment",
    // set trn
    setTrnInInvoicePayment: "setTrnInInvoicePayment",
    // set pcn
    setPcnInInvoicePayment: "setPcnInInvoicePayment",
    // set trmn
    setTrmnInInvoicePayment: "setTrmnInInvoicePayment",
    // set pv
    setPvInInvoicePayment: "setPvInInvoicePayment",
    // set pdt
    setPdtInInvoicePayment: "setPdtInInvoicePayment",

    // push payment details to moadina payments list
    pushPaymentInformationToPaymentList: "pushPaymentInformationToPaymentList",

    // choose invoice list type for get invoises list (select box)
    setInvoiceListType: "setInvoiceListType",
    // set search of get invoices lisr filter
    setSerachOfGetInvoicesListFilter: "setSerachOfGetInvoicesListFilter",
    // submit get invoices list (request)
    submitGetInvoicesList: "submitGetInvoicesList",
    // invoice updating (request)
    invoiceUpdatingCallRequest: "invoiceUpdatingCallRequest",

    // update fields of invoice updating (header invoice)
    // update tinb
    updateTinbOfInvoiceUpdating: "updateTinbOfInvoiceUpdating",

    // update fields of invoice updating (body invoice)
    updateSstidBodyOfInvoiceUpdating: "updateSstidBodyOfInvoiceUpdating",
    // set invoice id in invoice ids list for submit to moadian
    setInvoiceIdsFromSubmitToMoadian: "setInvoiceIdsFromSubmitToMoadian",
    // pop invoice id in invoice ids list from  submit moadian
    popInvoiceIdsForSubmitToMoadian: "popInvoiceIdsForSubmitToMoadian",
    // push to invoices status list
    pushItemToInvoiceStatusList: "pushItemToInvoiceStatusList",
    // pop item from invoices status list
    popItemFromInvoiceStatusList: "popItemFromInvoiceStatusList",
  },
};
