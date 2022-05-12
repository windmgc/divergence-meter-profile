import { getImageData } from './general';

const NUMBERS = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'd',
];

const GITHUB_NUMBERS_IMAGE_DIRECTORY_URL = 'https://raw.githubusercontent.com/windmgc/divergence-meter-profile/main/src/assets/images/';

export const getPieces = async (): Promise<object> => {
  const pieceImages = {};

  for (const number of NUMBERS) {
    pieceImages[`${number}`] = await getImageData(`${GITHUB_NUMBERS_IMAGE_DIRECTORY_URL}nix${number}.jpg`);
  }

  return pieceImages;
};

export const getDivergence = async (): Promise<object> => {
  // 2010/7/28 12:00:00 UTC+9; Start of Steins Gate
  const start = 1280286000;
  // 2038/1/19 3:14:07 UTC; End of Unix Time
  const end = 2147483647;

  let t = new Date().getTime();
  t /= 1000;

  const diver = (t - start) / (end - start) * 1.048596 + (Math.sin(t / 99999) + Math.cos(t / 65535)) / 42;
  const n_diver = diver.toFixed(6);

  return String(n_diver).split("");
};
