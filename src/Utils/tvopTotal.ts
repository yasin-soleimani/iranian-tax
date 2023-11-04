import store from "@/store";

function TvopTotal(invoices: any): void {
  store.state.panel.moadianInvoiceHeader.tvop = "0";

  for (let i = 0; i < invoices.length; i++) {
    if (Number(invoices[i].vop) !== 0) {
      store.state.panel.moadianInvoiceHeader.tvop += Number(invoices[i].vop);
    }
  }
}

export default TvopTotal;
