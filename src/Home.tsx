import {View, Text} from 'react-native';
import React from 'react';

const Home = (): React.ReactElement => {
  console.log('Home');

  return (
    <View style={{width: 200, height: 200, backgroundColor: 'red'}}>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
