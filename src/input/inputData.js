export const inputSelectChildren = [...Array(18)].map((_, index) => ({
  value: index,
  label: `${index}`,
}));

export const inputSelectAdult = [...Array(99)].map((_, index) => ({
  value: index + 1,
  label: `${index + 1}`,
}));
