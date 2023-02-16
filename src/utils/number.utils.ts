export const randomBool = () => {
  return Math.random() > 0.5;
};

// Round to 2 dp
export const round = (num: number) => {
  return Math.round(num * 100) / 100;
};
