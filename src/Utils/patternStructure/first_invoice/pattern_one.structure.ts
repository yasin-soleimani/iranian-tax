const Pattern_one = {
  header: {
    fields: [
      {
        title: "نوع شخص خریدار",
        key: "tob",
      },
      {
        title: "شماره منحصر به فرد مرجع",
        key: "irtaxid",
      },
      {
        title: "تاریخ ایجاد صورت حساب",
        key: "Indati2m",
      },
      {
        title: "تاریخ صدور صورت حساب",
        key: "indatim",
      },
      {
        title: "روش تسویه",
        key: "setm",
      },
      {
        title: "شماره اقتصادی فروشنده",
        key: "tins",
      },
      {
        title: "شماره اقتصادی خریدار",
        key: "tinb",
      },
      {
        title: "شناسه ملی(حقوقی), شماره ملی(حقیقی)",
        key: "bid",
      },
      {
        title: "مبلغ پرداختی نقدی",
        key: "cap",
      },
      {
        title: "مبلغ نسیه",
        key: "insp",
      },
      {
        title: "مجموع سایر مالیات، عوارض و وجوه قانونی",
        key: "todam",
      },
      {
        title: "مجموع مبلغ قبل تخفیف",
        key: "tprdis",
      },
      {
        title: "مجموع مبلغ پس تخفیف",
        key: "tadis",
      },
      {
        title: "مجموع مالیات بر ارزش افزوده",
        key: "tvam",
      },
      {
        title: "مجموع صورتحساب",
        key: "tbill",
      },
    ],
  },

  body: {
    fields: [
      {
        title: "شناسه کالا/خدمات",
        key: "sstid",
      },
      {
        title: "شرح کالا/خدمات",
        key: "sstt",
      },
      {
        title: "تعداد /مقدار",
        key: "am",
      },
      {
        title: "واحد اندازه گیری",
        key: "mu",
      },
      {
        title: "مبلغ(ریال/ارز)",
        key: "fee",
      },
      {
        title: "مبلغ ارز",
        key: "cfee",
      },
      {
        title: "نوع ارز",
        key: "cut",
      },
      {
        title: "نرخ برابری ارز با ریال",
        key: "exr",
      },
      {
        title: "مبلغ قبل از تخفیف",
        key: "prdis",
      },
      {
        title: "مبلغ تخفیف",
        key: "dis",
      },
      {
        title: "مبلغ بعد از تخفیف",
        key: "adis",
      },
      {
        title: "نرخ مالیات بر ارزش افزوده",
        key: "vra",
      },
      {
        title: "موضوع سایر مالیات,عوارض",
        key: "todam",
      },
      {
        title: "مبلغ مالیات بر ارزش افزوده",
        key: "vam",
      },
      {
        title: "مبلغ کل کالا/خدمات",
        key: "tsstam",
      },
      {
        title: "",
        key: "",
      },
      {
        title: "",
        key: "",
      },
      {
        title: "",
        key: "",
      },
      {
        title: "",
        key: "",
      },
      {
        title: "",
        key: "",
      },
    ],
  },

  payments: {
    fields: [{ title: "شماره پیگیری/شماره مرجع ", key: "trn" }],
  },
};

export default Pattern_one;
