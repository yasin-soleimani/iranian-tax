import store from "@/store";

function TprdisTotal(invoices: any): void {
  store.state.panel.moadianInvoiceHeader.tprdis = "0";

  for (let i = 0; i < invoices.length; i++) {
    if (Number(invoices[i].prdis) !== 0) {
      store.state.panel.moadianInvoiceHeader.tprdis += Number(
        invoices[i].prdis
      );
    }
  }
}

export default TprdisTotal;
