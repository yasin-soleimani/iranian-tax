const Pattern_one = {
  header: {
    fields: [
      {
        title: "شماره منحصر به فرد صورت حساب مرجع",
        key: "irtaxid",
      },
      {
        title: "تاریخ و زمان ایجاد صورت حساب الکترونیکی",
        key: "Indati2m",
      },
      {
        title: "تاریخ و زمان صدور صورت حساب الکترونیکی",
        key: "indatim",
      },

      {
        title: "شماره اقتصادی فروشنده",
        key: "tins",
      },
      {
        title: "مجموع مبلغ قبل از کسر تخفیف",
        key: "tprdis",
      },
      {
        title: "مجموع مبلغ پس از کسر تخفیف",
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