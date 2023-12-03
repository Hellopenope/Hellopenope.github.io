export const transformForHashMap = (
  data: Record<string, unknown>,
): Record<string, unknown> =>
  Object.entries(data).reduce((acc: Record<string, unknown>, [key, val]) => {
    if (typeof val === 'string') {
      acc[key] = val;
    } else {
      acc[key] = JSON.stringify(val);
    }
    return acc;
  }, {});

export const transformFromHash = (value: string): any => {
  try {
    return JSON.parse(value);
  } catch {
    return value;
  }
};
