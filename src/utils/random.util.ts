// Inclusive of max and min
export const randomBetween = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const randomBetween2dp = (min: number, max: number) => {
  const n = randomBetween(100 * min, 100 * max);
  return n / 100;
};
