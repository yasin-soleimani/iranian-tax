import store from "@/store";

function TvamTotal(invoices: any): void {
  store.state.panel.moadianInvoiceHeader.tvam = "0";

  for (let i = 0; i < invoices.length; i++) {
    if (Number(invoices[i].vam) !== 0) {
      store.state.panel.moadianInvoiceHeader.tvam += Number(invoices[i].vam);
    }
  }
}

export default TvamTotal;
