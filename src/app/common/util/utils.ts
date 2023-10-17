export const getRandomBackground = (type: string, maxRange: number): string => {
  const number = Math.random();
  const result = Math.floor(number * maxRange) + 1;
  return `/assets/img/backgrounds/${type}/${result}.png`;
};