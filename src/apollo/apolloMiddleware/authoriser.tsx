import {LocalStorageKeys} from '../../common/constants/enums';
import LocalStorageUtils from '../../common/utils/localStorageUtils';
import {showConsole} from '../../common/utils/logUtils';
import {jwtDecode} from 'jwt-decode';
import {compareAsc} from 'date-fns';

interface TokenData {
  accessToken: string;
  refreshToken: string;
}

const refreshAuthToken = async (refresh: string): Promise<string> => {
  return '';
};

export default async function Authorization(): Promise<String | null> {
  //@ts-ignore
  //get current tokens
  const tokenData: TokenData = await LocalStorageUtils.getItem(
    LocalStorageKeys.TokenData,
  );
  if (!tokenData) {
    return null;
  }

  // decode auth token
  const {accessToken} = tokenData;
  showConsole(`Access Token>>> ${accessToken}`);
  const decoded = jwtDecode(accessToken);

  showConsole(`Decoded>>> ${JSON.stringify(decoded)}`);
  // check if expired
  const gracePeriod = 2 * 60; // 2 minutes grace period for logging in just before it expires
  //@ts-ignore
  const decodedDate = new Date((decoded.exp - gracePeriod) * 1000);
  showConsole(`Decoded Date>>> ${decodedDate}`);
  const expired = compareAsc(decodedDate, new Date()) === -1;
  showConsole(`Expired>>> ${expired}`);
  if (expired) {
    showConsole(`NOW IN EXPIRED CASE =>>>>`);
    const refreshTokenData = tokenData.refreshToken;
    showConsole(`refresh>>> ${refreshTokenData}`);
  }

  return '';
}
