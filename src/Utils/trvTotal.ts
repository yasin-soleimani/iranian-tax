import store from "@/store";

function TrvTotal(invoices: any): void {
  store.state.panel.moadianInvoiceHeader.torv = "0";

  for (let i = 0; i < invoices.length; i++) {
    if (Number(invoices[i].ssrv) !== 0) {
      store.state.panel.moadianInvoiceHeader.torv += Number(invoices[i].ssrv);
    }
  }
}

export default TrvTotal;
