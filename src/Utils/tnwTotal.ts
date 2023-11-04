import store from "@/store";

function TnwTotal(invoices: any): void {
  store.state.panel.moadianInvoiceHeader.tonw = "0";

  for (let i = 0; i < invoices.length; i++) {
    if (Number(invoices[i].nw) !== 0) {
      store.state.panel.moadianInvoiceHeader.tonw += Number(invoices[i].nw);
    }
  }
}

export default TnwTotal;
