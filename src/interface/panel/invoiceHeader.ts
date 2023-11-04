export interface MoadianInvoiceHeader {
  taxid: string; // شماره منحصر به فرد  مالیاتی
  indatim: string; // تاریخ و زمان صدور  صورتحساب(میلادی)
  Indati2m: string; //تاریخ و زمان ایجاد  صورتحساب(میلادی)
  inty: number; //نوع صورتحساب
  inno: string; // سریال صورتحساب  داخلی حافظه مالیاتی
  irtaxid: string; // شماره منحصر به فرد  مالیاتی صورتحساب  مرجع
  inp: string; // الگوی صورتحساب
  ins: string; // موضوع صورتحساب
  tins: string; // شماره اقتصادی  فروشنده
  tob: string; // نوع شخص خریدار
  bid: string; // شماره/شناسه  ملی/شناسه مشاركت  مدنی/كد فراگیر خریدار
  tinb: string; //شماره اقتصادی خریدار
  sbc: string; //كد شعبه فروشنده
  bpc: string; // كد پستی خریدار
  bbc: string; // كد شعبه خریدار
  ft: string; // نوع پرواز
  bpn: string; // شماره گذرنامه خریدار
  scln: string; // شماره پروانه گمركی
  cdcd: string; // تاریخ کوتاژ
  cdcn: string; // شماره کوتاژ
  scc: string; // كد گمرک محل اظهار
  crn: string; //شناسه یکتای ثبت  قرارداد فروشنده
  billid: string; // شماره اشتراک/ شناسه  قبض بهره بردار
  tprdis: string; // مجموع مبلغ قبل از  كسر تخفیف
  tdis: string; // مجموع تخفیفات
  tadis: string; // مجموع مبلغ پس از  كسر تخفیف
  tvam: string; // مجموع مالیات بر ارزش  افزوده
  todam: string; // مجموع سایر مالیات،  عوارض و وجوه قانونی
  tbill: string; // مجموع صورتحساب
  tonw: string; // مجموع وزن خالص
  torv: string; // مجموع ارزش ریالی
  tocv: string; // مجموع ارزش ارزی
  setm: string; // روش تسویه
  cap: string; // مبلغ پرداختی نقدی
  insp: string; // مبلغ پرداختی نسیه
  tvop: string; // مجموع سهم مالیات بر  ارزش افزوده از پرداخت
  tax17: string; // مالیات موضوع ماده17
}
