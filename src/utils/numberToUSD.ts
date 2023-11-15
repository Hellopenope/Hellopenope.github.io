export const numberToUSD = (num: number): string =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'USD',
  }).format(num);
