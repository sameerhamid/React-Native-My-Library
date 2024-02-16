import {Platform} from 'react-native';
import DeviceInfo from 'react-native-device-info';

//check wheather the device is android

export const isAndroid = Platform.OS === 'android';

// check wheather the device is ios

export const isIOS = Platform.OS === 'ios';

//check wheather device is Tablet

export const isTablet = DeviceInfo.isTablet();

// check wheather the device has notch

export const hasNotch = DeviceInfo.hasNotch();

// get the device unique identifier

export const UID = DeviceInfo.getUniqueId();

//get the android version to select the permission for Gallery

export const AndroidVerion = DeviceInfo.getSystemVersion();
