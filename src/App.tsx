/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import ErrorBoundary from 'react-native-error-boundary';
import LocalStorageUtils from './common/utils/localStorageUtils';
import {LocalStorageKeys} from './common/constants/enums';
import {AuthModel} from './common/model/authModel';
import {firebase} from '@react-native-firebase/analytics';
import {LocalizeKeys} from './common/constants/localizeKeys';
import {useTranslation} from 'react-i18next';
import crashlytics from '@react-native-firebase/crashlytics';

function App(): React.JSX.Element {
  //handle crash if any occur

  const {t} = useTranslation();

  const handleAnalyticsAndCrashyliticsError = async (
    error: Error,
    stackTrace: string,
  ): Promise<void> => {
    const userData: AuthModel = await LocalStorageUtils.getItem(
      LocalStorageKeys.UserData,
    );
    if (userData?.settings?.analytics) {
      firebase.analytics().logEvent(t(LocalizeKeys.ANALYTICS_EVENT_TEXT), {
        error: error.message,
        stackTrace,
      });
      crashlytics().log(t(LocalizeKeys.CRASHLYTICS_MESSAGE));
      crashlytics().recordError(error);
    }
  };
  return (
    <ErrorBoundary onError={handleAnalyticsAndCrashyliticsError}>
      <View></View>
    </ErrorBoundary>
  );
}

export default App;
