import store from "@/store";

function TcvTotal(invoices: any): void {
  store.state.panel.moadianInvoiceHeader.tocv = "0";

  for (let i = 0; i < invoices.length; i++) {
    if (Number(invoices[i].sscv) !== 0) {
      store.state.panel.moadianInvoiceHeader.tocv += Number(invoices[i].sscv);
    }
  }
}

export default TcvTotal;
