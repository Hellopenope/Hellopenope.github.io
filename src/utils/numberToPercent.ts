export const numberToPercent = (num: number): string =>
  new Intl.NumberFormat('en-IN', {
    style: 'percent',
    maximumFractionDigits: 2,
  }).format(num);
