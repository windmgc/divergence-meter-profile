import { getImageData } from './general';

const NUMBERS = [
  '0',
  '1',
  '2',
];

const GITHUB_NUMBERS_IMAGE_DIRECTORY_URL = 'https://raw.githubusercontent.com/windmgc/test_repo/master/src/assets/images/';

export const getPieces = async (): Promise<object> => {
  const pieceImages = {};

  for (const number of NUMBERS) {
    pieceImages[`${number}`] = await getImageData(`${GITHUB_NUMBERS_IMAGE_DIRECTORY_URL}nix${number}.jpg`);
  }

  return pieceImages;
};
