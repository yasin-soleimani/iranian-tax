import moment from "jalali-moment";

export default function ConvertToPersianDate(time: number): string {
  const m = moment(time).locale("fa").format("YYYY/MM/DD");

  return m;
}
