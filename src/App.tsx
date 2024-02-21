import React, {useEffect, useState} from 'react';

import {View} from 'react-native';

import AppNavigation from './common/routes/appNavigation';

function App(): React.JSX.Element {
  return (
    <View>
      <AppNavigation />
    </View>
  );
}

export default App;
