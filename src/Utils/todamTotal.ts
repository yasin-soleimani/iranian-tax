import store from "@/store";

function TodamTotal(invoices: any): void {
  store.state.panel.moadianInvoiceHeader.todam = "0";

  for (let i = 0; i < invoices.length; i++) {
    // if (Number(invoices[i].odt) !== 0 && Number(invoices[i].olr) !== 0) {
    store.state.panel.moadianInvoiceHeader.todam +=
      Number(invoices[i].odr) + Number(invoices[i].olr);
    // }
  }
}

export default TodamTotal;
