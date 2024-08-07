export const shuffleArray = (array: number[]): number[] => array.sort(() => Math.random() - 0.5);

export const getRandomPosition = (): React.CSSProperties => ({
  top: `${Math.floor(Math.random() * 90)}%`,
  left: `${Math.floor(Math.random() * 90)}%`
});
