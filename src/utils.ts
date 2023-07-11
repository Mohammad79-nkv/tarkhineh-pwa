export function formatWithCommas(num: any): string {
  num += "";
  const parts = num.split(".");
  let intPart: string = parts[0];
  const decimalPart = parts.length > 1 ? "." + parts[1] : "";
  const rgx = /(\d+)(\d{3})/;

  while (rgx.test(intPart)) {
    intPart = intPart.replace(rgx, "$1" + "," + "$2");
  }
  return intPart + decimalPart;
}
