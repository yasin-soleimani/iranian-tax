function ResetPaymentInformationState(paymentInformation: any): void {
  Object.keys(paymentInformation).forEach((item) => {
    paymentInformation[item] = null;
  });
}

export default ResetPaymentInformationState;
