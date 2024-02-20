import React, {useEffect, useState} from 'react';

import {
  Modal,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import CustomText from './common/components/customText';
import CustomButton from './common/components/customButtom';
import SplashScreen from 'react-native-splash-screen';

function App(): React.JSX.Element {
  useEffect(() => {
    if (Platform.OS === 'android') {
      SplashScreen.hide();
    }
  }, []);
  return (
    <View>
      <CustomText text="sameer" />
      <CustomButton title="Custom button" />
    </View>
  );
}

export default App;
