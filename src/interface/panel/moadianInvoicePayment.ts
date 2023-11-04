export interface MoadianInvoicePayment {
  iinn: string | null; // شماره سوییچ پرداخت
  acn: string | null; // شماره پذیرنده  فروشگاهی
  trmn: string | null; // شماره پایانه
  trn: string | null; // شماره پیگیری
  pcn: string | null; // شماره كارت پرداخت  كننده صورتحساب
  pid: string | null; // شماره/شناسه ملی/كد  فراگیر اتباع غیر ایرانی  پرداخت كننده  صورتحساب
  pdt: number; // تاریخ و زمان پرداخت  صورتحساب
  pv: number | null; // مبلغ پرداختی
}
