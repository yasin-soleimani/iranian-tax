export interface MoadianInvoiceBody {
  sstid: number; // شناسه كالا/خدمت
  sstt: string | null; // شرح كالا/خدمت
  am: number; // تعداد/مقدار
  mu: number | null; // واحد اندازهگیری
  nw: number | null; // وزن خالص
  fee: number | null; // مبلغ واحد
  cfee: number | null; // میزان ارز
  cut: number | null; // نوع ارز
  exr: number | null; // نرخ برابری ارز با ریال
  ssrv: number | null; // ارزش ریالی کالا
  sscv: number | null; // ارزش ارزی کالا
  prdis: number; // مبلغ قبل از تخفیف
  dis: number; // مبلغ تخفیف
  adis: number; // مبلغ بعد از تخفیف
  vra: number; // نرخ مالیات بر  ارزشافزوده
  vam: number; // مبلغ مالیات بر ارزش  افزوده
  odt: string | null; // موضوع سایر مالیات و  عوارض
  odr: number | null; // نرخ سایر مالیات و  عوارض
  odam: number | null; // مبلغ سایر مالیات و  عوارض
  olt: string | null; // موضوع سایر وجوه  قانونی
  olr: number | null; // نرخ سایروجوه قانونی
  olam: number | null; // مبلغ سایر وجوه قانونی
  consfee: number | null; // اجرت ساخت
  spro: number | null; // سود فروشنده
  bros: number | null; // حق العمل
  bsrn: string | null; // شناسه یکتای ثبت  قرارداد حق العملکاری
  tcpbs: number | null; // جمع كل اجرت،حق-  العمل و سود
  cop: number | null; // سهم نقدی از پرداخت
  vop: number | null; // سهم ارزش افزوده از  پرداخت
  tsstam: number; // مبلغ كل كالا/خدمت
}
