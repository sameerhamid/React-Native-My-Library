import {Alert} from 'react-native';
import {AlertStyle} from '../constants/enums';
import Toast from 'react-native-simple-toast';

export const showAlert = (
  title: string,
  description: string,
  lefButtonText: string,
  rightButtonText: string,
  onPressOk: (_value?: string | undefined) => void,
): void => {
  Alert.alert(title, description, [
    {
      text: lefButtonText,
      onPress: onPressOk,
      style: AlertStyle.cancel,
    },
    {
      text: rightButtonText,
      onPress: () => {},
    },
  ]);
};

export const showOkAlert = (
  title: string,
  description: string,
  onPressOk: (_value?: string | undefined) => void,
): void => {
  Alert.alert(title, description, [
    {
      text: 'OK',
      onPress: onPressOk,
      style: AlertStyle.default,
    },
  ]);
};

export const showToast = (
  message?: string,
  duration?: number,
  style?: string[] | undefined,
) => {
  if (message !== undefined) {
    //@ts-ignore
    Toast.show(message, duration, style);
  }
};
