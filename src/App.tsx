import React, {useState} from 'react';

import {Modal, Text, TextInput, TouchableOpacity, View} from 'react-native';
import CustomText from './common/components/customText';
import CustomButton from './common/components/customButtom';

function App(): React.JSX.Element {
  return (
    <View>
      <CustomText text="sameer" />
      <CustomButton title="Custom button" />
    </View>
  );
}

export default App;
