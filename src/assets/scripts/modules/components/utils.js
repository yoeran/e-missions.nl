export const format = (n, d = 1) =>
  n.toLocaleString(undefined, { maximumFractionDigits: n >= 100 ? 0 : d });
