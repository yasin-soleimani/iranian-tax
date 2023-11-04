import store from "@/store";

function TdisTotal(invoices: any): void {
  store.state.panel.moadianInvoiceHeader.tdis = "0";

  for (let i = 0; i < invoices.length; i++) {
    if (Number(invoices[i].dis) !== 0) {
      store.state.panel.moadianInvoiceHeader.tdis += Number(invoices[i].dis);
    }
  }
}

export default TdisTotal;
