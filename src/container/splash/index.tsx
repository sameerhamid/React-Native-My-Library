import {View, Text, Platform} from 'react-native';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {useNavigation} from '@react-navigation/native';

interface Props {}

const Splash = (props: Props) => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    });
  }, []);

  navigation.navigate('Home');
  return (
    <View>
      <Text>index</Text>
    </View>
  );
};

export default Splash;
