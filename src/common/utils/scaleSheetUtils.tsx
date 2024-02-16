import {isTablet} from '../constants/platformInfo';

const baseWidth = isTablet ? 662 : 375;
const baseHeight = isTablet ? 970 : 667;
// adjust scalesize

export const scalesize = (size: number): number => {
  return 1;
};
