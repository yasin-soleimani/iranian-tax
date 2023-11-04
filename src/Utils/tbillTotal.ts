import store from "@/store";

function TbillTotal(invoices: any): void {
  store.state.panel.moadianInvoiceHeader.tbill = "0";

  for (let i = 0; i < invoices.length; i++) {
    if (Number(invoices[i].tsstam) !== 0) {
      store.state.panel.moadianInvoiceHeader.tbill += Number(
        invoices[i].tsstam
      );
    }
  }
}

export default TbillTotal;
