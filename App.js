import React, {useEffect, useState} from 'react';

import {ActivityIndicator, Button, View, SafeAreaView} from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';
import {changeTheme, initBuild} from './src/themes';

import styles from './styles';

export default function App() {
  const [isLoad, setIsLoad] = useState(true);

  //Функція для вибору іншої теми
  const onChangeTheme = () => {
    setIsLoad(false);
    const currentTheme = EStyleSheet.value('$theme');
    const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
    changeTheme(nextTheme);
  };

  useEffect(() => {
    initBuild();

    EStyleSheet.subscribe('build', () => {
      setIsLoad(false);
    });
  }, []);

  return !isLoad ? (
    <SafeAreaView style={styles.containerStyle}>
      <Button title="Change Theme" onPress={onChangeTheme} />
    </SafeAreaView>
  ) : (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size="large" color="red" />
    </View>
  );
}
