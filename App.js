import React, {useEffect, useState} from 'react';

import {ActivityIndicator, Button, View} from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';
import {changeTheme} from './themes';

const styles = EStyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: '$backgroundColor',
  },
});

export default function App() {
  const [isLoaded, setLoaded] = useState(false);

  const onChangeTheme = () => {
    const currentTheme = EStyleSheet.value('$theme');
    const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
    changeTheme(nextTheme);
  };

  useEffect(() => {
    EStyleSheet.subscribe('build', () => {
      setLoaded(true);
    });
  }, []);

  return isLoaded ? (
    <View style={styles.containerStyle}>
      <Button title="Change Theme" onPress={onChangeTheme} />
    </View>
  ) : (
    <ActivityIndicator size="large" color="red" />
  );
}
