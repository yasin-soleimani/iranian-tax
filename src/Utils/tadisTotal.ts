import store from "@/store";

function TadisTotal(invoices: any): void {
  store.state.panel.moadianInvoiceHeader.tadis = "0";
  for (let i = 0; i < invoices.length; i++) {
    if (Number(invoices[i].adis) !== 0) {
      store.state.panel.moadianInvoiceHeader.tadis += Number(invoices[i].adis);
    }
  }
}

export default TadisTotal;
