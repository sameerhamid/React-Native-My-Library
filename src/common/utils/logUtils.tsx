// Replacement of console.log function

import {Alert} from 'react-native';

export const showConsole = (message: string): void => {
  if (__DEV__) {
    console.log(message);
  }
};

// utility to show testing console and alert, which need to be disabled in prod env

export const showMessage = <T,>(
  title: string,
  isAlert: boolean,
  ...params: T[]
) => {
  if (__DEV__) {
    if (isAlert) {
      Alert.alert(title, JSON.stringify(params));
    } else {
      console.log(`${title} >> `, params);
    }
  }
};
