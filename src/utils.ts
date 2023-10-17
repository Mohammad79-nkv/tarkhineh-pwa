// import "client-only";

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

export const addToCart = (item: any) => {
  const food = JSON.stringify(item);
  const allFoods = localStorage.getItem("CART");
  let updatedCart = [];
  if (allFoods) {
    updatedCart = [...JSON.parse(allFoods), item];
  } else {
    updatedCart.push(item);
  }

  localStorage.setItem("CART", JSON.stringify(updatedCart));
};
