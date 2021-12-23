export const format = (n, d = 1) =>
  n.toLocaleString(undefined, { maximumFractionDigits: d });
