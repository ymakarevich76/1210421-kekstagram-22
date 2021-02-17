import { getRandomIntegerNumber } from './random.js';
import { photoUsers, generatePhotoData } from './data.js';
import { renderPictures } from './picture.js';
import './modal.js';

getRandomIntegerNumber(1,10);
generatePhotoData(25,1,10);
renderPictures(photoUsers);
