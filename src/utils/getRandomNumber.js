export function getRandomNumber(min, max) {
  const amplitude = Math.abs(max - min);
  const randomAmplitude = Math.round(Math.random() * amplitude);
  return min + randomAmplitude;
}
