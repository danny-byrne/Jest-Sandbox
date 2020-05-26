// export const add = (x, y) => {
//   return x + y;
// }


//if we don't have brackets we don't need return 

export const add = (x, y) => x + y;

export const total = (shipping, subTotal) => {
  return '$' + add(shipping, subTotal);
}