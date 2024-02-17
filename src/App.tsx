import React, {useState} from 'react';

import {Modal, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {showConsole} from './common/utils/logUtils';
import auth, {firebase} from '@react-native-firebase/auth';

function App(): React.JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // try {
    //   const isUserCreated = await auth.createUserWithEmailAndPassword(
    //     email,
    //     password,
    //   );
    //   showConsole(`${isUserCreated}`);
    // } catch (err) {
    //   showConsole(`${err}`);
    // }
  };

  return (
    <View
      style={{
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        gap: 20,
      }}>
      <TextInput
        style={{
          width: '90%',
          height: 50,
          borderWidth: 1,
          paddingHorizontal: 22,
          fontSize: 20,
        }}
        onChangeText={value => setEmail(value)}
      />
      <TextInput
        style={{
          width: '90%',
          height: 50,
          borderWidth: 1,
          paddingHorizontal: 22,
          fontSize: 20,
        }}
        onChangeText={value => setPassword(value)}
      />
      <TouchableOpacity
        onPress={handleLogin}
        style={{
          width: '90%',
          backgroundColor: 'teal',
          height: 40,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: 'white', fontSize: 24}}>Sign in</Text>
      </TouchableOpacity>
    </View>
  );
}

export default App;
