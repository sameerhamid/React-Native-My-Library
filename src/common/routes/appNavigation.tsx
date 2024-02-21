import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Splash from '../../container/splash';
import Home from '../../Home';

const Stack = createNativeStackNavigator();

const RootStack = (): React.ReactElement => (
  <Stack.Navigator initialRouteName="Splash">
    <Stack.Screen name="Splash" component={Splash} />
    <Stack.Screen name="Home" component={Home} />
  </Stack.Navigator>
);

const AppNavigation = (): React.ReactElement => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};

export default AppNavigation;
